import React from 'react';
import {useEffect, useState} from 'react';
import PlacesAutocomplete, {geocodeByAddress, getLatLng  } from 'react-places-autocomplete';
import '../css/maps.css';

export default function Maps() {

   
    // using the watch method:
    
   /*  const { location, error } = useCurrentLocation(); */

    const [address, setAddress] = useState("");
    const [coordinates, setCoordinates] = useState({
      lat: null,
      lng: null
    });
  
    const handleSelect = async value => {

      const results = await geocodeByAddress(value);
      const latLng = await getLatLng(results[0]);
      setAddress(value);
      setCoordinates(latLng);
      localStorage.setItem("coordinates",coordinates);
      localStorage.setItem("address",value);
      console.log("address: ",value);
      const localStorage_address= localStorage.getItem("address");
      console.log("localStorage_address: ",localStorage_address);  
    };
    

      return (
        <div>
          <PlacesAutocomplete
            value={address}
            onChange={setAddress}
            onSelect={handleSelect}
          >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
              <div>

    
                <input {...getInputProps({               
                                            placeholder: 'Escriba número y calle (10 Calle Quintana)',
                                            className: 'location-search-input', 
                                        })} required/>
    
                <div  className="autocomplete-dropdown-container">
                  {loading ? <div>...loading</div> : null}
    
                  {suggestions.map(suggestion => {
                        const style = suggestion.active
                        ? { backgroundColor: '#42a5f4', cursor: 'pointer' }
                        : { backgroundColor: '#ffffff', cursor: 'pointer' };
    
                    return (
                      <div className="input-suggestion"
                            {...getSuggestionItemProps(suggestion, { style })}>
                        <i class="material-icons">location_on  </i> <span>{suggestion.description}</span>
                      </div>
                      
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>

{/*           <p>Latitude: {coordinates.lat}</p>
          <p>Longitude: {coordinates.lng}</p> */}
          {localStorage.setItem("latitude",coordinates.lat)}
          {localStorage.setItem("longitude",coordinates.lng)}
        </div>
      );
}
