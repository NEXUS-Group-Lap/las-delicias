import React from "react";
import {
  Map,
  MapMarker,
  MarkerContent,
  MarkerLabel,
  MarkerPopup,
  MapControls,
} from "@/components/ui/mapcn-layer-markers";
import { deliveryStops, bakeryLocation } from "@/data/deliveryStops";

type DeliveryStopsMapProps = {
  bakeryLabel: string;
  stopNote: string;
};

// Roughly the state of Florida — keeps panning/zooming (and tile downloads) inside it.
const FLORIDA_BOUNDS: [[number, number], [number, number]] = [
  [-87.7, 24.3],
  [-79.7, 31.1],
];

export default function DeliveryStopsMap({ bakeryLabel, stopNote }: DeliveryStopsMapProps) {
  return (
    <Map
      theme="light"
      center={[-81.3, 26.9]}
      zoom={6.3}
      minZoom={5.5}
      maxZoom={12}
      maxBounds={FLORIDA_BOUNDS}
      className="rounded-[min(1vw,12px)]"
    >
      <MapControls showZoom showFullscreen />

      <MapMarker longitude={bakeryLocation.longitude} latitude={bakeryLocation.latitude}>
        <MarkerContent>
          <div className="flex h-11 w-11 items-center justify-center">
            <div className="h-3.5 w-3.5 rounded-full border-2 border-white bg-[var(--accent)] shadow-lg" />
          </div>
        </MarkerContent>
        <MarkerLabel className="font-medium text-[var(--accent)]">{bakeryLabel}</MarkerLabel>
      </MapMarker>

      {deliveryStops.map((stop) => (
        <MapMarker key={stop.city} longitude={stop.longitude} latitude={stop.latitude}>
          <MarkerContent>
            <div className="flex h-11 w-11 items-center justify-center">
              <div className="relative h-2.5 w-2.5">
                <span className="pointer-events-none absolute inset-0 animate-[delivery-pulse_2.4s_ease-out_infinite] rounded-full bg-[var(--accent)]/60" />
                <span className="pointer-events-none absolute inset-0 animate-[delivery-pulse_2.4s_ease-out_infinite] rounded-full bg-[var(--accent)]/60 [animation-delay:1.2s]" />
                <span className="pointer-events-none absolute inset-0 rounded-full border-2 border-white bg-[var(--ink)] shadow-md" />
              </div>
            </div>
          </MarkerContent>
          <MarkerLabel>{stop.city}</MarkerLabel>
          <MarkerPopup>
            <p className="font-medium">{stop.city}</p>
            <p className="mt-1 text-xs text-muted-foreground">{stopNote}</p>
          </MarkerPopup>
        </MapMarker>
      ))}
    </Map>
  );
}
