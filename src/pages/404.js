import React from "react"
import { useBreakpointValue, Button, Heading, VStack } from "@chakra-ui/react"
import { Link } from "gatsby"

const ErrorPage = () => {
  return (
    <VStack
      spacing="4"
      justifyContent="center"
      alignItems="center"
      minH="100vh"
    >
      <Heading as="h1" size="4xl" noOfLines={1}>
        404
      </Heading>
      <Heading
        as="h2"
        size={useBreakpointValue({
          base: "sm",
          md: "md",
        })}
      >
        La pagina che cercavi non esiste!
      </Heading>
      <Link to="/">
        <Button size="xl" variant="primary">
          Home
        </Button>
      </Link>
    </VStack>
  )
}

export default ErrorPage
