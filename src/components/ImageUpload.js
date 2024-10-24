import React, { useEffect, useState } from 'react';
import { storage } from './firebase-config';
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
function ImageUpload(props) {
  const [imageUpload, setImageUpload] = useState(null)
  const [renderImage, setRenderImage] = useState([])
  const imageListRef = ref(storage, `image/`)
  const uploadImage = () => {
    if (imageUpload === null) return
    const imageRef = ref(storage, `image/${imageUpload.name}`);
    uploadBytes(imageRef, imageUpload).then(() => {
      alert("image Uploaded")
    })
  }

  useEffect(() => {
    listAll(imageListRef).then((res) => {
      res.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setRenderImage((prev) => [
            ...prev, url
          ]
          )
        })
      })
    })
  }, [])
  return (
    <div>
      <h1>ImageUpload</h1>
      <input type='file' onChange={(e) => { setImageUpload(e.target.files[0]) }} />
      <button onClick={uploadImage} className='bg-slate-400'>upload image</button>
      {renderImage.map((item) => {
        return (
          <div>
            <img className='w-8 h-8 rounded-full' src={item.url} alt='' />
          </div>
        )
      })}


      <button className="inline-flex items-center gap-1 cursor-pointer" >
        <div className='bg-slate-500'>
          <input type='file' onChange={(e) => { setImageUpload(e.target.files[0]) }} />
        </div>
        <button onClick={uploadImage} className='bg-slate-400'>upload image</button>
      </button>

      <label className="inline-flex items-center gap-1 cursor-pointer"
        type='file' onChange={(e) => { setImageUpload(e.target.files[0]) }}
      >Cover
        <svg data-slot="icon" className="w-6 h-5 text-blue-700" fill="none" strokeWidth="1.5"
          stroke="currentColor" viewBox="0 0 24 24"
          aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z">
          </path>
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z">
          </path>
        </svg>
      </label>
    </div>
  );
}

export default ImageUpload;