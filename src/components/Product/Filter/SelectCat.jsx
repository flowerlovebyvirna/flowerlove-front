import React from "react"
import { Select } from "@chakra-ui/react"
import { navigate } from "gatsby"

const SelectCat = ({ cat }) => {
  const newCat = [
    { id: "0987362372", title: "All", slug: { current: "all" } },
    ...cat,
  ]
  const navigateTo = e => {
    e.preventDefault()
    if (e.target.value === "all") {
      navigate(`/products`)
    } else {
      navigate(`/products/${e.target.value}`)
    }
  }

  return (
    <Select
      size="sm"
      aria-label="Filtra per"
      placeholder="Ricorrenza"
      focusBorderColor="pink.500"
      rounded="md"
      onChange={e => navigateTo(e)}
    >
      {newCat.map(item => (
        <option key={item.id} value={item.slug.current}>
          {item.title}
        </option>
      ))}
    </Select>
  )
}

export default SelectCat
