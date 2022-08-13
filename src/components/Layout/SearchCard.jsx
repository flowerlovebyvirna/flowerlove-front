import { Spacer, Box, Button, Flex, Text } from "@chakra-ui/react"
import * as React from "react"
import { Link } from "gatsby"
import { useFlexSearch } from "react-use-flexsearch"

export const SearchCard = ({
  searchQuery,
  blogsIndexStore,
  productsIndexStore,
  onClose,
  resetValue,
}) => {
  const blogResult = useFlexSearch(
    searchQuery,
    JSON.stringify(blogsIndexStore.index),
    blogsIndexStore.store
  )
  const productResult = useFlexSearch(
    searchQuery,
    JSON.stringify(productsIndexStore.index),
    productsIndexStore.store
  )
  return (
    <>
      {blogResult.length === 0 && productResult.length === 0 ? (
        <Flex alignItems="center" gap="2">
          <Box p="2">
            <Text>Nessun Risultato</Text>
          </Box>
          <Spacer />
        </Flex>
      ) : (
        <>
          {blogResult.map(item => {
            return (
              <Flex key={item.id} alignItems="center" gap="2">
                <Box p="2">
                  <Text>{item.title}</Text>

                  <Link
                    onClick={resetValue}
                    to={`/blogs/${item.blogCategory[0].slug.current}`}
                  >
                    <Text color="pink.500" fontSize="sm">
                      {item.blogCategory[0].title}
                    </Text>
                  </Link>
                </Box>
                <Spacer />

                <Button onClick={resetValue} variant="primary">
                  <Link to={`/blogs/${item.slug.current}`}>Leggi</Link>
                </Button>
              </Flex>
            )
          })}
          {productResult.map(item => {
            return (
              <Flex key={item.id} alignItems="center" gap="2">
                <Box p="2">
                  <Text>{item.name}</Text>

                  <Link
                    onClick={resetValue}
                    to={`/products/${item.productCategory[0].slug.current}`}
                  >
                    <Text color="pink.500" fontSize="sm">
                      {item.productCategory[0].title}
                    </Text>
                  </Link>
                </Box>
                <Spacer />

                <Button onClick={resetValue} variant="primary">
                  <Link to={`/products/${item.slug.current}`}>Vai</Link>
                </Button>
              </Flex>
            )
          })}
        </>
      )}
    </>
  )
}
