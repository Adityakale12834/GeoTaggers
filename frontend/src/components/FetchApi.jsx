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
  const [result, setResult] = useState(false);
  const API_KEY = 'AIzaSyB3eLBsPOBMRmj-NKNHQC3Gc98UiKJr2oU';
  const finalDistance=0;
  //Paid API-key : AIzaSyB3eLBsPOBMRmj-NKNHQC3Gc98UiKJr2oU
  // const position1 = {lat : 20.444615, lng : 78.328222};
  useEffect(() => {
      axios.get("http://localhost:5000/maps/location/").then((response) => {
        console.log(response.data);
        console.log(response.data.value[0].lat);
        console.log(response.data.value[0].lng);
        setPost({
          lat : Number(response.data.value[0].lat),
          lng : Number(response.data.value[0].lng),
        });
    });
  },[]);
  
  const handleMarker = (event) => {
    try {
      const { lat, lng } = event.detail.latLng;
      console.log('Latitude:',lat);
      console.log('Longitude:',lng);
    setMarker({
      lat: event.detail.latLng.lat,
      lng: event.detail.latLng.lng,
    });
    } catch (error) {
      console.log(error);
    }
  }
  function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}
  const handleStateChange = (post,marker,finalDistance) => {
    try {
      console.log(post);
      console.log(marker);
      const radiusOfEarth = 6371; // Earth's radius in kilometers

    // Convert latitude and longitude from degrees to radians
        const lat1 = toRadians(post.lat);
        const lng1 = toRadians(post.lng);
        const lat2 = toRadians(marker.lat);
        const lng2 = toRadians(marker.lng);
        // Differences in coordinates
        const diffLat = lat2 - lat1;
        const diffLng = lng2 - lng1;
        // Haversine formula
        const a =
            Math.sin(diffLat / 2) * Math.sin(diffLat / 2) +
            Math.cos(lat1) * Math.cos(lat2) * Math.sin(diffLng / 2) * Math.sin(diffLng / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        // Calculate the distance
        finalDistance = radiusOfEarth * c;
        console.log(finalDistance)
        } catch (error) {
          console.log("error is :",error);
        }
      }

  if(!result){
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
                <button type='button' onClick={() => {
                  setResult(true);
                }} className='flex tems-center justify-center bg-green-400 m-auto px-24 py-1 rounded-xl font-link text-stone-100 text-2xl'>Guess</button>
              </div>
            </div>
        </APIProvider>
        <StreetViewComponent apiKey={API_KEY} position={post}/>
      </div>
    )
  }
  else{
    return(
      <div className='h-screen w-screen bg-grey-100'>
        <APIProvider apiKey={API_KEY}>
          <div style={{position:'absolute',zIndex:'10', height: "70vh", width: "200vh", margin:"10vh"}}>
            <Map zoom={5} center={post} options={{
              streetViewControl : false,
              mapTypeControl : false,
              keyboardShortcuts : false,
              isFractionalZoomEnabled: true,
            }}>
            <Marker position={marker}/>
            <Marker position={post}/>
            </Map>
            <h1 className=''>{handleStateChange(post,marker,finalDistance)}</h1>
          </div>
        </APIProvider>
      </div>
    );
  }
}

export default FetchApi