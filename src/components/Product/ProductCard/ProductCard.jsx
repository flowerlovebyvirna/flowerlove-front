import {
  AspectRatio,
  Box,
  Button,
  HStack,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react"
import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { PriceTag } from "./PriceTag"
import { Link } from "gatsby"

export const ProductCard = props => {
  const { product, rootProps } = props
  return (
    <Stack
      spacing={useBreakpointValue({
        base: "4",
        md: "5",
      })}
      {...rootProps}
    >
      <Box position="relative">
        <AspectRatio ratio={4 / 3}>
          <GatsbyImage
            image={product.coverImage.asset.gatsbyImageData}
            alt={product.coverImage.alt}
          />
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
        <Button variant="primary" isFullWidth>
          Add to cart
        </Button>
      </HStack>
    </Stack>
  )
}
