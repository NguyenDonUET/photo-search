import React, { useRef } from "react"
import { useGlobalContext } from "../context/context"

export default function SearchForm() {
  const { setSearchVal, isSearching, setIsSearching, searchVal } =
    useGlobalContext()

  const handleSubmit = (e) => {
    e.preventDefault()
    const searchVal = e.target.elements.search.value
    if (searchVal.length > 0) {
      setIsSearching(true)
      setSearchVal(searchVal)
    }
  }

  return (
    <section>
      <h1 className='text-titleColor mt-4 mb-10 text-center text-4xl md:text-5xl md:tracking-wide font-bold capitalize '>
        Unplash images
      </h1>
      <form
        onSubmit={handleSubmit}
        className='w-[90vw] max-w-[600px] mx-auto mb-14 grid grid-cols-[1fr_auto] gap-2 '
      >
        <input
          autoFocus
          type='search'
          className='w-full px-4 py-3 border-2 rounded-md outline-none focus:border-blue-600 text-black disabled:bg-gray-400 disabled:border-gray-400'
          name='search'
          placeholder='Nhập từ khóa'
          autoComplete='off'
          defaultValue={searchVal}
          disabled={isSearching}
        />
        <button
          disabled={isSearching}
          type='submit'
          className='btn disabled:opacity-60 disabled:hover:bg-blue-600 disabled:hover:cursor-not-allowed bg-blue-600 outline-blue-500 hover:bg-blue-400 transition-all duration-300 focus:bg-blue-400'
        >
          Tìm kiếm
        </button>
      </form>
    </section>
  )
}
