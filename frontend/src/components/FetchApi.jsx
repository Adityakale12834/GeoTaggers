import { useSelector } from "react-redux"

function FetchApi() {
  const map = useSelector((state) => state.app.data);

  
  if(map.status === 'idle'){
    return <div className="text-4xl text-zinc-100" >This is in idle state</div>
  }
  if(map.status === 'loading'){
    return <div className="text-4xl text-zinc-100">Loading....</div>
  }
  if(map.status === 'failed'){
    return <div className="text-4xl text-zinc-100" >ERROR {map.error}</div>
  }
  return (
    <div >
      {map ? (
        <div>
          {/* Render your map using mapData */}
          <img src={map.image_url} alt="Street View" />
        </div>
      ) : (
        <div>Loading or Error Message</div>
      )}
    </div>
  )
}

export default FetchApi