import AppDev from "../assets/ser/app.png"
import WebApp from "../assets/products/pro1.png";
import App from "../assets/products/pro2.png";
import Aos  from 'aos';
import 'aos/dist/aos.css';

const Product=()=>{
    
    return(
        <>
            <p className="display-6 text-center heading">Our Products</p>

                <div className="container">
                    <div className="row gy-5">
                        <div className="col-sm">
                            <a className="ccardLink" href="https://www.cwipedia.in/">
                            <div className="card productcard bg-transparent ">
                                <div className="card-body">
                                    <img className="img-fluid" src={WebApp} />
                                    <h5 className="card-title">Diploma Engineering Portal</h5>
                                </div>
                            </div>
                            </a>
                        </div>
                        <div className="col-sm">
                            <a className="ccardLink" href="https://play.google.com/store/apps/details?id=in.cwipedia.msbtepracticecwipedia&hl=en_IN&gl=US">
                            <div className="card productcard bg-transparent ">
                                <div className="card-body">
                                    <img className="img-fluid" src={App} />
                                    <h5 className="card-title">MSBTE Practice App</h5>
                                </div>
                            </div>
                            </a>
                        </div>
                    </div>
                </div>
        </>
    )

}
export default Product;