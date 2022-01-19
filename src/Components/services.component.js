import AppDev from "../assets/ser/app.png"
import WebApp from "../assets/ser/web.png"
import MAN from "../assets/ser/man.png"
import GR from "../assets/ser/graphic.png"
import { useEffect, useState } from "react";
import Aos  from 'aos';
import 'aos/dist/aos.css';
const Services = ()=>{

    useEffect(()=>{
        Aos.init({duration:500});
      },[]);

    return(
        <>

        <p className="display-6 text-center heading">Services</p>

            <div className="container">
                <div className="row gy-5">
                    <div className="col-sm">
                        <a className="ccardLink" href="">
                        <div  className="card ccard" >
                            <div className="card-body">
                                <img className="img-fluid" src={AppDev} />
                                <h5 className="card-title">App Development</h5>
                            </div>
                        </div>
                        </a>
                    </div>
                    <div className="col-sm">
                        <a className="ccardLink" href="">
                        <div className="card ccard">
                            <div className="card-body">
                                <img className="img-fluid" src={WebApp} />
                                <h5 className="card-title">Web Development</h5>
                            </div>
                        </div>
                        </a>
                    </div>
                    <div className="col-sm">
                        <a className="ccardLink" href="">
                        <div className="card ccard">
                            <div className="card-body">
                                <img className="img-fluid" src={GR} />
                                <h5 className="card-title">Graphic Designing</h5>
                            </div>
                        </div>
                        </a>
                    </div>
                    <div className="col-sm">
                        <a className="ccardLink" href="">
                        <div className="card ccard">
                            <div className="card-body">
                                <img className="img-fluid" src={MAN} />
                                <h5 className="card-title">Product Management</h5>
                            </div>
                        </div>
                        </a>
                    </div>
                </div>
            </div>
        
        </>
    )
}
export default Services;