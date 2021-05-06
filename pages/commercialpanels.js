import Head from 'next/head';
import { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';


class CommercialPanels extends Component {
    render() {
        return (
            <div className="pclPanelsMainContainer">
                <Header/>
                <div className="commercialHeaderContainer">
                    <h1 className="pclMainTitle">Commercial / Municipal Control Panels</h1>
                </div>
                <hr className="border1"/>
                <div className="pclBodyContainer">
                    <img className="commercialPic1" src="https://firebasestorage.googleapis.com/v0/b/panelflex-7663b.appspot.com/o/products%20%26%20services%2Fcommercial%20pic.jpg?alt=media&token=d5def943-27ba-4206-9c82-b6e931b1c5f9"/>
                    <p className="pclIntroText">We provide products and services for municipal and industrial markets.  The staff has over 20 years experience providing process control solutions and designing custom control panels for industrial applications.</p>
                    <h2 className="pclTitleSmall">Some more information</h2>
                    <p className="pclIntroText">Each custom panel has a project manager assigned which will follow the project from design through manufacturing, testing and shipping.  If your control needs are for a basic simplex pump application or a complete PLC based system with remote SCADA capabilities, located indoors, outdoors or in a hazardous location...PANELFLEX is your single source provider.</p>
                    <img className="commercialPic2" src="https://firebasestorage.googleapis.com/v0/b/panelflex-7663b.appspot.com/o/products%20%26%20services%2Fcommercial%20pic2.jpg?alt=media&token=b666a372-76dc-432f-8be3-eefe6d659e31"/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default CommercialPanels;