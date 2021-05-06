import Head from 'next/head';
import { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';


class MarshallingPanels extends Component {
    render() {
        return (
            <div className="pclPanelsMainContainer">
                <Header/>
                <div className="marshallingHeaderContainer">
                    <h1 className="pclMainTitle">DCS Marshalling Panels</h1>
                </div>
                <hr className="border1"/>
                <div className="pclBodyContainer">
                    <p className="pclIntroText">Panelfllex promises industry leading quality in manufacturing custom marshalling Distributed Control Systems (DCS) panels. Our staff provides estimates, project coordination and procurement, and our shop workers are experienced in installing DCS systems.</p>
                    <img className="marshallingPic" src="https://firebasestorage.googleapis.com/v0/b/panelflex-7663b.appspot.com/o/products%20%26%20services%2FMarshalling%20pic.jpg?alt=media&token=a174888a-994a-44c6-b343-a0f21852376a"/>
                    <h2 className="pclTitleSmall">Some of the services offered</h2>
                    <ul className="pclList">
                        <li className="pclListItem">Assembly, wiring, and product testing</li>
                        <li className="pclListItem">Drawing Markup - SSDR</li>
                        <li className="pclListItem">Packaging and Quick Shipping</li>
                        <li className="pclListItem">Pictures of your Panel</li>
                        <li className="pclListItem">Test and Progress reports</li>
                        <li className="pclListItem">Superior Customer Service</li>
                    </ul>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default MarshallingPanels;