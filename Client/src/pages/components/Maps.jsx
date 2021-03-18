import React from 'react';
import {useEffect, useState} from 'react';
import PlacesAutocomplete, {geocodeByAddress, getLatLng  } from 'react-places-autocomplete';
import '../css/maps.css';


/* const useCurrentLocation = () => {

        // Creamos los useState para las funciones de succes y error

        const [error, setError] = useState();
        const [location, setLocation] = useState();
  
        useEffect(() => {

        // Si el navegador no soporta la geolocalizacion, lo informamos
        if (!navigator.geolocation) {
            setError('Geolocation is not supported.');
            return;
        }
        }, []);


      // Definimos la Succes function para el metodo de geolocalizacion

        const handleSuccess = position => {

            const { latitude, longitude } = position.coords;
            setLocation({latitude, longitude});
    
        };

         // Definimos la Error function para el metodo de geolocalizacion
        const handleError = error => {
            setError(error.message);
        };

        useEffect(() => {
            // ...
          
            // Call the Geolocation API
            navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
          
            // ...
          }, []);
    
    return { location, error };

  }; */

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
          <p>Latitude: {coordinates.lat}</p>
          <p>Longitude: {coordinates.lng}</p>
        </div>
      );
}
