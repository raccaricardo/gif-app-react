
export const getFetchGifs = async( query, limit  = 2 ) => {
    
    
     const url = `https://api.giphy.com/v1/gifs/search?api_key=bl2gzB2CmrW3D4dj2QIoaeERDSwJZrwO&q=${ encodeURI(query) }&limit=${limit}`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        // url: img.images.downsize_medium.url
        url: img.images?.downsized_medium.url, //el signo ? es para indicar que pueden no llegar llegar
      };
    });
    return gifs;
   
}

