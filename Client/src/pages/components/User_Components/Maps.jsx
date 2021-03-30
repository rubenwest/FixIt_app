import React from 'react';
import {useState} from 'react';
import PlacesAutocomplete, {geocodeByAddress, getLatLng  } from 'react-places-autocomplete';
import '../../css/maps.css';
import '../../css/register.css';

export default function Maps({detailsIncidents,setDetailsIncidents}) {

   
    // using the watch method:
  

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
      setDetailsIncidents({...detailsIncidents, address: value});

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
                                            className: 'input--style-4', 
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
