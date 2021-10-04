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
                    <img className="pclPic1" src="https://firebasestorage.googleapis.com/v0/b/panelflex-new.appspot.com/o/PLC%20Panel%2FPLC%20panel.png?alt=media&token=900084cc-ffc8-439a-9c15-668168d93cbf"/>
                    <p className="pclIntroText"><b>All PLC panels are fabricated in standard NEMA 12/3R/4/4X enclosures assembled by experienced technicians. Panel assemblies are CSA General Purpose or CSA Class I Div 2 certified. cUL is available as an option (where applicable).</b></p>
                    <h2 className="pclTitleSmall">I/O Wiring:</h2>
                    <p className="pclIntroText"><b>All PLC I/O points are wired at our shop to terminal blocks for use in terminating customer-supplied pilot devices or wiring from field devices. All wiring internal to the panel is factory-tested for continuity prior to shipment.</b></p>
                    <h2 className="pclTitleSmall">Specific Components Used:</h2>
                    <img className="pclPic3" src=""/>
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
                        <li className="pclListItem">Uninterruptible Power Supply (UPS)</li>
                        <li className="pclListItem">Ethernet Switch</li>
                    </b></ul>
                </div>
                <img className="pclPic4" src="https://firebasestorage.googleapis.com/v0/b/panelflex-new.appspot.com/o/PLC%20Panel%2FPLC%20panel2.png?alt=media&token=fbe999d6-ad92-42aa-85b2-febfd1f57c0a"/>
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
                <img className="pclPic2" src=""/>
                <Footer/>
            </div>
        )
    }
}

export default PclPanels;