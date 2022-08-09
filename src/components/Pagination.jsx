import * as React from "react"
import { Link } from "gatsby"
import { Button, Stack } from "@chakra-ui/react"

export const Pagination = ({
  prevPage,
  nextPage,
  currentPage,
  numberOfPages,
}) => {
  return (
    <Stack direction="row" justify="center">
      <Stack direction="row">
        <Link to={prevPage}>
          <Button disabled={currentPage === 1} variant="primary" size="lg">
            Prev
          </Button>
        </Link>
        <Link to={nextPage}>
          <Button
            disabled={currentPage === numberOfPages}
            variant="primary"
            size="lg"
          >
            Next
          </Button>
        </Link>
      </Stack>
    </Stack>
  )
}
