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
        console.log("Valor al elegir: ",value);
      const results = await geocodeByAddress(value);
      console.log("results al elegir: ",results);
      const latLng = await getLatLng(results[0]);
      console.log("latLng al elegir: ",latLng);
      setAddress(value);
      setCoordinates(latLng);
      localStorage.setItem("coordinates",coordinates);
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
                                        })} />
    
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
        </div>
      );
}