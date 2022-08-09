import { PortableText } from "@portabletext/react"
import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import theme from "react-syntax-highlighter/dist/esm/styles/prism/vs-dark"
import { Text, Heading } from "@chakra-ui/react"

const myPortableProductDescription = {
  block: {
    normal: ({ children }) => <Text>{children}</Text>,
    h1: ({ children }) => <Heading>{children}</Heading>,
  },
  marks: {
    code: ({ children }) => (
      <SyntaxHighlighter style={theme}>
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    ),
  },
  types: {
    customCode: ({ value }) => (
      <SyntaxHighlighter
        style={theme}
        language={value.code.language}
        className="bodyCode"
      >
        {String(value.code.code).replace(/\n$/, "")}
      </SyntaxHighlighter>
    ),
  },
}

function MyPortableProduct({ value }) {
  return (
    <PortableText value={value} components={myPortableProductDescription} />
  )
}

export default MyPortableProduct
