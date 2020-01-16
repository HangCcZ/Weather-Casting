const searchElement = document.querySelector("#search");
const searchForm = document.querySelector('#searchForm');
const searchBox = new google.maps.places.SearchBox(searchElement);
searchBox.addListener('places_changed', async () => {
    const place = searchBox.getPlaces()[0];
    if(place === null){
        return;
    }
    
    const latitude = place.geometry.location.lat();
    const longitude= place.geometry.location.lng();
    

    let location = searchElement.value;
    // set location value to latitude and longitude, append location for display purpose
    searchElement.value = `${latitude}.${longitude},${location}`
    // submit form
    searchForm.submit();
    
    // fetch('/weather',{
    //     method:'POST',
    //     headers:{
    //         'Content-Type':'application/json',
    //         'Accept': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         latitude,longitude
    //     })
    // })
    // .then(res=>{
    //     console.log(res);
    // })
    // .catch(()=>{
    //     console.log("error in fetch");
    // })
}
);




