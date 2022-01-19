
const Video=()=>{


    return(
        <>
        <div className="card laptop text-center">
            {/* <i class="fa fa-circle cam" aria-hidden="true"></i> */}
            <div className="ratio ratio-16x9">
            <iframe src="https://www.youtube.com/embed/PkWuAgbbQYc" allow='autoplay' title="cwipedia" allowFullScreen></iframe>
            </div>
        </div>
        <div className="lap-line"></div>
        </>
    )
}
export default Video;