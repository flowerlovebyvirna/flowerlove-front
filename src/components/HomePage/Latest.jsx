import {
  Box,
  Button,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react"
import { Link } from "gatsby"
import * as React from "react"
import LatestProduct from "./LatestProduct"
import { BlogPost } from "../BlogHome/BlogPost"

export const Latest = ({
  latestNews,
  latestProduct,
  latestTitle,
  recomended,
  recomendedProduct,
}) => {
  const isMobile = useBreakpointValue({
    base: true,
    md: false,
  })
  return (
    <Box bg="bg-surface">
      <Container
        py={{
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
          <Stack direction="row" justify="space-between">
            <Stack
              spacing={{
                base: "4",
                md: "5",
              }}
            >
              <Stack spacing="3">
                <Text
                  color="accent"
                  fontWeight="semibold"
                  fontSize={{
                    base: "sm",
                    md: "md",
                  }}
                >
                  Il nostro {latestTitle}
                </Text>
                <Heading
                  size={useBreakpointValue({
                    base: "sm",
                    md: "md",
                  })}
                >
                  Le ultime dal nostro {latestTitle}
                </Heading>
              </Stack>
              <Text
                color="muted"
                fontSize={{
                  base: "lg",
                  md: "xl",
                }}
              >
                Ice cream pudding dragée macaroon donut marzipan chocolate
              </Text>
            </Stack>
            {!isMobile &&
              (latestNews ? (
                <Link to="/blogs">
                  <Button variant="primary" size="lg">
                    Vai
                  </Button>
                </Link>
              ) : (
                <Link to="/products">
                  <Button variant="primary" size="lg">
                    Vai
                  </Button>
                </Link>
              ))}
          </Stack>
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
            {latestNews &&
              latestNews.map(item => (
                <BlogPost
                  key={item.id}
                  img={item.coverImage.asset.gatsbyImageData}
                  alt={item.coverImage.alt}
                  blogCatTitle={item.blogCategory[0].title}
                  blogCatSlug={item.blogCategory[0].slug.current}
                  slug={item.slug.current}
                  title={item.title}
                  excerpt={item.excerpt[0].children[0].text}
                  publishedAt={item.publishedAt}
                />
              ))}
            {latestProduct &&
              latestProduct.map(item => (
                <LatestProduct
                  price={item.price}
                  name={item.name}
                  cat={item.productCategory[0].title}
                  alt={item.coverImage.alt}
                  img={item.coverImage.asset.gatsbyImageData}
                  id={item.id}
                  key={item.id}
                  slug={item.slug.current}
                />
              ))}
            {recomended &&
              recomendedProduct.map(item => (
                <LatestProduct
                  price={item.price}
                  name={item.name}
                  cat={item.productCategory[0].title}
                  alt={item.coverImage.alt}
                  img={item.coverImage.asset.gatsbyImageData}
                  id={item.id}
                  key={item.id}
                  slug={item.slug.current}
                />
              ))}
          </SimpleGrid>
          {isMobile &&
            (latestNews ? (
              <Link to="/blogs">
                <Button variant="primary" size="lg">
                  Vai al blog
                </Button>
              </Link>
            ) : (
              <Link to="/blogs">
                <Button variant="primary" size="lg">
                  Vai al blog
                </Button>
              </Link>
            ))}
        </Stack>
      </Container>
    </Box>
  )
}
