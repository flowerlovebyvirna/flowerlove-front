import {
  Box,
  Button,
  Container,
  Heading,
  Img,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react"
import * as React from "react"
import { Link } from "gatsby"

export const Hero = () => (
  <Box as="section" bg="bg-surface">
    <Box
      position="relative"
      height={{
        lg: "720px",
      }}
    >
      <Container
        py={{
          base: "16",
          md: "24",
        }}
        height="full"
      >
        <Stack
          direction={{
            base: "column",
            lg: "row",
          }}
          spacing={{
            base: "16",
          }}
          align={{
            lg: "center",
          }}
          height="full"
        >
          <Stack
            spacing={{
              base: "8",
              md: "12",
            }}
          >
            <Stack spacing="4">
              <Stack
                spacing={{
                  base: "4",
                  md: "6",
                }}
                maxW={{
                  md: "xl",
                  lg: "md",
                  xl: "xl",
                }}
              >
                <Heading
                  size={useBreakpointValue({
                    base: "md",
                    md: "xl",
                  })}
                >
                  Lorem ipsum dolor sit amet consect
                </Heading>
                <Text
                  fontSize={{
                    base: "lg",
                    md: "xl",
                  }}
                  color="muted"
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Veritatis quidem est libero error doloremque.
                </Text>
              </Stack>
            </Stack>
            <Stack
              direction={{
                base: "column",
                md: "row",
              }}
              spacing="3"
            >
              <Link to="/products">
                <Button
                  variant="primary"
                  size={useBreakpointValue({
                    base: "lg",
                    md: "xl",
                  })}
                >
                  Aquista
                </Button>
              </Link>
              <Link to="/blogs">
                <Button
                  variant="secondary"
                  size={useBreakpointValue({
                    base: "lg",
                    md: "xl",
                  })}
                >
                  Blog
                </Button>
              </Link>
            </Stack>
          </Stack>
          <Box
            pos={{
              lg: "absolute",
            }}
            right="0"
            bottom="0"
            w={{
              base: "full",
              lg: "50%",
            }}
            height={{
              base: "96",
              lg: "full",
            }}
            sx={{
              clipPath: {
                lg: "polygon(7% 0%, 100% 0%, 100% 100%, 0% 100%)",
              },
            }}
          >
            <Img
              boxSize="full"
              objectFit="cover"
              src="https://images.unsplash.com/photo-1596438459194-f275f413d6ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="Lady at work"
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  </Box>
)
