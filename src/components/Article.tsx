import { Badge } from "@chakra-ui/react"

export function Article({ data }: any) {
  const date = new Date(data.publishedAt)
  return (
    <a
      href={data.url}
      target="_blank"
      className="m-4 flex h-96 w-80 flex-col	 items-center rounded-xl bg-slate-800 p-3 outline-2 outline-offset-4 outline-blue-500 transition-all hover:scale-[1.05] hover:outline "
    >
      <img
        className="mb-4 h-40 w-full rounded-xl"
        src={data.urlToImage}
        alt=""
      />
      <div className="flex h-full flex-col justify-between p-3">
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
