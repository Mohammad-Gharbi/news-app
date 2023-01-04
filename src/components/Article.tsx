import { Badge } from "@chakra-ui/react"

export function Article({ data }: any) {
  const date = new Date(data.publishedAt)
  return (
    <a
      href={data.url}
      target="_blank"
      className="hover:outline outline-offset-4 outline-2 outline-blue-500	 hover:scale-[1.05] transition-all flex flex-col rounded-xl bg-slate-800 w-80 h-96 m-4 items-center "
    >
      <img
        className="w-full h-40 rounded-t-xl mb-4"
        src={data.urlToImage}
        alt=""
      />
      <div className="flex flex-col justify-between p-3 h-full">
        <div className="">
          <Badge className="text-sm" colorScheme="blue" mb="1" w="fit-content">
            {date.toDateString()}
          </Badge>
          <p className="font-bold">{data.title}</p>
        </div>
        <div>
          <Badge
            className="text-sm text-black"
            colorScheme="gray"
            mb="1"
            w="fit-content"
          >
            {data.source.name}
          </Badge>
        </div>
      </div>
    </a>
  )
}
