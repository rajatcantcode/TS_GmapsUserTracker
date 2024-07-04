import { Mappable } from "./CustomMaps";

export class User implements Mappable {
  location: {
    latitude: number;
    longitude: number;
  };
  name: string;
  constructor(lat: number, lng: number, userName: string) {
    this.location = {
      latitude: lat,
      longitude: lng,
    };
    this.name = userName;
  }
  markerContent(): string {
    return `      
      <div class="text-black">
        <h1>${this.name}</h1>
      </div>`;
  }
}
