import {
  Box,
  Button,
  Heading,
  HStack,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"
import * as React from "react"
import { Gallery } from "./Gallery"
import { PriceTag } from "./PriceTag"
import { QuantityPicker } from "./QuantityPicker"
import MyPortableProduct from "./myPortableProductDescription"

export const ProductDetail = ({ product }) => {
  const imageGallery = product.imagesGallery
  return (
    <Box
      maxW="7xl"
      mx="auto"
      px={{
        base: "4",
        md: "8",
        lg: "12",
      }}
      py={{
        base: "6",
        md: "8",
        lg: "12",
      }}
    >
      <Stack
        direction={{
          base: "column-reverse",
          lg: "row",
        }}
        spacing={{
          base: "6",
          lg: "12",
          xl: "16",
        }}
      >
        <Stack
          spacing={{
            base: "6",
            lg: "8",
          }}
          maxW={{
            lg: "sm",
          }}
          justify="center"
        >
          <Stack
            spacing={{
              base: "3",
              md: "4",
            }}
          >
            <Stack spacing="3">
              <Heading size="lg" fontWeight="medium">
                {product.name}
              </Heading>
            </Stack>
            <PriceTag
              price={product.price}
              currency="EUR"
              rootProps={{
                fontSize: "xl",
              }}
            />
            <Text color={useColorModeValue("gray.600", "gray.400")}>
              <MyPortableProduct value={product._rawProductDescription} />
            </Text>
          </Stack>
          <HStack
            spacing={{
              base: "4",
              md: "8",
            }}
            align="flex-end"
            justify="space-evenly"
          >
            <Box flex="1">
              <QuantityPicker defaultValue={1} max={3} />
            </Box>
            <Box flex="1">
              <Link
                to={`/categories/${product.productCategory[0].slug.current}`}
              >
                <Button
                  variant="secondary"
                  size="lg"
                  fontSize="md"
                  width="full"
                >
                  <Text fontSize="sm" fontWeight="semibold" color="accent">
                    {product.productCategory[0].title}
                  </Text>
                </Button>
              </Link>
            </Box>
          </HStack>
          <Button variant="primary" size="lg">
            Add to cart
          </Button>
        </Stack>
        <Gallery
          rootProps={{
            overflow: "hidden",
            flex: "1",
          }}
          images={imageGallery}
        />
      </Stack>
    </Box>
  )
}
