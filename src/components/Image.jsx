import React from "react"
import DownloadButton from "./Buttons/DownloadButton"

export default function Image({ url, description, openPopUp }) {
  return (
    <div className='image-wrapper relative'>
      <img
        width={416}
        height={300}
        onClick={openPopUp}
        src={url}
        alt={description}
        className='cursor-pointer block object-cover max-w-full w-full md:h-[300px] rounded-lg'
      />
      <DownloadButton imageUrl={url} fileName={description} />
    </div>
  )
}
