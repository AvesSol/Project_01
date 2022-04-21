const Footer = () => {
  return (
    <div className="text-center pt-2">
      <footer>
        <div className="container py-5 overflow-hidden">
          <a
            aria-hidden="true"
            className="fa fa-envelope"
            href="mailto:business@cwipedia.in"
            id="devso"
            rel="noreferrer"
            target="_blank"
            title="mail us"
          ></a>
          <a
            aria-hidden="true"
            className="fa fa-instagram"
            href="http://instagram.com/cwipedia.in"
            id="devso"
            rel="noreferrer"
            target="_blank"
            title="follow us"
          ></a>
          <a
            aria-hidden="true"
            className="fa fa-twitter"
            href="https://twitter.com/cwipedia"
            id="devso"
            rel="noreferrer"
            target="_blank"
            title="follow us"
          ></a>
          <a
            aria-hidden="true"
            className="fa fa-linkedin"
            href="https://www.linkedin.com/company/cwipedia"
            id="devso"
            rel="noreferrer"
            target="_blank"
            title="follow us"
          ></a>
          <a
            aria-hidden="true"
            className="fa fa-telegram"
            href="https://telegram.me/msbteresources"
            id="devso"
            rel="noreferrer"
            target="_blank"
            title="Join group"
          ></a>
          <a
            aria-hidden="true"
            className="fa fa-youtube-play"
            href="https://www.youtube.com/channel/UCzARaaZ1furvIwUaNUsORWQ"
            id="devso"
            rel="noreferrer"
            target="_blank"
            title="follow us"
          ></a>
          <hr className="mt-3" />
          <div className="row gx-5">
            {/* <div className="col-sm">

                <p className="h4">cwipedia.in</p>
                <p className="h5">Pune, Maharashtra</p>
                <p className="h5">cwipedia.in</p>

            </div>
            <div className="col-sm">

                <a href="https://career.cwipedia.in" className="link">Career</a><br/>
                <a href="https://training.cwipedia.in" className="link">Training</a>

            </div>
            <div className="col-sm">

                <a href="https://www.cwipedia.in/p/terms-and-conditions.html" className="link">Terms</a><br/>
                <a href="https://www.cwipedia.in/p/contact-us-demofont-familyarial.html" className="link">Contact</a>

            </div> */}

            <div
              id="footerItem"
              className="FotterItems d-flex  align-items-center justify-content-evenly"
            >
              <p className="h4  mt-2 ">cwipedia.in</p>
              <p className="h5 mt-2">Pune, Maharashtra</p>
              <br />

              <p>
                <a href="https://career.cwipedia.in" className="link">
                  Career
                </a>
              </p>
              {/* <br /> */}

              <p>
                <a href="https://training.cwipedia.in" className="link">
                  Training
                </a>
              </p>

              <p>
                <a
                  href="https://www.cwipedia.in/p/terms-and-conditions.html"
                  className="link"
                >
                  Terms
                </a>
              </p>

              {/* <br /> */}
              <p>
                <a
                  href="https://www.cwipedia.in/p/contact-us-demofont-familyarial.html"
                  className="link"
                >
                  Contact
                </a>
              </p>
            </div>

            <hr />
            <p className="mt-4">
              Copyright &#169;2018-
              <span>{new Date().getFullYear()} All Rights Reserved </span>|{" "}
              <a className="link" href="https://www.cwipedia.in">
                cwipedia.in
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
