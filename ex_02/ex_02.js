document.addEventListener('DOMContentLoaded', function() {
var map = L.map('map').setView([48.87100869090948,2.374276654160744],13 );
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([49.190458159630964, 2.197768857217452]).addTo(map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();
var marker = L.marker([51.5, -0.09]).addTo(map);

var epitechIcon = L.icon({
    iconUrl: "https://www.pngkit.com/png/detail/459-4596239_epitech-epitech-logo-transparent.png",
    iconSize: [38], 
    iconAnchor: [19, 38],
    popupAnchor: [0, -30], 
  });

var ecoles = [
    { name: "Paris", coords: [48.8680816661552,  2.37316974881876], popupText: "on est ici !" },
    { name: "Bordeaux", coords: [44.87677783060703, -0.5791317092719958], popupText: "Ici c'est Bordeaux !"},
    { name: "Lyon", coords: [45.74630760676641, 4.834913369221462], popupText: "Ici, c'est Lyon !" },
    { name: "Nantes", coords: [47.210705610554626, -1.5669246785744686], popupText: "Ici, c'est Nantes !" },
    { name: "Nice", coords: [43.66974774200689, 7.215462082584339], popupText: "Ici, c'est Nice !" },
  ].forEach(function (city) {
    var marker = L.marker(city.coords, { icon: epitechIcon }).addTo(map).bindPopup(city.popupText);

    var labelMarker = L.marker(city.coords, {
      icon: L.divIcon({
        className: "city-label", 
        html: `<span class="city-name">${city.name}</span>`, 
        iconSize: [100, 20],
        iconAnchor: [50, -15],
      }),  }).addTo(map);
    labelMarker.on("click", function (e) {
      var cityNameElement = e.target._icon.querySelector(".city-name")
      if (!cityNameElement.textContent.includes(" ")) {
        cityNameElement.textContent += " rocks!";
      }
})
  })})
