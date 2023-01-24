import {GifGridItem} from "./GifGridItem"
import {useFetchGifs} from "../hooks/useFetchGifs.js";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category)

  return (
    <>
      <h3>{ category }</h3>
      { isLoading && <h2 >Cargando...</h2> }
      <div className="card-grid">
        {
          // { ...image } -> Esto sirve para esparcir los atributos y leerlos como props
          images.map(image => (
            <GifGridItem key={ image.id } { ...image } />
          ))
        }
      </div>
    </>
  )
}
