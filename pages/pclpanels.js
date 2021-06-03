import Head from 'next/head';
import { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Chatbot from '../components/chatbot';

class PclPanels extends Component {
    constructor(props) {
        super(props);
        this.state = {
          check: false,
        };
      }
    
    changeCheck = () => {
    this.state.check?this.setState({check: false}):this.setState({check: true})
    }

    render() {
        return (
            <div className="pclPanelsMainContainer">
                <Header/>
                <div className="pclHeaderContainer">
                    <h1 className="pclMainTitle">PLC Panels</h1>
                </div>
                <hr className="border1"/>
                <div className="pclBodyContainer">
                    <p className="pclIntroText"><b>Panelflex builds a variety of PLC panels for refrigeration, compression, plant facilities, waste water and many other applications.</b></p>
                    <h2 className="pclTitleSmall">Cabinet and Construction:</h2>
                    <img className="pclPic1" src="https://firebasestorage.googleapis.com/v0/b/panelflex-7663b.appspot.com/o/products%20%26%20services%2Fpcl%20pic.png?alt=media&token=40ed411b-741d-494c-a00f-071caf744036"/>
                    <p className="pclIntroText"><b>All PLC panels are fabricated in standard NEMA 12/4/4X enclosures assembled by experienced technicians. Panel assemblies are CSA General Purpose or CSA Class I Div 2 certified. cUL is available as an option (where applicable).</b></p>
                    <h2 className="pclTitleSmall">I/O Wiring:</h2>
                    <p className="pclIntroText"><b>All PLC I/O points are wired at our shop to terminal blocks for use in terminating customer-supplied pilot devices or wiring from field devices. All wiring internal to the panel is factory-tested for continuity prior to shipment.</b></p>
                    <h2 className="pclTitleSmall">Specific Components Used:</h2>
                    <img className="pclPic3" src="https://firebasestorage.googleapis.com/v0/b/panelflex-7663b.appspot.com/o/products%20%26%20services%2FPLC%20.JPG?alt=media&token=026eace9-e09e-487c-8c56-529e22dca3b9"/>
                    <ul className="pclList"><b>
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
                    </b></ul>
                </div>
                <img className="pclPic4" src="https://firebasestorage.googleapis.com/v0/b/panelflex-7663b.appspot.com/o/products%20%26%20services%2FPLC%20image.JPG?alt=media&token=7ab7345b-e0b0-4c9a-b16f-4ad3cc36f045"/>
                {this.state.check?<div style={{position: 'fixed', bottom: '10px', right: '20px' }}><Chatbot />
        {/* <button style={{marginTop: '20px',marginRight: '0px', marginLeft: 'auto'}} onClick={this.changeCheck}>Open Chat</button> */}
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div style={{ marginTop: '20px', backgroundColor: 'green', borderRadius: '50%', padding: '16px', marginRight: '0px', marginLeft: 'auto' }} onClick={this.changeCheck}>
        <img
        src="/cross.png"
        alt="Chat"
        width={35}
        height={35}
        />
        </div>
        </div>
        </div>:
        // <button style={{position: 'fixed', bottom: '10px', right: '20px', }} onClick={this.changeCheck}>Open Chat</button>
        <div style={{position: 'fixed', bottom: '10px', right: '20px', backgroundColor: 'green', borderRadius: '50%', padding: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center'}} onClick={this.changeCheck}>
          <img
        src="/chat-icon.png"
        alt="Chat"
        width={55}
        height={55}
        />
        </div>
        }
                <img className="pclPic2" src="https://firebasestorage.googleapis.com/v0/b/panelflex-7663b.appspot.com/o/products%20%26%20services%2Fpcl%20pic2.jpg?alt=media&token=2b671013-89d2-4985-8fcd-671875c5e1ac"/>
                <Footer/>
            </div>
        )
    }
}

export default PclPanels;