import { useEffect, useState } from "react"
import { Article } from "../components/Article"
import { v4 as uuidv4 } from "uuid"
import { useData } from "../contexts/context"

export function MainSection() {
  const { URL } = useData()

  const [data, setData] = useState<any | undefined>()

  useEffect(() => {
    fetch(URL)
      .then((jsonData) => jsonData.json())
      .then((data) => setData(data))
  }, [URL])

  return (
    <div className="flex h-full w-full flex-row flex-wrap overflow-auto text-white ">
      {data?.articles?.map((article: any) => (
        <Article key={uuidv4()} data={article} />
      ))}
    </div>
  )
}
