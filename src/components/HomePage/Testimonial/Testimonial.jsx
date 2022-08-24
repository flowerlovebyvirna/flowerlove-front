import { Box, Heading, SimpleGrid, useBreakpointValue } from "@chakra-ui/react"
import * as React from "react"
import { CardWithAvatar } from "./CardWithAvatar"
import data from "./data.json"
import { UserInfo } from "./UserInfo"

export const Testimonial = () => (
  <Box
    px={{
      base: "6",
      md: "8",
    }}
    py="6"
  >
    <Box
      as="section"
      maxW={{
        base: "xs",
        md: "3xl",
      }}
      mx="auto"
    >
      <Heading
        textAlign="center"
        pb="12"
        size={useBreakpointValue({
          base: "sm",
          md: "md",
        })}
      >
        Dicono di noi
      </Heading>
      <SimpleGrid
        columns={{
          base: 1,
          md: 3,
        }}
        spacing="6"
      >
        {data.map(user => {
          const { name, bio, src, isVerified } = user
          return (
            <CardWithAvatar
              key={name}
              avatarProps={{
                src,
                name,
              }}
            >
              <UserInfo mt="3" name={name} bio={bio} isVerified={isVerified} />
            </CardWithAvatar>
          )
        })}
      </SimpleGrid>
    </Box>
  </Box>
)
