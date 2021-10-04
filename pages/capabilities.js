import Head from 'next/head';
import { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Chatbot from '../components/chatbot';
import {useRouter} from 'next/router';


class Capabilities extends Component {
    constructor(props) {
        super(props);
        this.state = {
          check: false,
          col: false,
        };
      }
    
    changeCheck = () => {
    this.state.check?this.setState({check: false}):this.setState({check: true})
    }
    changeCol = (prop) => {
    this.state.col?this.setState({col: prop}):this.setState({col: prop})
    }
    
    render() {
        return (
            <div className="capabilitiesMainContainer">
                <Header/>
                <p className="capabilitiesTitle">Production Capabilities</p>
                <div className="capabilitiesContainer">
                    <img className="capabilitiesPic1" src="https://firebasestorage.googleapis.com/v0/b/panelflex-new.appspot.com/o/Capabilities%2Fthumbnail_Drilling.jpg?alt=media&token=84d2cf37-b6ce-4ef7-b452-e27a9c0460de"/>
                    <img className="capabilitiesPic2" src="https://firebasestorage.googleapis.com/v0/b/panelflex-new.appspot.com/o/Capabilities%2FFrestry.jpg?alt=media&token=7b95f00c-8f9b-4e9a-bb6c-fe162da666b0"/>
                    <img className="capabilitiesPic3" src="https://firebasestorage.googleapis.com/v0/b/panelflex-new.appspot.com/o/Capabilities%2Fthumbnail_Mining.jpg?alt=media&token=7cc16963-7a5c-4488-90fa-286162a38691"/>
                    <img className="capabilitiesPic4" src="https://firebasestorage.googleapis.com/v0/b/panelflex-new.appspot.com/o/Capabilities%2FPetro%20chamical.jpg?alt=media&token=86e0a5a0-8a07-4a0b-8f79-9123fb3be622"/>
                    <p className="capabilitiesTitleSmall">Panelflex is capable of completing many types of projects, including but not limited to:</p>
                    <ul className="capabilitiesList">
                        <li className="listItem">Plant PLC Panels</li>
                        <li className="listItem">BMS Panels</li>
                        <li className="listItem">SCADA Panels</li>
                        <li className="listItem">RTU Control Panels</li>
                        <li className="listItem">DCS Panels</li>
                        <li className="listItem">Lighting Contactor Panels</li>
                        <li className="listItem">Heat Trace Contactor Panels</li>
                        <li className="listItem">Remote I/O Panels</li>
                        <li className="listItem">Instrumentation Panels</li>
                        <li className="listItem">Process Panels</li>
                        <li className="listItem">Solar Pump Packaging</li>
                        <li className="listItem">HVAC Control Panels</li>
                        <li className="listItem">Custom Control</li>
                        <li className="listItem">Protection Panels</li>
                        <li className="listItem">Marshalling Panels</li>
                        <li className="listItem">Oil Well Controllers</li>
                        <li className="listItem">VFD Control Panels</li>
                        <li className="listItem">Combination Starters</li>
                        <li className="listItem">Booster Pump Panels</li>
                        <li className="listItem">Waste Water Control Panels</li>
                        <li className="listItem">Compressor Panels</li>
                        <li className="listItem">Electrical Skids & Buildings</li>
                        <li className="listItem">Staging</li>
                    </ul>
                    <p className="capabilitiesText"><b>Panelflex's manufacturing capabilities are the key to the implementation of any automation solution. Integral to this skill-set is the complete integration of design assistance, project management, procurement, fabrication, quality control and testing of automation solutions. Panelflex can assist in providing complete systems integration support for a broad array of industries.</b></p>
                    <p className="capabilitiesTitleSmall">Panelflex is proud to serve the following markets:</p>
                    <ul className="capabilitiesList">
                        <li className="listItem">Oil & Gas producers</li>
                        <li className="listItem">Renewable Energy</li>
                        <li className="listItem">Transportation</li>
                        <li className="listItem">Original Equipment Fabricators</li>
                        <li className="listItem">Mining</li>
                        <li className="listItem">Drilling Contractors</li>
                        <li className="listItem">Municipalities</li>
                        <li className="listItem">Service Companies</li>
                        <li className="listItem">EPC's</li>
                        <li className="listItem">Utilities</li>
                        <li className="listItem">Forestry</li>
                        <li className="listItem">Shipping</li>
                        <li className="listItem">Science and Technology</li>
                        <li className="listItem">Pipeline</li>
                        <li className="listItem">Petro-Chemical</li>
                    </ul>
                    <div className="capabilitiesPicContainer">
                    <img className="capabilitiesPic5" src="https://firebasestorage.googleapis.com/v0/b/panelflex-new.appspot.com/o/Capabilities%2Fthumbnail_Shipping.jpg?alt=media&token=b68c4552-2666-48a7-8334-b25f0dea2cb4"/>
                    <img className="capabilitiesPic6" src="https://firebasestorage.googleapis.com/v0/b/panelflex-new.appspot.com/o/Capabilities%2Fthumbnail_Transportation%20picture.jpg?alt=media&token=b080b05b-6191-4dc0-98ea-479426bfbb83"/>
                    <img className="capabilitiesPic7" src="https://firebasestorage.googleapis.com/v0/b/panelflex-new.appspot.com/o/Capabilities%2Fthumbnail_bitcoin%20mining.jpg?alt=media&token=3ff17279-52c6-4dac-b03f-00a7a3392121"/>
                    <img className="capabilitiesPic8" src="https://firebasestorage.googleapis.com/v0/b/panelflex-new.appspot.com/o/Capabilities%2Fthumbnail_sience%20station.jpg?alt=media&token=b60d6514-2365-4d7b-9ae9-9da6cfb6ec17"/>
                    <img className="capabilitiesPic9" src="https://firebasestorage.googleapis.com/v0/b/panelflex-new.appspot.com/o/Capabilities%2Fthumbnail_solar.jpg?alt=media&token=b52a814e-ba0f-4e3f-9db0-ba45e9154f91"/>
                    
                    </div>
                </div>
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
                <Footer/>
            </div>
        )
    }
}

export default Capabilities;