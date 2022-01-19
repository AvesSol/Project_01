import {Carousel} from '3d-react-carousal';
import Ram from "../assets/interns/ShriRam.jpeg"
import parag from "../assets/interns/parag.jpeg"
import anurag from "../assets/interns/anurag.jpeg"
const Intern=()=>{

    let slides = [
        <div className="card intern-card">
        <img src="https://avatars.githubusercontent.com/u/50539402?v=4" className="card-pic img-fluid" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Shivam Hande</h5>
                <h6 className="card-subtitle mb-2 text-muted">Lead SDE</h6>
                <p className="card-text">Hey all, I'm Shivam,a Software Developer Engineer at cwipedia, also I'm passiniate about open-source</p>
                <a aria-hidden='true' className='fa fa-github' href='https://github.com/0shivamh' id='devso' rel='noreferrer' target='_blank' title='Follow me'></a>
                <a aria-hidden='true' className='fa fa-instagram' href='http://instagram.com/shiv.am.h' id='devso' rel='noreferrer' target='_blank' title='follow me'></a>
                <a aria-hidden='true' className='fa fa-linkedin' href='https://www.linkedin.com/in/shivamh' id='devso' rel='noreferrer' target='_blank' title='lets connect'></a>
                <hr/>
    
            </div>
        </div>,

        <div className="card intern-card">
        <img src={Ram} className="card-pic img-fluid" alt="..."/>
            <div className="card-body">
                
                <h5 className="card-title">Shriram Aghav</h5>
                <h6 className="card-subtitle mb-2 text-muted">Content Writer</h6>
                <p className="card-text">Hello All,I am Shriram, a content writer at cwipedia, and passionate about technology</p>
                <a aria-hidden='true' className='fa fa-github' href='https://github.com/captainaghav' id='devso' rel='noreferrer' target='_blank' title='Follow me'></a>
                <a aria-hidden='true' className='fa fa-instagram' href='https://www.instagram.com/captain_gamerff/' id='devso' rel='noreferrer' target='_blank' title='follow me'></a>
                <a aria-hidden='true' className='fa fa-linkedin' href='https://www.linkedin.com/in/shriram-aghav-6856161a6' id='devso' rel='noreferrer' target='_blank' title='lets connect'></a>
                <hr/>
            </div>
        </div>,

        <div className="card intern-card">
            <img src={parag} className="card-pic img-fluid" alt="..."/>
                <div className="card-body">
                    
                    <h5 className="card-title">Parag Shirsat</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Web Developer Intern (Sep-Oct 2021)</h6>
                    <p className="card-text">Hello all,I am Parag Shirsat from Nashik,Maharashtra.I have completed diploma in Computer Engineering.I am web developer intern at cwipedia.</p>
                    <a aria-hidden='true' className='fa fa-github' href='https://github.com/ParagShirsat' id='devso' rel='noreferrer' target='_blank' title='Follow me'></a>
                    <a aria-hidden='true' className='fa fa-instagram' href='https://www.instagram.com/parag_s_2002/' id='devso' rel='noreferrer' target='_blank' title='follow me'></a>
                    <a aria-hidden='true' className='fa fa-linkedin' href='https://www.linkedin.com/in/parag-shirsat-350029221/' id='devso' rel='noreferrer' target='_blank' title='lets connect'></a>
                    <hr/>

                </div>
            </div>,

            <div className="card intern-card">
            <img src="https://www.w3schools.com/howto/img_avatar2.png" className="card-pic img-fluid" alt="..."/>
                <div className="card-body">
                    
                    <h5 className="card-title">Shweta Shinde</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Web Developer Intern (Sep-Oct 2021)</h6>
                    <p className="card-text">Hii all, I am shweta shinde I love coding as well as I always want to learn new things and I'm Web Developer Intern at cwipedia</p>
                    <a aria-hidden='true' className='fa fa-github' href='https://github.com/Shwet1240' id='devso' rel='noreferrer' target='_blank' title='Follow me'></a>
                    {/* <a aria-hidden='true' className='fa fa-instagram' href='' id='devso' rel='noreferrer' target='_blank' title='follow me'></a> */}
                    <a aria-hidden='true' className='fa fa-linkedin' href='https://www.linkedin.com/in/shweta-shinde-073380211' id='devso' rel='noreferrer' target='_blank' title='lets connect'></a>
                    <hr/>

                </div>
            </div>,

            <div className="card intern-card">
                        <img src={anurag} className="card-pic img-fluid" alt="Anurag Kanade"/>
                            <div className="card-body">
                                
                                <h5 className="card-title">Anurag Kanade</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Video Creator</h6>
                                <p className="card-text">Hey,I'm Anurag ,Video Creator At CWIPEDIA. And I like to Teach Something About Web Designing and Development.</p>
                                <a aria-hidden='true' className='fa fa-facebook' href='https://www.facebook.com/anurag.kanade.5' id='devso' rel='noreferrer' target='_blank' title='Follow me'></a>
                                <a aria-hidden='true' className='fa fa-instagram' href='https://instagram.com/this_is_anuragk' id='devso' rel='noreferrer' target='_blank' title='follow me'></a>
                                <a aria-hidden='true' className='fa fa-linkedin' href='https://www.linkedin.com/in/anuragk12' id='devso' rel='noreferrer' target='_blank' title='lets connect'></a>
                                <hr/>

                            </div>
                        </div>
    
    ];

    return(<>
    <div className="intern-sec"> 

    <Carousel slides={slides}/>




   
    {/* <div className="card intern-card">
    <img src="https://avatars.githubusercontent.com/u/50539402?v=4" className="card-pic img-fluid" alt="..."/>
        <div className="card-body">
            
            <h5 className="card-title">Shivam Hande</h5>
            <h6 className="card-subtitle mb-2 text-muted">Web Developer Intern (Sep-Oct 2021)</h6>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a aria-hidden='true' className='fa fa-github' href='mailto:business@cwipedia.in' id='devso' rel='noreferrer' target='_blank' title='Follow me'></a>
            <a aria-hidden='true' className='fa fa-instagram' href='http://instagram.com/cwipedia.in' id='devso' rel='noreferrer' target='_blank' title='follow me'></a>
            <a aria-hidden='true' className='fa fa-linkedin' href='https://www.linkedin.com/company/cwipedia' id='devso' rel='noreferrer' target='_blank' title='follow us'></a>
            <hr/>

        </div>
    </div> */}
    


    </div>
    
    </>)
}
export default Intern;