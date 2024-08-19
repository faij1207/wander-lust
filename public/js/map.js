


  mapboxgl.accessToken =mapToken;
const map= new mapboxgl.Map({
container: 'map', // container ID
// Choose from Mapbox's core styles, or make your own style with Mapbox stdio
style: 'mapbox://styles/mapbox/streets-v12', // style URL
center: listing.geometry.coordinates, // starting position [lng, lat]
zoom: 9
// starting zoom
});

const marker=new mapboxgl.Marker({color:"red"})
.setLngLat(listing.geometry.coordinates)
.setPopup(
  new mapboxgl.Popup({offset: 25})
  .setHTML(`<h3> ${listing.title}</h3><p>Exact Location will be provide after booking </p>`)
)
.addTo(map);