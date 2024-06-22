function init() {
  try {
    const COORDINATES = [55.834683, 49.124026];
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
          coordinates: COORDINATES,
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
  if (loader && map) {
    map.style.display = "flex";
    loader.style.display = "none";
  } else {
    console.warn("Loader or map element not found.");
  }
}
