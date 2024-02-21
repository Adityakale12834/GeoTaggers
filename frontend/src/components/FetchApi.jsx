import { 
  APIProvider,
  Map,
  Marker,
} from '@vis.gl/react-google-maps';
import StreetViewComponent from './StreetViewComponent'
import { useEffect,useState } from 'react';
import axios from "axios";


function FetchApi() {
  const [post, setPost] = useState({lat:20.4446079,lng:78.328204});
  const [marker, setMarker] = useState({lat:"",lng :""});
  const API_KEY = 'AIzaSyB3eLBsPOBMRmj-NKNHQC3Gc98UiKJr2oU';
  //Paid API-key : AIzaSyB3eLBsPOBMRmj-NKNHQC3Gc98UiKJr2oU
  // const position1 = {lat : 20.444615, lng : 78.328222};
  useEffect(() => {
      axios.get("http://localhost:5000/maps/location/").then((response) => {
        console.log(response.data);
        console.log(response.data.value[0].lat);
        setPost({
          lat : Number(response.data.value[0].lat),
          lng : Number(response.data.value[0].lng),
        });
    });
  },[]);
  
  const handleMarker = (event) => {
    try {
      const { lat, lng } = event.detail.latLng;
      console.log('Latitude:', lat);
      console.log('Longitude:', lng);
    setMarker({
      lat: event.detail.latLng.lat,
      lng: event.detail.latLng.lng,
    });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <APIProvider apiKey={API_KEY}>
          <div style={{position:'absolute',zIndex:'10', height: "50vh", width: "70vh" }} >
            <Map zoom={1} center={post} mapId={'8a833c8a2411f7d6'} options={{
              streetViewControl : false,
              mapTypeControl : false,
            }}
            onClick={handleMarker}
            >
            <Marker position={marker}/>
            </Map>
            <div className='relative h-10 w-56 mx-auto flex'>
              <button type='button' className='flex tems-center justify-center bg-green-400 m-auto px-24 py-1 rounded-xl font-link text-stone-100 text-2xl'>Guess</button>
            </div>
          </div>
      </APIProvider>
      <StreetViewComponent apiKey={API_KEY} position={post}/>
    </div>
  )
}

export default FetchApi