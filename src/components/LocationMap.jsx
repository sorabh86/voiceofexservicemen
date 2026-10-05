import { useState } from 'react';

const mapUrl = 'https://www.google.com/maps?q=59%20Vipin%20Garden%20Extension%20Dwarka%20New%20Delhi%20110059&output=embed';

export default function LocationMap({ className = '' }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`location-map ${className}`.trim()}>
      {isLoading && (
        <div className="map-loading" role="status" aria-live="polite">
          <span className="map-spinner" aria-hidden="true"></span>
          <span>Loading map…</span>
        </div>
      )}
      <iframe
        src={mapUrl}
        className={isLoading ? 'is-loading' : ''}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="Voice of Ex-Servicemen Society location"
        onLoad={() => setIsLoading(false)}
      ></iframe>
    </div>
  );
}
