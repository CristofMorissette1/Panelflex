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
            <img className="individualProductsImage" src="https://firebasestorage.googleapis.com/v0/b/panelflex-7663b.appspot.com/o/products%20%26%20services%2Fpcl%20panels%20image1.jpg?alt=media&token=6c6eead1-ccd8-4bef-8fe4-4078d1a2a4e7"></img>
            <div className="individualProductsDescription">
              <h3 className="individualProductsTitle">PLC Panels</h3>
              <p className="individualProductsText">Panelflex builds a variety of PLC panels for refrigeration, compression, plant facilities, waste water and many other applications.</p>
            </div>
          </div></a>
          <a href="/scadapanels" className="individualProductsLink"><div className="individualProducts">
            <img className="individualProductsImage" src="https://firebasestorage.googleapis.com/v0/b/panelflex-7663b.appspot.com/o/products%20%26%20services%2FDSCF5597.JPG?alt=media&token=80efd115-ba02-4312-8221-384d50ae0f41"></img>
            <div className="individualProductsDescription">
              <h3 className="individualProductsTitle">Scada/RTU Panels</h3>
              <p className="individualProductsText">Whether the communication medium is HMI or device selections, Panelflex’s SCADA experience will provide the best value and fit for your application.</p>
            </div>
          </div></a> 
          <a href="/marshallingpanels" className="individualProductsLink"><div className="individualProducts">
            <img className="individualProductsImage" src="https://firebasestorage.googleapis.com/v0/b/panelflex-7663b.appspot.com/o/products%20%26%20services%2Fdcs%20marshalling%20panels%20image1.jpg?alt=media&token=1ca1b7e8-ccb3-437b-8340-8a1b1a685042"></img>
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
            <img className="individualProductsImage" src="https://firebasestorage.googleapis.com/v0/b/panelflex-7663b.appspot.com/o/products%20%26%20services%2Fvdf%20control%20panels%20image1.jpg?alt=media&token=6a809ff3-25a7-4127-8b18-007e7d780e90"></img>
            <div className="individualProductsDescription">
              <h3 className="individualProductsTitle">VFD / Motor Control Panels</h3>
              <p className="individualProductsText">Panelflex provides and assembles a broad variety of motor control panel solutions for any motor control requirement you need. Our motor control panels meet the needs of many applications and conform to NEMA or IEC standards.</p>
            </div>
          </div></a>  
          <a href="/lightingpanels" className="individualProductsLink"><div className="individualProducts">
            <img className="individualProductsImage" src="https://firebasestorage.googleapis.com/v0/b/panelflex-7663b.appspot.com/o/products%20%26%20services%2Flightning%20control%20panels%20image1.jpg?alt=media&token=4115ce59-08f2-4a0f-93ba-3862eb4047b3"></img>
            <div className="individualProductsDescription">
              <h3 className="individualProductsTitle">Lighting Control Panels</h3>
              <p className="individualProductsText">Panelflex offers custom contactor lighting control system panels for your lighting control needs.</p>
            </div>
          </div></a>
          <a href="/telecommunicationpanels" className="individualProductsLink"><div className="individualProducts">
            <img className="individualProductsImage" src="https://firebasestorage.googleapis.com/v0/b/panelflex-7663b.appspot.com/o/products%20%26%20services%2Finstrument%20rack%20panels%20image1.jpg?alt=media&token=6aacf801-35a5-4bf2-a674-b12249c20b44"></img>
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
            <img className="individualProductsImage" src="https://firebasestorage.googleapis.com/v0/b/panelflex-7663b.appspot.com/o/products%20%26%20services%2Fprotection%20panel.jpg?alt=media&token=082f2125-f79f-471f-83c8-7cb7c61780ac"></img>
            <div className="individualProductsDescription">
              <h3 className="individualProductsTitle">Protection Panels</h3>
              <p className="individualProductsText">Custom utility and facility substation protection panels constructed to customer specification.</p>
            </div>
          </div></a>
          <a href="/skids" className="individualProductsLink"><div className="individualProducts">
            <img className="individualProductsImage" src="https://firebasestorage.googleapis.com/v0/b/panelflex-7663b.appspot.com/o/products%20%26%20services%2Fskids.JPG?alt=media&token=cc105174-8335-4c2e-b75d-fda19601eeef"></img>
            <div className="individualProductsDescription">
              <h3 className="individualProductsTitle">Building & Skids</h3>
              <p className="individualProductsText">Custom Electrical and Control buildings constructed per customer requirements.</p>
            </div>
          </div></a>
          <a href="/kiosks" className="individualProductsLink"><div className="individualProducts">
            <img className="individualProductsImage" src="https://firebasestorage.googleapis.com/v0/b/panelflex-7663b.appspot.com/o/products%20%26%20services%2FDSCF1696.jpg?alt=media&token=e955b4d0-7929-4bb9-97fa-aa3c57b715c8"></img>
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