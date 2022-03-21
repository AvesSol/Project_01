import sl from "../assets/interns/sachin.png"
const Team = () =>{
    return(
        <>
        <div className="container text-center">
        <p className="display-6">Team</p>
            <div className="row text-center d-flex justify-content-center row-cols-2 row-cols-lg-3 g-2 g-lg-3">
                <div className="col">
                <div className="card shadow bg-body rounded team-profile">
                    <div className="d-flex justify-content-center">
                    <img src="https://media-exp1.licdn.com/dms/image/C4E03AQGWnQBLg7drgg/profile-displayphoto-shrink_200_200/0/1644326613243?e=1652918400&v=beta&t=ZhrR6wM-nSodWr-bG3v-l4dLolFH0sJYgevZf3iqisE" className="card-img-top d-flex justify-content-center profile-pic" alt="Shivam Hande"/>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Shivam Hande</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Lead SDE</h6>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href="mailto:" className="link" > <i className="fa fa-envelope" aria-hidden="true"></i> </a>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="card shadow bg-body rounded team-profile">
                    <div className="d-flex justify-content-center">
                    <img src="https://media-exp1.licdn.com/dms/image/C4E03AQEtrD3JB7AOSg/profile-displayphoto-shrink_200_200/0/1641667057738?e=1652918400&v=beta&t=yPl5uVYm-3KpgWc8-K3g1NFekEwCWWvLh42Ie2gLkpo" className="card-img-top d-flex justify-content-center profile-pic" alt="Shubham Awantkar"/>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Shubham Awantkar</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Backend Developer</h6>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href="mailto:" className="link" > <i className="fa fa-envelope" aria-hidden="true"></i> </a>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="card shadow bg-body rounded team-profile">
                    <div className="d-flex justify-content-center">
                    <img src={sl} className="card-img-top d-flex justify-content-center profile-pic" alt="Sacchidanand Linge"/>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Sacchidanand Linge</h5>
                        <h6 className="card-subtitle mb-2 text-muted">UI UX Designer</h6>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href="mailto:" className="link" > <i className="fa fa-envelope" aria-hidden="true"></i> </a>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="card shadow bg-body rounded team-profile">
                    <div className="d-flex justify-content-center">
                    <img src="https://www.w3schools.com/w3images/avatar6.png" className="card-img-top d-flex justify-content-center profile-pic" alt="Shweta Shinde"/>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Shweta Shinde</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Front-end Developer</h6>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href="mailto:" className="link" > <i className="fa fa-envelope" aria-hidden="true"></i> </a>
                    </div>
                </div>
                </div>
                {/* <div className="col">

                </div>
                <div className="col">

                </div>
                <div className="col">

                </div>
                <div className="col">

                </div> */}
            </div>
            </div>
        </>
    )
}
export default Team;