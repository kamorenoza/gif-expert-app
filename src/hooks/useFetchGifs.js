import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs.js"

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getImages = async () => {
    const newImages = await getGifs(category)
    setImages(newImages)
    setIsLoading(false)
  }

  // Si queda vacía las deps (array) se ejecuta solo cuando se crea el componente
  // Debe regresar una función
  useEffect(() => {
    getImages()
  }, [ ])

  return {
    images,
    isLoading
  }
}
