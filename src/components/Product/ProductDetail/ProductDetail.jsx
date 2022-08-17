import {
  Box,
  Button,
  Heading,
  HStack,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"
import { Link } from "gatsby"
import * as React from "react"
import { Gallery } from "./Gallery"
import { PriceTag } from "./PriceTag"
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
              <Button variant="secondary" size="lg" fontSize="md" width="full">
                <Link
                  to={`/products/${product.productCategory[0].slug.current}`}
                >
                  <Text fontSize="sm" fontWeight="semibold" color="accent">
                    {product.productCategory[0].title}
                  </Text>
                </Link>
              </Button>
            </Box>
          </HStack>
          <Button
            className="snipcart-add-item"
            data-item-id={product.id}
            data-item-price={product.price}
            data-item-url={`/products/${product.slug.current}`}
            data-item-name={product.name}
            data-item-image={
              product.coverImage.asset.gatsbyImageData.images.fallback.src
            }
            variant="primary"
            size="lg"
          >
            Aggiungi al carrello
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
