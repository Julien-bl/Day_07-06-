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
    iconUrl: "https://www.pngkit.com/png/detail/459-4596239_epitech-epitech-logo-transparent.png", // Remplace par le chemin de l'icône locale
    iconSize: [38], // Taille de l'icône
    iconAnchor: [19, 38], // Point de l'icône à ancrer à la position du marqueur
    popupAnchor: [0, -30], // Position du popup par rapport à l'icône
  });

var ecoles = [
    { name: "Paris", coords: [48.8566, 2.3522], popupText: "on est ici" },
    { name: "Bordeaux", coords: [44.8378, -0.5792], popupText: ""},
    { name: "Lyon", coords: [45.764, 4.8357], popupText: "" },
    { name: "Toulouse", coords: [43.6045, 1.4442], popupText: "" },
    { name: "Nantes", coords: [47.2184, -1.5536], popupText: "" },
    { name: "Nice", coords: [43.7102, 7.262], popupText: "" },
  ]

  .forEach(function (city) {
    // Ajout du marqueur avec l'icône
    var marker = L.marker(city.coords, { icon: epitechIcon })
      .addTo(map)
      .bindPopup(city.popupText);
   
    // Ajout d'un deuxième marqueur pour le texte (label)
    var labelMarker = L.marker(city.coords, {
      icon: L.divIcon({
        className: "city-label", // Classe CSS pour personnaliser le label
        html: `<span class="city-name">${city.name}</span>`, // Le nom de la ville dans un span cliquable
        iconSize: [100, 20], // Taille du label
        iconAnchor: [50, -15], // Ancre le texte sous l'icône
      }),
    }).addTo(map);
   
    // Ajout d'un événement click pour ajouter " rocks!" après le nom de la ville
    labelMarker.on("click", function (e) {
      //ajout de (e)
      var cityNameElement = e.target._icon.querySelector(".city-name"); // replace document by e.target._icon
      if (!cityNameElement.textContent.includes(" rocks!")) {
        cityNameElement.textContent += " rocks!";
      }

})
  })})