import {
  AspectRatio,
  Box,
  Button,
  HStack,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  Image,
  Skeleton,
} from "@chakra-ui/react"
import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { PriceTag } from "./PriceTag"
import { Link } from "gatsby"

export const ProductCard = props => {
  const { product, rootProps } = props
  const pathToImage = getImage(product.coverImage.asset.gatsbyImageData)
  console.log("here", pathToImage)
  return (
    <Stack
      spacing={useBreakpointValue({
        base: "4",
        md: "5",
      })}
      {...rootProps}
    >
      <Box position="relative">
        <AspectRatio ratio={3 / 4}>
          <Link to={`/products/${product.slug.current}`}>
            {/* <GatsbyImage
              image={product.coverImage.asset.gatsbyImageData}
              alt={product.coverImage.alt}
            /> */}
            <Image
              src={pathToImage.images.fallback.src}
              alt={product.coverImage.alt}
              draggable="false"
              fallback={<Skeleton />}
              borderRadius={useBreakpointValue({
                base: "md",
                md: "xl",
              })}
            />
          </Link>
        </AspectRatio>
      </Box>
      <Stack>
        <Stack spacing="1">
          <Text
            fontWeight="medium"
            color={useColorModeValue("gray.700", "gray.400")}
          >
            <Link to={`/products/${product.slug.current}`}>{product.name}</Link>
          </Text>
          <Text fontWeight="medium" color="pink.500">
            <Link
              to={`/products/${product.productCategory[0].title.toLowerCase()}`}
            >
              {product.productCategory[0].title}
            </Link>
          </Text>
          <PriceTag price={product.price} currency="EUR" />
        </Stack>
      </Stack>

      <HStack align="left">
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
          isFullWidth
        >
          Aggiungi al carrello
        </Button>
      </HStack>
    </Stack>
  )
}
