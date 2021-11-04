import 'aos/dist/aos.css';
import Aos from "aos";
const Partner=()=>{
    Aos.init({duration:1000});

    return(
        <div className="text-center"  >
            <p className="display-6">Our Partner</p>
    <div data-aos="fade-up" className="d-flex justify-content-center">
        <img src="https://training.cwipedia.in/static/media/gravitytech1.0ad3f891.jpeg" className="img-fluid" alt="GravityTech Dream"/></div>
        <h5 className="card-title">Private Limited</h5>
    </div>
    )
}
export default Partner;