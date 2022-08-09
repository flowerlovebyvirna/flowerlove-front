import {
  Box,
  Flex,
  Heading,
  HStack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react"
import * as React from "react"
import { ProductLayout } from "../ProductCard/ProductLayout"
import SelectCat from "./SelectCat"

export const FilterLayout = ({
  allCatHome,
  products,
  productsLength,
  single,
  list,
  catProduct,
  allCat,
  productsCat,
}) => {
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
      <Heading
        size="lg"
        mt={{
          base: "6",
          md: "10",
        }}
        mb="8"
      >
        Men's Watches
      </Heading>

      <Flex
        justify="space-between"
        align="center"
        display={{
          base: "flex",
          md: "flex",
        }}
      >
        <HStack flexShrink={0}>
          <Text
            as="label"
            htmlFor="sort-by"
            color={mode("gray.600", "gray.400")}
            fontWeight="medium"
            fontSize="sm"
            whiteSpace="nowrap"
          >
            Sort by
          </Text>
          {list && <SelectCat cat={allCatHome} />}
          {single && <SelectCat cat={allCat} />}
        </HStack>
      </Flex>

      <Box
        mt={{
          base: "6",
          md: "10",
        }}
        minH="50vh"
        width="full"
      >
        {list && <ProductLayout products={products} />}
        {single && <ProductLayout products={productsCat} />}
      </Box>
    </Box>
  )
}
