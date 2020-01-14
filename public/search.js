const searchElement = document.querySelector("#search");
const searchBox = new google.maps.places.SearchBox(searchElement);
searchBox.addListener('places_changed', async () => {
    const place = searchBox.getPlaces()[0];
    if(place === null){
        return;
    }
    
    const latitude = place.geometry.location.lat();
    const longitude= place.geometry.location.lng();
    // POST latitude and longitude to server as Json
    fetch('/weather',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            latitude,longitude
        })
    })
    .then(res=>{
        console.log(res);
    })
    .catch(()=>{
        console.log("error in fetch");
    })
}
);




