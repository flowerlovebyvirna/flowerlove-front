import {
  Box,
  Heading,
  HStack,
  Stack,
  Text,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react"
import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export const BlogPost = props => {
  const {
    img,
    alt,
    blogCatSlug,
    blogCatTitle,
    slug,
    title,
    excerpt,
    publishedAt,
    isHero,
  } = props
  return (
    <Box
      _hover={{
        textDecor: "none",
      }}
      role="group"
    >
      <Stack spacing="8">
        <Box overflow="hidden">
          <GatsbyImage image={img} alt={alt} className="blog-img" />
        </Box>
        <Stack spacing="6">
          <Stack spacing="3">
            <HStack
              spacing="1"
              fontSize="sm"
              fontWeight="semibold"
              color="accent"
            >
              <Text fontSize="sm" fontWeight="semibold" color="accent">
                <Link to={`/blogs/${blogCatSlug}`}>{blogCatTitle}</Link>
              </Text>
            </HStack>
            <Heading
              size={useBreakpointValue({
                base: "xs",
                md: isHero ? "sm" : "xs",
              })}
            >
              <Link to={`/blogs/${slug}`}>{title}</Link>
            </Heading>
            <Text color="muted">{excerpt}</Text>
          </Stack>
          <HStack>
            <Text>{new Date(publishedAt).toLocaleString()}</Text>
          </HStack>
        </Stack>
        <Button width="35%" variant="primary">
          <Link to={`/blogs/${slug}`}>Leggi</Link>
        </Button>
      </Stack>
    </Box>
  )
}
