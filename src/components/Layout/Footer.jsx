import {
  Box,
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Image,
  Text,
} from "@chakra-ui/react"
import * as React from "react"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import logo from "../../img/bitmap.svg"

export const Footer = () => (
  <Box bg="bg-accent" color="on-accent">
    <Container
      as="footer"
      role="contentinfo"
      py={{
        base: "12",
        md: "16",
      }}
    >
      <Stack
        spacing={{
          base: "4",
          md: "5",
        }}
      >
        <Stack justify="space-between" direction="row" align="center">
          <Image width="173.3px" height="32px" src={logo} />
          <ButtonGroup variant="ghost-on-accent">
            <IconButton
              as="a"
              href="#"
              aria-label="LinkedIn"
              icon={<FaLinkedin fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="GitHub"
              icon={<FaGithub fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="Twitter"
              icon={<FaTwitter fontSize="1.25rem" />}
            />
          </ButtonGroup>
        </Stack>
        <Text pl="1.3rem" fontSize="sm" color="on-accent-subtle">
          &copy; {new Date().getFullYear()} Flower & Art, Inc. All rights
          reserved.
        </Text>
      </Stack>
    </Container>
  </Box>
)
