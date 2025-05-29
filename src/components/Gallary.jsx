import React, { useState } from "react"
import ImageViewer from "react-simple-image-viewer"
import { useGlobalContext } from "../context/context"
import useQueryPhotos from "../hooks/useQueryPhotos"
import Image from "./Image"
import LoadingSkeletonImage from "./LoadingSkeletonImage"

export default function Gallary() {
  const [isViewerOpen, setIsViewerOpen] = useState(false)
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
  const { searchVal, page } = useGlobalContext()
  const { data, isError, isLoading, error } = useQueryPhotos(searchVal, page)

  // console.log("🚀 ~ data:", data);
  if (isLoading) {
    return (
      <div className='images-container'>
        {[...Array(12)].map((_, index) => (
          <LoadingSkeletonImage key={index} />
        ))}
      </div>
    )
  }
  if (isError) {
    return (
      <div className='images-container'>
        <h4>Error {error.message}...</h4>
      </div>
    )
  }

  const photos = data.results
  const photoUrls = photos.map((photo) => photo.urls.full)
  if (photos.length === 0) {
    return <h4 className='text-center text-lg min-h-screen'>No photo found</h4>
  }

  const openImageViewer = (index) => {
    setCurrentPhotoIndex(index)
    setIsViewerOpen(true)
  }

  const closeImageViewer = () => {
    setCurrentPhotoIndex(0)
    setIsViewerOpen(false)
  }
  return (
    <div className='images-container'>
      {photos?.map((item, index) => {
        const regularUrl = item?.urls?.regular
        return (
          <Image
            key={item.id}
            url={regularUrl}
            description={item.alt_description}
            openPopUp={() => {
              openImageViewer(index)
            }}
          />
        )
      })}

      {isViewerOpen && (
        <ImageViewer
          src={photoUrls}
          currentIndex={currentPhotoIndex}
          onClose={closeImageViewer}
          disableScroll={false}
          backgroundStyle={{
            backgroundColor: "rgba(0,0,0,0.9)",
          }}
          closeOnClickOutside={true}
        />
      )}
    </div>
  )
}
