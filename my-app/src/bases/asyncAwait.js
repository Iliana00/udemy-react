const getImage = async() =>{
    try{
        const apiKey = 'vKz3Bm8Ifm0BPxE0JpYSa5HSbUa5M2EX';
        const resp = await  fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const {data} = await resp.json();
        const {url} = await data.images.original
        const img = document.createElement('img');
        img.src = url
    
        document.body.append(img)
        
        console.log(data)
    } catch(error) {
console.error(error)
    }
    
}
getImage();