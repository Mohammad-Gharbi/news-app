import { Grid, GridItem } from "@chakra-ui/react"
import { Filters } from "./components/Filters"
import { MainSection } from "./layouts/MainSection"
import { Navigation } from "./layouts/Navigation"
import { TopBar } from "./layouts/TopBar"

function App() {
  return (
    <div className="w-full h-screen fixed bg-black">
      <Grid
        height="100vh"
        padding={6}
        width="100vw"
        templateColumns="repeat(5, 1fr)"
        templateRows="repeat(10, 1fr)"
        gap={4}
      >
        <GridItem colSpan={1} rowStart={1} rowEnd={11}>
          <Navigation />
        </GridItem>
        <GridItem colStart={2} colEnd={6} rowSpan={1}>
          <TopBar />
        </GridItem>
        <GridItem colStart={2} colEnd={6} rowStart={2} rowEnd={11}>
          <MainSection />
        </GridItem>
      </Grid>
    </div>
  )
}

export default App
