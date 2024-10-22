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
      <button>
        <input type='file' onChange={(e) => { setImageUpload(e.target.files[0]) }} />
        <button onClick={uploadImage} className='bg-slate-400'>upload image</button>
      </button>
      {renderImage.map((url) => {
        return (
          <div>
            <img className='w-8 h-8 rounded-full' src={url} alt='' />
          </div>
        )
      })}

    </div>
  );
}

export default ImageUpload;