import Head from 'next/head';
import { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';


class PclPanels extends Component {
    render() {
        return (
            <div className="pclPanelsMainContainer">
                <Header/>
                <div className="pclHeaderContainer">
                    <h1 className="pclMainTitle">PCL Panels</h1>
                </div>
                <hr className="border1"/>
                <div className="pclBodyContainer">
                    <p className="pclIntroText">Panelflex builds a variety of PLC panels for refrigeration, compression, plant facilities, waste water and many other applications.</p>
                    <h2 className="pclTitleSmall">Cabinet and Construction</h2>
                    <img className="pclPic1" src="https://firebasestorage.googleapis.com/v0/b/panelflex-7663b.appspot.com/o/products%20%26%20services%2Fpcl%20pic.png?alt=media&token=40ed411b-741d-494c-a00f-071caf744036"/>
                    <p className="pclIntroText">All PLC panels are fabricated in standard NEMA 12/4/4X enclosures assembled by experienced technicians. Panel assemblies are CSA General Purpose or CSA Class I Div 2 certified. cUL is available as an option (where applicable).</p>
                    <h2 className="pclTitleSmall">I/O Wiring</h2>
                    <p className="pclIntroText">All PLC I/O points are wired at our shop to terminal blocks for use in terminating customer-supplied pilot devices or wiring from field devices. All wiring internal to the panel is factory-tested for continuity prior to shipment.</p>
                    <h2 className="pclTitleSmall">Specific Components Used</h2>
                    <ul className="pclList">
                        <li className="pclListItem">Enclosures - EEMAC 3, 3R, 4, 4X</li>
                        <li className="pclListItem">Auxiliary 24VDC Power Supplies</li>
                        <li className="pclListItem">Circuit Breakers</li>
                        <li className="pclListItem">Programmable Controllers</li>
                        <li className="pclListItem">Receptacle</li>
                        <li className="pclListItem">Terminal blocks and accessories</li>
                        <li className="pclListItem">Fuseblocks</li>
                        <li className="pclListItem">Din-Rail</li>
                        <li className="pclListItem">Wireway</li>
                        <li className="pclListItem">Relay</li>
                        <li className="pclListItem">Light Package</li>
                        <li className="pclListItem">Universal Power Supply (UPS)</li>
                        <li className="pclListItem">Ethernet Switch</li>
                    </ul>
                </div>
                <img className="pclPic2" src="https://firebasestorage.googleapis.com/v0/b/panelflex-7663b.appspot.com/o/products%20%26%20services%2Fpcl%20pic2.jpg?alt=media&token=2b671013-89d2-4985-8fcd-671875c5e1ac"/>
                <Footer/>
            </div>
        )
    }
}

export default PclPanels;