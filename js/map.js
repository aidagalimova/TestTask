function init() {
  try {
    const myMap = new ymaps.Map(
      "map",
      {
        center: [55.834683, 49.124026],
        zoom: 15,
      },
      {
        searchControlProvider: "yandex#search",
      }
    );
    const myGeoObject = new ymaps.GeoObject(
      {
        geometry: {
          type: "Point",
          coordinates: [55.834683, 49.124026],
        },
        properties: {
          iconContent: "Home",
          hintContent: "Sweet Home",
        },
      },
      {
        preset: "islands#blackStretchyIcon",
      }
    );
    myMap.geoObjects.add(myGeoObject);
  } catch (error) {
    console.log(error);
  } finally {
    hideLoader();
  }
}

function hideLoader() {
  const loader = document.getElementById("loader");
  const map = document.getElementById("map");
  map.style.display = "flex";
  loader.style.display = "none";
}
