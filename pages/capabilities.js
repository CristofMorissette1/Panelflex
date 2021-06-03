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
                    <img className="capabilitiesPic1" src="https://firebasestorage.googleapis.com/v0/b/panelflex-7663b.appspot.com/o/production%20capabilities%2FDrilling.jpg?alt=media&token=87dca99d-db7f-49d3-aee3-0956323d0d81"/>
                    <img className="capabilitiesPic2" src="https://firebasestorage.googleapis.com/v0/b/panelflex-7663b.appspot.com/o/production%20capabilities%2FFrestry.jpg?alt=media&token=c4973ef7-ad78-4080-b37d-6313707c5bc5"/>
                    <img className="capabilitiesPic3" src="https://firebasestorage.googleapis.com/v0/b/panelflex-7663b.appspot.com/o/production%20capabilities%2FMining.jpg?alt=media&token=fd962d74-ef2f-4c82-8779-f210a3322d56"/>
                    <img className="capabilitiesPic4" src="https://firebasestorage.googleapis.com/v0/b/panelflex-7663b.appspot.com/o/production%20capabilities%2FPetro%20chamical.jpg?alt=media&token=d993d840-a340-48e1-b323-21e24ef20262"/>
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
                    <img className="capabilitiesPic5" src="https://firebasestorage.googleapis.com/v0/b/panelflex-7663b.appspot.com/o/production%20capabilities%2FShipping.jpg?alt=media&token=b0cc1f31-424b-4476-bd46-032aee4ccfb9"/>
                    <img className="capabilitiesPic6" src="https://firebasestorage.googleapis.com/v0/b/panelflex-7663b.appspot.com/o/production%20capabilities%2FTransportation%20picture.jpg?alt=media&token=010982ba-9864-403d-9ce1-b3dd5252ef3f"/>
                    <img className="capabilitiesPic7" src="https://firebasestorage.googleapis.com/v0/b/panelflex-7663b.appspot.com/o/production%20capabilities%2Fbitcoin%20mining.jpg?alt=media&token=aebb131a-479d-4a65-b8a8-0051bbd39ad0"/>
                    <img className="capabilitiesPic8" src="https://firebasestorage.googleapis.com/v0/b/panelflex-7663b.appspot.com/o/production%20capabilities%2Fsience%20station.jpg?alt=media&token=08b8a826-e241-46d1-81ef-fc9e1910bfdf"/>
                    <img className="capabilitiesPic9" src="https://firebasestorage.googleapis.com/v0/b/panelflex-7663b.appspot.com/o/production%20capabilities%2Fsolar.jpg?alt=media&token=4108190f-aa27-49d9-9e09-fe19d2ec6af0"/>
                    <img className="capabilitiesPic10" src="https://firebasestorage.googleapis.com/v0/b/panelflex-7663b.appspot.com/o/production%20capabilities%2Futility.jpg?alt=media&token=58daa811-95e4-45a0-b475-63ed4c3d6411"/>
                    
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