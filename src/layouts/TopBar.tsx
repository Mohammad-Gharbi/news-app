import { Filters } from "../components/Filters"
import { Search } from "../components/Search"

export function TopBar() {
  return (
    <div className="w-full h-full flex flex-row justify-between p-3 shadow-xl">
      <div className="text-white font-bold text-2xl">Top Headlines</div>
      <div className="flex flex-row">
        <Search />
        <Filters />
      </div>
    </div>
  )
}
