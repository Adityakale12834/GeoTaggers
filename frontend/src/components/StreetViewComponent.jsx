// StreetViewComponent.js
import React, { useEffect } from 'react';

const StreetViewComponent = ({ apiKey, position }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&loading=async&callback=initStreetView`;
    script.async = true;
    script.defer = true;

    window.initStreetView = () => {
      const panorama = new window.google.maps.StreetViewPanorama(
        document.getElementById('street-view'),
        {
          position: position || { lat: 37.86926, lng: -122.254811 },
          pov: { heading: 165, pitch: 0 },
          zoom: 1,
        }
      );
    };

    document.head.appendChild(script);

    return () => {
      delete window.initStreetView;
      script.remove();
    };
  }, [apiKey, position]);

  return <div id="street-view" style={{ width: '100%', height: '100vh' }} />;
};

export default StreetViewComponent;
