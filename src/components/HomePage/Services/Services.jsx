import {
  Box,
  Container,
  Heading,
  Icon,
  SimpleGrid,
  Square,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react"
import { features } from "./data"
import React from "react"

export const Services = () => (
  <Box as="section" bg="bg-surface">
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
        <Stack
          spacing={{
            base: "4",
            md: "5",
          }}
          maxW="3xl"
        >
          <Stack spacing="3">
            <Text
              fontSize={{
                base: "sm",
                md: "md",
              }}
              fontWeight="semibold"
              color="accent"
            >
              Services
            </Text>
            <Heading
              size={useBreakpointValue({
                base: "sm",
                md: "md",
              })}
            >
              What can you expect?
            </Heading>
          </Stack>
          <Text
            color="muted"
            fontSize={{
              base: "lg",
              md: "xl",
            }}
          >
            A bundle of 210+ ready-to-use, responsive and accessible components
            with clever structured sourcode files.
          </Text>
        </Stack>
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          columnGap={8}
          rowGap={{
            base: 10,
            md: 16,
          }}
        >
          {features.map(feature => (
            <Stack
              key={feature.name}
              spacing={{
                base: "4",
                md: "5",
              }}
            >
              <Square
                size={{
                  base: "10",
                  md: "12",
                }}
                bg="accent"
                color="inverted"
                borderRadius="lg"
              >
                <Icon
                  as={feature.icon}
                  boxSize={{
                    base: "5",
                    md: "6",
                  }}
                />
              </Square>
              <Stack
                spacing={{
                  base: "1",
                  md: "2",
                }}
                flex="1"
              >
                <Text
                  fontSize={{
                    base: "lg",
                    md: "xl",
                  }}
                  fontWeight="medium"
                >
                  {feature.name}
                </Text>
                <Text color="muted">{feature.description}</Text>
              </Stack>
              {/* <Button
                variant="link"
                colorScheme="blue"
                rightIcon={<FiArrowRight fontSize="1.25rem" />}
                alignSelf="start"
              >
                Read more
              </Button> */}
            </Stack>
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  </Box>
)
