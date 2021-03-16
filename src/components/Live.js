import {ReactFlvPlayer} from 'react-flv-player';
import {
    useParams
} from "react-router-dom";

function Live() {



    const origin =  window.location.protocol.replace(/^http/, 'ws') + window.location.hostname + ":" + (process.env.STREAM || 8000);
    console.log(origin)
    let { id } = useParams();
    return (
        <div className="live">
            <ReactFlvPlayer
                url = {`${origin}/live/${id}.flv`}
                heigh = "800px"
                width = "800px"
                isMuted={false}
            />
        </div>
    );
}

export default Live;
