export interface Mappable {
  location: {
    latitude: number;
    longitude: number;
  };
  name: string;
  markerContent(): string;
}

export class CustomMaps {
  private googleMap: google.maps.Map;

  constructor(divId: string, lat: number, long: number) {
    const mapDiv = document.getElementById(divId) as HTMLDivElement;
    this.googleMap = new google.maps.Map(mapDiv, {
      zoom: 6,
      center: {
        lat: lat,
        lng: long,
      },
    });
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.latitude,
        lng: mappable.location.longitude,
      },
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
