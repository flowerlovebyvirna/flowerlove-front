import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  Button,
  ButtonGroup,
  Container,
  Text,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
  Input,
  useDisclosure,
} from "@chakra-ui/react"
import { graphql, Link, useStaticQuery } from "gatsby"
import * as React from "react"
import { useState, useRef } from "react"
import { FiMenu, FiSearch } from "react-icons/fi"
import { AiOutlineShoppingCart } from "react-icons/ai"
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
  const btnRef = useRef()
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
  }

  const resetValue = () => {
    setSearchQuery("")
    onClose()
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
                      ref={btnRef}
                      onClick={onOpen}
                      icon={<FiSearch fontSize="1.25rem" />}
                      aria-label="Search"
                    />
                    <IconButton
                      icon={<AiOutlineShoppingCart fontSize="1.25rem" />}
                      aria-label="Cart"
                      className="snipcart-checkout"
                    />
                  </ButtonGroup>
                </HStack>
              </>
            ) : (
              <ButtonGroup variant="ghost-on-accent" spacing="1">
                <IconButton
                  variant="ghost-on-accent"
                  onClick={onOpen}
                  icon={<FiMenu fontSize="1.25rem" />}
                  aria-label="Open Menu"
                />
                <IconButton
                  icon={<AiOutlineShoppingCart fontSize="1.25rem" />}
                  aria-label="Cart"
                  className="snipcart-checkout"
                />
              </ButtonGroup>
            )}
            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Menu</DrawerHeader>

                <DrawerBody>
                  <Box onClick={resetValue}>
                    <Link to="/">
                      <Text fontWeight="bold">Home</Text>
                    </Link>
                  </Box>
                  <Box onClick={resetValue}>
                    <Link to="/blogs">
                      <Text fontWeight="bold">Blog</Text>
                    </Link>
                  </Box>
                  <Box onClick={resetValue}>
                    <Link to="/products">
                      <Text fontWeight="bold">Shop</Text>
                    </Link>
                  </Box>
                  <Text fontWeight="bold" fontSize="1.25rem" pt="4" pb="4">
                    Ricerca
                  </Text>
                  <Input
                    value={searchQuery}
                    setValue={setSearchQuery}
                    onFocus={handleOnFocus}
                    onChange={e => setSearchValue(e)}
                    placeholder="Cerca"
                  />
                  {searchQuery && blogsIndexStore && productsIndexStore ? (
                    <>
                      <SearchCard
                        resetValue={resetValue}
                        onClose={onClose}
                        searchQuery={searchQuery}
                        blogsIndexStore={blogsIndexStore}
                        productsIndexStore={productsIndexStore}
                      />
                    </>
                  ) : (
                    ""
                  )}
                </DrawerBody>

                <DrawerFooter>
                  {/* <Button variant="primary" mr={3} onClick={resetValue}>
                    Chiudi
                  </Button> */}
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </Flex>
        </Container>
      </Box>
    </Box>
  )
}
