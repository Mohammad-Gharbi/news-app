import { Button } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"
import { BiHomeAlt, BiSearchAlt, BiCategoryAlt } from "react-icons/bi"

export function Navigation() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center rounded-2xl bg-slate-900 p-6 shadow-md">
      <NavLink to="../components/Home">
        <Button
          w={"10rem"}
          mb={4}
          leftIcon={<BiHomeAlt />}
          colorScheme="telegram"
        >
          Home
        </Button>
      </NavLink>
      <NavLink to="../components/Search">
        <Button
          w={"10rem"}
          mb={4}
          leftIcon={<BiSearchAlt />}
          colorScheme="telegram"
        >
          Search
        </Button>
      </NavLink>
      <NavLink to="../components/Categories">
        <Button
          w={"10rem"}
          mb={4}
          leftIcon={<BiCategoryAlt />}
          colorScheme="telegram"
        >
          Categories
        </Button>
      </NavLink>
    </div>
  )
}
