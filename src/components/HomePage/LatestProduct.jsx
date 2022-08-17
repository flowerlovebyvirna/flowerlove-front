import {
  Box,
  Button,
  Stack,
  Text,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react"
import React from "react"
import { Link } from "gatsby"
import { PriceTag } from "../Product/ProductCard/PriceTag"
import { GatsbyImage } from "gatsby-plugin-image"
const LatestProduct = ({ name, cat, alt, img, id, slug, price }) => {
  return (
    <Stack spacing="8">
      <Box overflow="hidden">
        <GatsbyImage className="blog-img" image={img} alt={alt} />
      </Box>
      <Stack>
        <Stack spacing="1">
          <Text
            fontWeight="medium"
            color={useColorModeValue("gray.700", "gray.400")}
          >
            <Link to={`/products/${slug}`}>{name}</Link>
          </Text>
          <Text fontWeight="medium" color="pink.500">
            <Link to={`/products`}>{cat}</Link>
          </Text>
          <PriceTag price={price} currency="EUR" />
        </Stack>
      </Stack>

      <HStack align="left">
        <Button
          className="snipcart-add-item"
          data-item-id={id}
          data-item-price={price}
          data-item-url={`/products/${slug}`}
          data-item-name={name}
          data-item-image={img.images.fallback.src}
          variant="primary"
          isFullWidth
        >
          Aggiungi al carrello
        </Button>
      </HStack>
    </Stack>
  )
}

export default LatestProduct
