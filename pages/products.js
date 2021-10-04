import Head from 'next/head';
import { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Chatbot from '../components/chatbot';

class Products extends Component {
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
            <div className="productMainContainer">
            <Header/>
            <div className="productHeaderContainer">
              <h1 className="pfxMainTitle">Products & Services</h1>
            </div>
            <div className="product2ndContainer">
          <p className="productsMainText">Panelflex builds custom electrical panels that meet project specific needs.  Our experience and top quality assemblies will offer long lasting performance and durability you can count on.  Below are a few examples of the types of panels we can build. Let us know what we can build for you.</p>   
          <a href="/pclpanels" className="individualProductsLink"><div className="individualProducts">
            <img className="individualProductsImage" src="https://firebasestorage.googleapis.com/v0/b/panelflex-new.appspot.com/o/PLC%20Panel%2FPLC%20panel2.png?alt=media&token=fbe999d6-ad92-42aa-85b2-febfd1f57c0a"></img>
            <div className="individualProductsDescription">
              <h3 className="individualProductsTitle">PLC Panels</h3>
              <p className="individualProductsText">Panelflex builds a variety of PLC panels for refrigeration, compression, plant facilities, waste water and many other applications.</p>
            </div>
          </div></a>
          <a href="/scadapanels" className="individualProductsLink"><div className="individualProducts">
            <img className="individualProductsImage" src="https://firebasestorage.googleapis.com/v0/b/panelflex-new.appspot.com/o/Discover%20PFX%2Fdiscover%20pfx3.jpg?alt=media&token=bdd946f3-5673-4828-89f7-48a97f499aed"></img>
            <div className="individualProductsDescription">
              <h3 className="individualProductsTitle">Scada/RTU Panels</h3>
              <p className="individualProductsText">Whether the communication medium is HMI or device selections, Panelflex’s SCADA experience will provide the best value and fit for your application.</p>
            </div>
          </div></a> 
          <a href="/marshallingpanels" className="individualProductsLink"><div className="individualProducts">
            <img className="individualProductsImage" src="https://firebasestorage.googleapis.com/v0/b/panelflex-new.appspot.com/o/Marshalling%20Control%20Panel%2Fmarshalling%20control%20panel.png?alt=media&token=8792ccae-cb94-4c84-a158-df27e1bf5bc7"></img>
            <div className="individualProductsDescription">
              <h3 className="individualProductsTitle">DCS Marshalling Panels</h3>
              <p className="individualProductsText">Panelfllex promises industry leading quality in manufacturing custom marshalling Distributed Control Systems (DCS) panels.</p>
            </div>
          </div></a> 
          <a href="/commercialpanels" className="individualProductsLink"><div className="individualProducts">
            <img className="individualProductsImage" src="https://firebasestorage.googleapis.com/v0/b/panelflex-7663b.appspot.com/o/products%20%26%20services%2Fmunicipal%20control%20panels%20image1.jpg?alt=media&token=ffda5995-e968-4d92-ad56-9d07af74cfc7"></img>
            <div className="individualProductsDescription">
              <h3 className="individualProductsTitle">Commercial / Municipal Control Panels</h3>
              <p className="individualProductsText">We provide products and services for municipal and industrial markets.  The staff has over 20 years experience providing process control solutions and designing custom control panels for industrial applications.</p>
            </div>
          </div></a> 
          <a href="/vdfpanels" className="individualProductsLink"><div className="individualProducts">
            <img className="individualProductsImage" src="https://firebasestorage.googleapis.com/v0/b/panelflex-new.appspot.com/o/VDF%20Control%20Panel%2FVDF%20panel.png?alt=media&token=6ea8ad41-8a52-42d3-89d2-ac244175b168"></img>
            <div className="individualProductsDescription">
              <h3 className="individualProductsTitle">VFD / Motor Control Panels</h3>
              <p className="individualProductsText">Panelflex provides and assembles a broad variety of motor control panel solutions for any motor control requirement you need. Our motor control panels meet the needs of many applications and conform to NEMA or IEC standards.</p>
            </div>
          </div></a>  
          <a href="/lightingpanels" className="individualProductsLink"><div className="individualProducts">
            <img className="individualProductsImage" src="https://firebasestorage.googleapis.com/v0/b/panelflex-new.appspot.com/o/Lighting%20Control%20Panel%2Flighting%20control%20panel.png?alt=media&token=24452382-de9a-45ba-ac61-b6d79c582f9d"></img>
            <div className="individualProductsDescription">
              <h3 className="individualProductsTitle">Lighting Control Panels</h3>
              <p className="individualProductsText">Panelflex offers custom contactor lighting control system panels for your lighting control needs.</p>
            </div>
          </div></a>
          <a href="/telecommunicationpanels" className="individualProductsLink"><div className="individualProducts">
            <img className="individualProductsImage" src="https://firebasestorage.googleapis.com/v0/b/panelflex-new.appspot.com/o/Intrusmentation%20%26%20Telecommunications%2Fthumbnail_Instrumentation.jpg?alt=media&token=d88d76c4-5f09-4c6a-960a-7481b50587c6"></img>
            <div className="individualProductsDescription">
              <h3 className="individualProductsTitle">Instrument Racks/Telecommunication Panels</h3>
              <p className="individualProductsText">Panelflex wide services are not limited to custom control panel assembly. We offer a wide range of manufacturing custom instrumentation transmitter racks and telecommunication / network panels.</p>
            </div>
          </div></a>
          <a href="/staging" className="individualProductsLink"><div className="individualProducts">
            <img className="individualProductsImage" src="https://firebasestorage.googleapis.com/v0/b/panelflex-7663b.appspot.com/o/products%20%26%20services%2Fprotectionpic.jpg?alt=media&token=edfa3570-c034-4fad-a48f-66de8b7144d1"></img>
            <div className="individualProductsDescription">
              <h3 className="individualProductsTitle">Staging</h3>
              <p className="individualProductsText">Panelflex supports clients' requirement to point to point, power up or program test their panels before shipping, and is eager in providing them the most pleasant testing experience. Customers are welcome to drop by any time during regular business hours to follow up on their projects.</p>
            </div>
          </div></a>
          <a href="/combinerbox" className="individualProductsLink"><div className="individualProducts">
            <img className="individualProductsImage" src="https://firebasestorage.googleapis.com/v0/b/panelflex-7663b.appspot.com/o/products%20%26%20services%2FPV%20Combiner%20box.JPG?alt=media&token=82a1d3ad-89cd-4ee1-9a11-232c5a61a46c"></img>
            <div className="individualProductsDescription">
              <h3 className="individualProductsTitle">PV Combiner Box</h3>
              <p className="individualProductsText">CSA approved 1000VDC & 1500VDC Panelflex PV system Combiner Boxes. Combiner Boxes can be customized to fit the solar integrators’ specific needs.</p>
            </div>
          </div></a>
          <a href="/protectionpanel" className="individualProductsLink"><div className="individualProducts">
            <img className="individualProductsImage" src="https://firebasestorage.googleapis.com/v0/b/panelflex-new.appspot.com/o/Protection%20Panel%2FProtection%20panel.png?alt=media&token=a8a923f3-90e6-49f3-a48c-eeba608db292"></img>
            <div className="individualProductsDescription">
              <h3 className="individualProductsTitle">Protection Panels</h3>
              <p className="individualProductsText">Custom utility and facility substation protection panels constructed to customer specification.</p>
            </div>
          </div></a>
          <a href="/skids" className="individualProductsLink"><div className="individualProducts">
            <img className="individualProductsImage" src="https://firebasestorage.googleapis.com/v0/b/panelflex-new.appspot.com/o/Buildings%20%26%20Skids%2FScreenshot%202021-10-04%20122137.png?alt=media&token=df07198e-ff6d-452b-9adf-a12545831272"></img>
            <div className="individualProductsDescription">
              <h3 className="individualProductsTitle">Building & Skids</h3>
              <p className="individualProductsText">Custom Electrical and Control buildings constructed per customer requirements.</p>
            </div>
          </div></a>
          <a href="/kiosks" className="individualProductsLink"><div className="individualProducts">
            <img className="individualProductsImage" src="https://firebasestorage.googleapis.com/v0/b/panelflex-new.appspot.com/o/Electrical%20kiosks%2Fkiosk1.png?alt=media&token=a6323e00-ef9b-417e-ac26-6c1dd345c18b"></img>
            <div className="individualProductsDescription">
              <h3 className="individualProductsTitle">Electrical Kiosks</h3>
              <p className="individualProductsText">We will build your Kiosks.</p>
            </div>
          </div></a>
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

export default Products