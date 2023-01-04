import { Button } from "@chakra-ui/react"
import { BiSliderAlt } from "react-icons/bi"

export function Filters() {
  return (
    <>
      <Button
        w={"7rem"}
        mb={4}
        leftIcon={<BiSliderAlt />}
        colorScheme="telegram"
      >
        Filters
      </Button>
    </>
  )
}
