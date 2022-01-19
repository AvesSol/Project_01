import loc from "../assets/loc.png"
import { Parallax, Background } from 'react-parallax';

const Location = ()=>{

    return(
        <div className="location">
               <Parallax blur={5} bgImage={loc} bgImageAlt="the location" strength={200}>
                <div className="loc">
                   <p className="display-5 ">No need to Go anywhere</p>
                   <p className="display-6 ">We are located at your heart 💗</p>
                   <p className="h3 ">Anyway, just contact us</p>
                </div>
                </Parallax>
        </div>
    )
}
export default Location;