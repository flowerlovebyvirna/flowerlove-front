import {
  Box,
  Heading,
  HStack,
  Icon,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react"
import * as React from "react"
import { VscCircleFilled } from "react-icons/vsc"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { format } from "date-fns"
import MyPortableText from "../MyPortableText"

export const SinglePost = props => {
  const { blog, isHero } = props
  return (
    <Link
      _hover={{
        textDecor: "none",
      }}
      role="group"
    >
      <Stack spacing="8">
        <Box overflow="hidden">
          <GatsbyImage
            image={blog.coverImage.asset.gatsbyImageData}
            alt={blog.coverImage.alt}
            className="blog-img"
          />
        </Box>
        <Stack spacing="6">
          <Stack spacing="3">
            <HStack
              spacing="1"
              fontSize="sm"
              fontWeight="semibold"
              color="accent"
            >
              <Link to={`/blogs/${blog.blogCategory[0].slug.current}`}>
                {blog.blogCategory[0].title}
              </Link>
              <Icon as={VscCircleFilled} boxSize="2" />
              <Text>
                {format(new Date(blog.publishedAt), "p, MMM dd yyyy")}
              </Text>
            </HStack>
            <Heading
              size={useBreakpointValue({
                base: "xs",
                md: isHero ? "sm" : "xs",
              })}
            >
              {blog.title}
            </Heading>
            <MyPortableText value={blog._rawBody} />
          </Stack>
        </Stack>
      </Stack>
    </Link>
  )
}
