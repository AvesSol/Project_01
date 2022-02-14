import logo from "../assets/logo/cplogo.png"
const LoadingComponent = () => {
    return(
        <>
        <div className="parrent-div">
            <div className="zoom-in-zoom-out"><p className="display-1 loading-font">{'{'}</p></div>
            <div className="zoom-out-zoom-in"><p className="display-1 loading-font">{'}'}</p></div>
         </div>
            {/* <img src={logo} className="img-fluid" /> */}
</>
    )
}
export default LoadingComponent;