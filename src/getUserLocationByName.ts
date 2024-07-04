export function getUserLocationByName(
  latitude: number,
  longitude: number
): void {
  const apiKey = "d5aa86ba8b9341278ef72d1687028c93";
  const locationDiv = document.getElementById("locationInfo") as HTMLElement;
  // Open Cage api
  const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.results && data.results.length > 0) {
        const placeName = data.results[0].formatted;
        locationDiv.innerHTML = "";
        locationDiv.innerHTML += `<br>Place Name: ${placeName}`;
      } else {
        locationDiv.innerHTML = "";
        locationDiv.innerHTML += "<br>Place name not found.";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      locationDiv.innerHTML += "<br>Could not retrieve place name.";
    });
}
