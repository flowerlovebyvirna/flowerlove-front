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
} from "@chakra-ui/react"
import * as React from "react"
import { useForm, ValidationError } from "@formspree/react"
import { Logo } from "./Logo"

export const Contact = () => {
  const [state, handleSubmit] = useForm("mknenbor")
  if (state.succeeded) {
    return (
      <Container
        maxW="md"
        py={{
          base: "12",
          md: "24",
        }}
      >
        <Stack spacing="6" align="center">
          <Logo />
          <Stack spacing="3" textAlign="center">
            <Heading size="sm">Messaggio inviato</Heading>
            <Text color="muted">Grazie per averci contattato</Text>
          </Stack>
        </Stack>
      </Container>
    )
  }
  return (
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
            <Heading size="sm">Contattaci</Heading>
            <Text color="muted">lorem ipsum dolet</Text>
          </Stack>
        </Stack>
        <Stack spacing="6">
          <Stack spacing="5">
            <form onSubmit={handleSubmit}>
              <FormControl>
                <FormLabel htmlFor="name">Nome</FormLabel>
                <Input id="name" type="text" />
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input id="email" type="email" name="email" />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
                <Stack spacing="4">
                  <FormLabel htmlFor="message">Messaggio</FormLabel>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Scrivi il tuo messaggio..."
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                  <Button
                    type="submit"
                    disabled={state.submitting}
                    variant="primary"
                  >
                    Invia
                  </Button>
                </Stack>
              </FormControl>
            </form>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  )
}
