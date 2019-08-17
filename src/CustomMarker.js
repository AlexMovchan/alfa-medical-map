import React from 'react';
import { Marker, Popup } from 'react-leaflet';


const CustomMarker = ({ marker }) => 
  <Marker position={[Number(marker.lat), Number(marker.lon)]}>
    <Popup>
      <h4>Категорія {marker.category}</h4>
      <h4>{marker.specialization} {marker.title}</h4>
      {marker.address}
    </Popup>
  </Marker>

export default CustomMarker;