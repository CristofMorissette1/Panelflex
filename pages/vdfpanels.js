import Head from 'next/head';
import { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';


class VdfPanels extends Component {
    render() {
        return (
            <div className="pclPanelsMainContainer">
                <Header/>
                <div className="vdfHeaderContainer">
                    <h1 className="pclMainTitle">VFD / Motor Control Panels</h1>
                </div>
                <hr className="border1"/>
                <div className="pclBodyContainer">
                    <p className="pclIntroText">Panelflex provides and assembles a broad variety of motor control panel solutions for any motor control requirement you need. Our motor control panels meet the needs of many applications and conform to NEMA or IEC standards. We offer, contactors, control & load switches, disconnect switches, pump control panels, low voltage starters, reduced voltage starters such as soft starters and variable speed drives.</p>
                    <img className="vdfPic1" src="https://firebasestorage.googleapis.com/v0/b/panelflex-7663b.appspot.com/o/products%20%26%20services%2Fvfd%20pic.jpg?alt=media&token=ed41ae6a-ec73-4163-86c7-283a95778e60"/>
                    <h2 className="pclTitleSmall">Some more information</h2>
                    <p className="pclIntroText">We utilize variable frequency drive products for many applications including our pump control panels and fan control panels in many many Commercial and Municipal applications. We build to suit your design needs providing multi-pole contactor configurations in a various enclosures including NEMA 12, 3R, 4 and 4X.</p>
                    <img className="vdfPic2" src="https://firebasestorage.googleapis.com/v0/b/panelflex-7663b.appspot.com/o/products%20%26%20services%2Fvfd%20pic3.jpg?alt=media&token=476a2f83-13e9-414b-93ad-2a9df5c1a285"/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default VdfPanels;