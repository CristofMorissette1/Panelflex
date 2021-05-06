import Head from 'next/head';
import { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';


class Combinerbox extends Component {
    render() {
        return (
            <div className="pclPanelsMainContainer">
                <Header/>
                <div className="commercialHeaderContainer">
                    <h1 className="pclMainTitle">Protection Panels</h1>
                </div>
                <hr className="border1"/>
                <div className="pclBodyContainer">
                    <p className="pclIntroText">We provide products and services for municipal and industrial markets.  The staff has over 20 years experience providing process control solutions and designing custom control panels for industrial applications.</p>
                    <h2 className="pclTitleSmall">Some more information</h2>
                    <p className="pclIntroText">Each custom panel has a project manager assigned which will follow the project from design through manufacturing, testing and shipping.  If your control needs are for a basic simplex pump application or a complete PLC based system with remote SCADA capabilities, located indoors, outdoors or in a hazardous location...PANELFLEX is your single source provider.</p>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Combinerbox;