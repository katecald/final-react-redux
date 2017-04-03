import React from 'react';
import {Link} from 'react-router'
import store from '../store'

export default function Stations(props) {
  return (
    <div>
      <h3>Stations</h3>
      <div className="list-group">
      {
        Object.keys(props.stations).map(station => {
          return (
            <div className="list-group-item" key={station}>
              <Link to={`/stations/${station}`}>{station}</Link>
            </div>
          );
        })
      }
      </div>
    </div>
    )
}