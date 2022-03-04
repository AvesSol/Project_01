import main from "../assets/header.gif"
const Header = () => {

    return( <div className="container mb-4 mt-0">
        <div className="row">
            <div className="col align-middle v-center ">

            <p className="h1">CWIPEDIA</p>
            <p className="card-subtitle" style={{
                color: '#5DA3FA'
            }}>High Quality content at Affordable time. We are latest and fastest in Diploma Engineering community..</p>
            <button className="explore-btn">Explore</button>
                
            </div>
        <div className="col-sm">
            <img className="img-fluid vert-move"  src={main}  />
            </div>
        </div>
    </div>)
}
export default Header;