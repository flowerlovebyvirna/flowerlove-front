import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
  InputGroup,
  Icon,
  Input,
  InputLeftElement,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react"
import { graphql, Link, useStaticQuery } from "gatsby"
import * as React from "react"
import { useState } from "react"
import { FiHelpCircle, FiMenu, FiSearch, FiSettings } from "react-icons/fi"
import { Logo } from "./Logo"
import axios from "axios"
import { SearchCard } from "./SearchCard"

const query = graphql`
  {
    localSearchBlogs {
      publicIndexURL
      publicStoreURL
    }
    localSearchProducts {
      publicStoreURL
      publicIndexURL
    }
  }
`

export const Navbar = () => {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  })
  const [searchQuery, setSearchQuery] = useState("")
  const { isOpen, onOpen, onClose } = useDisclosure()
  const data = useStaticQuery(query)
  const [blogsIndexStore, setBlogsIndexStore] = useState(null)
  const [productsIndexStore, setProductsIndexStore] = useState(null)
  const {
    publicStoreURL: blogsPublicStoreURL,
    publicIndexURL: blogsPublicIndexURL,
  } = data.localSearchBlogs
  const {
    publicStoreURL: productsPublicStoreURL,
    publicIndexURL: productsPublicIndexURL,
  } = data.localSearchProducts
  const handleOnFocus = async () => {
    if (blogsIndexStore && productsIndexStore) return

    const [
      { data: blogsIndex },
      { data: blogStore },
      { data: productsIndex },
      { data: productsStore },
    ] = await Promise.all([
      axios.get(blogsPublicIndexURL),
      axios.get(blogsPublicStoreURL),
      axios.get(productsPublicIndexURL),
      axios.get(productsPublicStoreURL),
    ])
    setBlogsIndexStore({
      index: blogsIndex,
      store: blogStore,
    })
    setProductsIndexStore({
      index: productsIndex,
      store: productsStore,
    })
  }
  const setSearchValue = e => {
    setSearchQuery(e.target.value)
    console.log(searchQuery)
  }

  return (
    <Box as="section">
      <Box as="nav" bg="bg-accent" color="on-accent">
        <Container
          py={{
            base: "3",
            lg: "4",
          }}
        >
          <Flex justify="space-between">
            <HStack spacing="4">
              <Logo />
              {isDesktop && (
                <ButtonGroup variant="ghost-on-accent" spacing="1">
                  <Button>
                    <Link to="/">Home</Link>
                  </Button>
                  <Button>
                    <Link to="/blogs">Blog</Link>
                  </Button>
                  <Button>
                    <Link to="/products">Shop</Link>
                  </Button>
                </ButtonGroup>
              )}
            </HStack>
            {isDesktop ? (
              <>
                <HStack spacing="4">
                  <ButtonGroup variant="ghost-on-accent" spacing="1">
                    <IconButton
                      onClick={onOpen}
                      icon={<FiSearch fontSize="1.25rem" />}
                      aria-label="Search"
                    />
                    <IconButton
                      icon={<FiSettings fontSize="1.25rem" />}
                      aria-label="Settings"
                    />
                    <IconButton
                      icon={<FiHelpCircle fontSize="1.25rem" />}
                      aria-label="Help Center"
                    />
                  </ButtonGroup>
                  <Avatar
                    boxSize="10"
                    name="Christoph Winston"
                    src="https://tinyurl.com/yhkm2ek8"
                  />
                </HStack>
              </>
            ) : (
              <IconButton
                variant="ghost-on-accent"
                icon={<FiMenu fontSize="1.25rem" />}
                aria-label="Open Menu"
              />
            )}
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <InputGroup
                    size="lg"
                    maxW={{
                      md: "sm",
                    }}
                  >
                    <InputLeftElement pointerEvents="none">
                      <Icon as={FiSearch} color="on-accent" boxSize="5" />
                    </InputLeftElement>
                    <Input
                      value={searchQuery}
                      setValue={setSearchQuery}
                      onFocus={handleOnFocus}
                      onChange={e => setSearchValue(e)}
                      placeholder="Search"
                      variant="filled"
                      colorScheme="blue"
                    />
                  </InputGroup>
                  <SearchCard />
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Button variant="ghost">Secondary Action</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Flex>
        </Container>
      </Box>
    </Box>
  )
}

//30.20
