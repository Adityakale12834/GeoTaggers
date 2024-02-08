import { 
  APIProvider,
  Map
} from '@vis.gl/react-google-maps';
import StreetViewComponent from './StreetViewComponent'



function FetchApi() {
  const API_KEY = 'AIzaSyB3eLBsPOBMRmj-NKNHQC3Gc98UiKJr2oU';
  const position1 = {lat : 20.444615, lng : 78.328222};
    
  return (
    <div>
      <APIProvider apiKey={API_KEY}>
          <div style={{position:'absolute',zIndex:'10', height: "50vh", width: "70vh" }} >
            <Map zoom={1} center={position1} mapId={'8a833c8a2411f7d6'}>
            </Map>
          </div>
      </APIProvider>
      <StreetViewComponent apiKey={API_KEY} position={position1}/>
    </div>
  )
}

export default FetchApi