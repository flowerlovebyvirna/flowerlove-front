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
    <Link
      to={`/products/${slug}`}
      key={id}
      _hover={{
        textDecor: "none",
      }}
      role="group"
    >
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
          <Button variant="primary" isFullWidth>
            Add to cart
          </Button>
        </HStack>
        {/* <Stack spacing="3">
          <Text fontSize="sm" fontWeight="semibold" color="accent">
            {cat}
          </Text>
          <Heading size="xs">{name}</Heading>
          <Button w="50%" variant="primary">
            Aggiungi al carrello
          </Button>
        </Stack> */}
      </Stack>
    </Link>
  )
}

export default LatestProduct
