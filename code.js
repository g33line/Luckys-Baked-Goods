let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 17.1835, lng: 120.4704 },
    zoom: 15,
    mapTypeId: "terrain"

  });
  //declaring marker as an info window const marker = 
    new google.maps.Marker({
    position:{lat: 17.1835, lng: 120.4704},
    map: map,
    label: "",
    title: "Lucky's Baked Goods",
    draggable: false,
    Animation: google.maps.Animation.BOUNCE, //DROP
    //customize marker icon:".png"
});
/*
const infoWindow = new google.maps.InfoWindow({
    content: "<p>This is an info window</p>"
});
infoWindow.open(map, marker);*/
}

initMap();