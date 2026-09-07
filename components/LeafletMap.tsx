"use client";

import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface LeafletMapProps {
  lat?: number;
  lng?: number;
  zoom?: number;
  locationName?: string;
  address?: string;
}

export default function LeafletMap({
  lat = 25.9377,
  lng = 49.6738,
  zoom = 14,
  locationName = "Al Attaf Headquarters",
  address = "6584-Abqaiq 33261-Taif St, Al Madiynah, Saudi Arabia",
}: LeafletMapProps) {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;
    if (mapInstanceRef.current) return;

    // Initialize Leaflet map centered on coordinates without attribution control
    const map = L.map(mapContainerRef.current, {
      center: [lat, lng],
      zoom: zoom,
      scrollWheelZoom: false,
      attributionControl: false,
    });

    mapInstanceRef.current = map;

    // OpenStreetMap standard tile layer without attribution watermark
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "",
    }).addTo(map);

    // Custom sharp SVG marker pin
    const customIcon = L.divIcon({
      className: "custom-osm-marker",
      html: `
        <div style="display: flex; flex-direction: column; align-items: center; transform: translate(-50%, -100%);">
          <div style="background: #0f172a; color: #ffffff; font-size: 11px; font-weight: 700; padding: 4px 8px; border-radius: 4px; box-shadow: 0 4px 8px rgba(0,0,0,0.3); white-space: nowrap; margin-bottom: 4px; border: 1px solid rgba(255,255,255,0.2);">
            ${locationName}
          </div>
          <div style="width: 32px; height: 32px; border-radius: 50%; background: #1d4ed8; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 10px rgba(0,0,0,0.35); border: 2px solid #ffffff;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
        </div>
      `,
      iconSize: [0, 0],
      iconAnchor: [0, 0],
    });

    const marker = L.marker([lat, lng], { icon: customIcon }).addTo(map);

    marker.bindPopup(`
      <div style="font-family: sans-serif; padding: 4px; font-size: 12px; color: #1e293b;">
        <strong style="color: #0f172a; font-size: 13px;">${locationName}</strong><br/>
        <span style="color: #475569; font-size: 11px;">${address}</span><br/>
        <a href="https://www.google.com/maps/search/?api=1&query=6584-Abqaiq+33261-Taif+St+Al+Madiynah+Saudi+Arabia" target="_blank" rel="noopener noreferrer" style="color: #1d4ed8; font-weight: 600; text-decoration: underline; margin-top: 4px; display: inline-block;">
          Get Directions
        </a>
      </div>
    `);

    // Invalidate size after mount to prevent render issues
    setTimeout(() => {
      map.invalidateSize();
    }, 200);

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, [lat, lng, zoom, locationName, address]);

  return <div ref={mapContainerRef} className="w-full h-full z-0" />;
}
