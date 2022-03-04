import React, {Suspense} from "react";
import LoadingComponent from "./Components/loadingComponent.component";
import Product from "./Components/product.component";
const RSSFeed =  React.lazy(() => import("./Backend/rssdata.backend"));
const About =  React.lazy(() => import("./Components/about.component"));
const Accordion =  React.lazy(() => import("./Components/accordion.component"));
const Footer =  React.lazy(() => import("./Components/footer.component"));
const Head =  React.lazy(() => import("./Components/head.component"));
const CSer =  React.lazy(() => import("./Components/home-ser.component"));
const Intern =  React.lazy(() => import("./Components/Interns.component"));
const IScroll =  React.lazy(() => import("./Components/iscroll.component"));
const Location =  React.lazy(() => import("./Components/location.component"));
const RSS =  React.lazy(() => import("./Components/rss.component"));
const Services =  React.lazy(() => import("./Components/services.component"));
const Video =  React.lazy(() => import("./Components/Video.component"));

function Home() {
  return (
    <div className="App">
      <Suspense fallback={<LoadingComponent/>}>
        <Head/>
        <CSer/>
        <Product/>
        <Services/>
        <Video/>
        <RSS/>
        <IScroll/>
        {/* <Intern/> */}
        <Accordion/>
        <About/>
        <Location/>
        <Footer/>
        <RSSFeed/>
      </Suspense>
    </div>
  );
}

export default Home;