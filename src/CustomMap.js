import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import CustomMarker from './CustomMarker';
import { data } from './data';

const CustomMap = () => {
  import('./App.css');

  return (
    <div className='map-container'>
      <Map center={[50.441455, 30.521247]} zoom={13} style={{width: '100%', height: '900px'}}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        {
          data.map(address => <CustomMarker marker={address} key={address.id} />)
        }
      </Map>
    </div>
  );
}

export default CustomMap;