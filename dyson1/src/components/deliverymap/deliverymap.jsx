import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './deliverymap.css';
import markIcon from '../../images/icons/mark.svg';
import searchIcon from '../../images/icons/search.svg';
import React, { useState, useRef } from 'react';

const customIcon = new L.Icon({
  iconUrl: markIcon,
  iconSize: [33, 49],
  iconAnchor: [16, 49],
  popupAnchor: [0, -49],
});

const points = [
  { id: 1, coords: [59.9342802, 30.3350986], text: 'Шкиперский проток, 16 лит А Гавань, Василеостровский район, Санкт-Петербург' },
  { id: 2, coords: [59.936, 30.332], text: 'Шкиперский проток, 16 лит А Гавань, Василеостровский район, Санкт-Петербург' },
  { id: 3, coords: [59.933, 30.329], text: 'Шкиперский проток, 16 лит А Гавань, Василеостровский район, Санкт-Петербург' },
  { id: 4, coords: [59.935, 30.338], text: 'Шкиперский проток, 16 лит А Гавань, Василеостровский район, Санкт-Петербург' },
];

function CustomZoomControl() {
  const map = useMap();
  return (
    <div className="custom-zoom-control">
      <button type="button" onClick={() => map.zoomIn()}>+</button>
      <button type="button" onClick={() => map.zoomOut()}>−</button>
    </div>
  );
}

function DeliveryMap() {
  const [search, setSearch] = useState('');
  const [selectedId, setSelectedId] = useState(null);
  const mapRef = useRef();
  const markerRefs = useRef({});

  // Фильтрация по адресу
  const filteredPoints = points.filter(point =>
    point.text.toLowerCase().includes(search.toLowerCase())
  );

  // Центрирование и открытие popup
  const handleSelect = (point) => {
    setSelectedId(point.id);
    if (mapRef.current) {
      mapRef.current.setView(point.coords, 16, { animate: true });
    }
    if (markerRefs.current[point.id]) {
      markerRefs.current[point.id].openPopup();
    }
  };

  // Для передачи ref карты
  function MapWithRef(props) {
    const map = useMap();
    mapRef.current = map;
    return null;
  }

  return (
    <div className="deliverymap-container">
      <MapContainer center={[59.9342802, 30.3350986]} zoom={15} className="deliverymap-leaflet" zoomControl={false} attributionControl={false}>
        <MapWithRef />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {points.map(point => (
          <Marker
            key={point.id}
            position={point.coords}
            icon={customIcon}
            ref={ref => markerRefs.current[point.id] = ref}
          >
            <Popup>{point.text}</Popup>
          </Marker>
        ))}
        <CustomZoomControl />
      </MapContainer>
      <div className="deliverymap-popup">
        <form className="deliverymap-search" onSubmit={e => { e.preventDefault(); if (filteredPoints[0]) handleSelect(filteredPoints[0]); }}>
          <input
            type="text"
            placeholder="Введите адрес"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <button type="submit" className="deliverymap-search-btn">
            <img src={searchIcon} alt="search" />
          </button>
        </form>
        <div className="deliverymap-points-list">
          {filteredPoints.length === 0 && <div className="deliverymap-no-points">Пункты не найдены</div>}
          {filteredPoints.map((point) => (
            <div
              key={point.id}
              className={
                'deliverymap-point-card' + (selectedId === point.id ? ' deliverymap-point-card--selected' : '')
              }
              onClick={() => handleSelect(point)}
            >
              <b>Пункт выдачи</b>
              <div className="deliverymap-point-address">{point.text}</div>
              <div className="deliverymap-point-status">
                <span className="deliverymap-point-status-dot" />
                Открыто
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DeliveryMap;