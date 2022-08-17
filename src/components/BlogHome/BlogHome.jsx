import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react"
import * as React from "react"
import { BlogPost } from "./BlogPost"
import { Pagination } from "../Pagination"
import { SinglePost } from "./SinglePost"

export const BlogHome = ({
  categ,
  catBlog,
  blogsCat,
  currentPage,
  numberOfPages,
  blogs,
  blog,
  single,
  paginated,
  home,
}) => {
  const prevPage =
    currentPage - 1 === 0 || currentPage - 1 === 1
      ? `/blogs`
      : `/blogs/${currentPage - 1}`

  const nextPage =
    currentPage === numberOfPages
      ? `/blogs/${currentPage}`
      : `/blogs/${currentPage + 1}`
  return (
    <Box bg="bg-surface">
      <Box bg="bg-accent" color="on-accent">
        <Container
          pt={{
            base: "16",
            md: "24",
          }}
          pb={{
            base: "32",
            md: "48",
          }}
        >
          <Stack
            spacing={{
              base: "8",
              md: "10",
            }}
            align="center"
          >
            <Stack
              spacing={{
                base: "4",
                md: "6",
              }}
              textAlign="center"
            >
              <Stack spacing="4">
                <Text
                  fontWeight="semibold"
                  color="blue.50"
                  fontSize={{
                    base: "sm",
                    md: "md",
                  }}
                >
                  {categ ? catBlog.title : "Il Nostro Blog"}
                </Text>
                <Heading
                  size={useBreakpointValue({
                    base: "md",
                    md: "lg",
                  })}
                >
                  {categ
                    ? `Nuovi ${catBlog.title} post`
                    : "Le ultime news dal Blog"}
                </Heading>
              </Stack>
              <Text
                fontSize={{
                  base: "lg",
                  md: "xl",
                }}
                maxW="2xl"
                color="on-accent-muted"
              >
                {categ
                  ? catBlog.description[0].children[0].text
                  : "Ice cream pudding dragée macaroon donut marzipan chocolate"}
              </Text>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Container
        pb={{
          base: "16",
          md: "24",
        }}
        mt={{
          base: "-16",
          md: "-24",
        }}
      >
        <Stack
          spacing={{
            base: "16",
            md: "24",
          }}
        >
          <Stack
            spacing={{
              base: "12",
              md: "16",
            }}
          >
            {home && (
              <>
                <BlogPost
                  img={blogs[0].coverImage.asset.gatsbyImageData}
                  alt={blogs[0].coverImage.alt}
                  slug={blogs[0].slug.current}
                  title={blogs[0].title}
                  excerpt={blogs[0].excerpt[0].children[0].text}
                  publishedAt={blogs[0].publishedAt}
                  blogCatTitle={blogs[0].blogCategory[0].title}
                  blogCatSlug={blogs[0].blogCategory[0].slug.current}
                  isHero
                />
                <SimpleGrid
                  columns={{
                    base: 1,
                    md: 2,
                    lg: 3,
                  }}
                  gap={{
                    base: "12",
                    lg: "8",
                  }}
                >
                  {blogs.slice(1).map(post => (
                    <BlogPost
                      key={post.id}
                      img={post.coverImage.asset.gatsbyImageData}
                      alt={post.coverImage.alt}
                      blogCatTitle={post.blogCategory[0].title}
                      blogCatSlug={post.blogCategory[0].slug.current}
                      slug={post.slug.current}
                      title={post.title}
                      excerpt={post.excerpt[0].children[0].text}
                      publishedAt={post.publishedAt}
                    />
                  ))}
                </SimpleGrid>
              </>
            )}
            {single && <SinglePost blog={blog} />}
            {categ && (
              <>
                <BlogPost
                  img={blogsCat[0].coverImage.asset.gatsbyImageData}
                  alt={blogsCat[0].coverImage.alt}
                  blogCatTitle={blogsCat[0].blogCategory[0].title}
                  blogCatSlug={blogsCat[0].blogCategory[0].slug.current}
                  slug={blogsCat[0].slug.current}
                  title={blogsCat[0].title}
                  excerpt={blogsCat[0].excerpt[0].children[0].text}
                  publishedAt={blogsCat[0].publishedAt}
                  isHero
                />
                <SimpleGrid
                  columns={{
                    base: 1,
                    md: 2,
                    lg: 3,
                  }}
                  gap={{
                    base: "12",
                    lg: "8",
                  }}
                >
                  {blogsCat.slice(1).map(post => (
                    <BlogPost
                      key={post.id}
                      img={post.coverImage.asset.gatsbyImageData}
                      alt={post.coverImage.alt}
                      blogCatTitle={post.blogCategory[0].title}
                      blogCatSlug={post.blogCategory[0].slug.current}
                      slug={post.slug.current}
                      title={post.title}
                      excerpt={post.excerpt[0].children[0].text}
                      publishedAt={post.publishedAt}
                    />
                  ))}
                </SimpleGrid>
              </>
            )}
            {paginated && (
              <Pagination
                nextPage={nextPage}
                currentPage={currentPage}
                prevPage={prevPage}
                numberOfPages={numberOfPages}
              />
            )}
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
