export const getGifs = async (category) => {
  const apiKey = 'Wl9ICcON6vL0bO8mn8R75t7dgAlcTfYh'
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`

  const resp = await fetch(url)
  const { data = [] }  = await resp.json()

  return data.map( img =>{
    return{
      id: img.id,
      title: img.title,
      url:img.images.downsized_medium.url
    }
  })
}
