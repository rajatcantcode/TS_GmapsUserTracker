import getUserLocation from "./getUserLocation";
import { User } from "./User";
import { CustomMaps } from "./CustomMaps";
import { getUserLocationByName } from "./getUserLocationByName";

getUserLocation()
  .then((position: any) => {
    const userLatitude = position.coords.latitude;
    const userLongitude = position.coords.longitude;

    const customMap = new CustomMaps("map", userLatitude, userLongitude);
    const user = new User(userLatitude, userLongitude, "Rajat");
    customMap.addMarker(user);

    getUserLocationByName(userLatitude, userLongitude);
  })
  .catch((error) => {
    console.error(error);
  });
