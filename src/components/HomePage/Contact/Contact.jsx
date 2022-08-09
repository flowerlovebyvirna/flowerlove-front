import {
  Button,
  Container,
  FormControl,
  Textarea,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react"
import * as React from "react"
import { Logo } from "./Logo"

export const Contact = () => (
  <Container
    maxW="md"
    py={{
      base: "12",
      md: "24",
    }}
  >
    <Stack spacing="8">
      <Stack spacing="6" align="center">
        <Logo />
        <Stack spacing="3" textAlign="center">
          <Heading
            size={useBreakpointValue({
              base: "xs",
              md: "sm",
            })}
          >
            Create an account
          </Heading>
          <Text color="muted">Start making your dreams come true</Text>
        </Stack>
      </Stack>
      <Stack spacing="6">
        <Stack spacing="5">
          <FormControl isRequired>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input id="name" type="text" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input id="email" type="email" />
          </FormControl>
        </Stack>
        <Stack spacing="4">
          <Textarea placeholder="Here is a sample placeholder" />
          <Button variant="primary">Send Message</Button>
        </Stack>
      </Stack>
    </Stack>
  </Container>
)
