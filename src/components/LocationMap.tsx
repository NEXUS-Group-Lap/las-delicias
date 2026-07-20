import { Map, MapMarker, MarkerContent } from "@/components/ui/mapcn-layer-markers";
import { bakeryLocation } from "@/data/deliveryStops";

export default function LocationMap() {
  return (
    <Map
      theme="light"
      center={[bakeryLocation.longitude, bakeryLocation.latitude]}
      zoom={13.5}
      interactive={false}
      attributionControl={false}
      className="h-full w-full"
    >
      <MapMarker longitude={bakeryLocation.longitude} latitude={bakeryLocation.latitude}>
        <MarkerContent>
          <div className="flex h-11 w-11 items-center justify-center">
            <div className="relative h-3.5 w-3.5">
              <span className="pointer-events-none absolute inset-0 animate-[delivery-pulse_2.4s_ease-out_infinite] rounded-full bg-[var(--accent)]/60" />
              <span className="pointer-events-none absolute inset-0 rounded-full border-2 border-white bg-[var(--accent)] shadow-lg" />
            </div>
          </div>
        </MarkerContent>
      </MapMarker>
    </Map>
  );
}
