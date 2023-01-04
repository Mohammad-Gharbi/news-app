import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
} from "@chakra-ui/react"
import { useRef } from "react"
import { BiSearchAlt } from "react-icons/bi"
import { useData } from "../contexts/context"

export function Search() {
  const searchInput = useRef<HTMLInputElement | null>(null)

  const { setURL } = useData()

  return (
    <>
      <div className="mx-4 text-white">
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<BiSearchAlt color="white" />}
          />
          <Input
            ref={searchInput}
            colorScheme="telegram"
            placeholder="Search..."
          />
          <Button
            onClick={() => {
              if (searchInput.current!.value === "") {
                return
              } else {
                setURL(
                  `https://newsapi.org/v2/everything?q=${
                    searchInput.current!.value
                  }&apiKey=009009c2d668424eb81aa4f4bebc66be`
                )
              }
            }}
            mx={4}
            colorScheme="blue"
          >
            <Icon as={BiSearchAlt} color="white" boxSize={5} />
          </Button>
        </InputGroup>
      </div>
    </>
  )
}
