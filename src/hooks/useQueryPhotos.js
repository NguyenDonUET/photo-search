import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useGlobalContext } from "../context/context"

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`

const getPhotos = async ({ queryKey }) => {
  const { searchVal, page } = queryKey[1]
  const result = await axios.get(
    `${url}&query=${searchVal}&per_page=12&page=${page}`
  )
  return result.data
}

export default function useQueryPhotos(searchVal, page) {
  const { setTotalPage, setIsSearching } = useGlobalContext()
  return useQuery({
    queryKey: ["images", { searchVal, page }],
    queryFn: getPhotos,
    retry: 1,
    onSuccess: (data) => {
      setTotalPage(data.total_pages)
    },
    onError: (error) => {
      console.log(error)
    },
    onSettled: () => {
      setIsSearching(false)
    },
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    staleTime: 20000,
  })
}
