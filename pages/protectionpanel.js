import Head from 'next/head';
import { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Chatbot from '../components/chatbot';



class Combinerbox extends Component {
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
                <div className="commercialHeaderContainer">
                    <h1 className="pclMainTitle">Protection Panels</h1>
                </div>
                <hr className="border1"/>
                <div className="pclBodyContainer">
                    <img className="protectionPic" src="https://firebasestorage.googleapis.com/v0/b/panelflex-7663b.appspot.com/o/products%20%26%20services%2Fcommercial%20pic.jpg?alt=media&token=d5def943-27ba-4206-9c82-b6e931b1c5f9"/>
                    <p className="pclIntroText"><b>We provide Power System Protection Panel construction services for Utilities and Industrial Facilities. We can build protection panels and cubicles for all levels of electrical power transmission, distribution and generation, whether to electrical utilities, renewable installations, industrial sites or the transport sector.</b></p>
                    <h2 className="pclTitleSmall">Some protection panel designs include:</h2>
                    <ul className="pclList"><b>
                        <li className="pclListItem">19” rack-based panels and cubicles</li>
                        <li className="pclListItem">Swing frame front access panels and cubicles</li>
                        <li className="pclListItem">Solid front protection panels and cubicles</li>
                        <li className="pclListItem">Fully equipped and wired replacement protection panel front sheets</li>
                        <li className="pclListItem">Wall mounted protection boxes</li>
                    </b></ul>
                </div>
                <img className="protectionPic2" src="https://firebasestorage.googleapis.com/v0/b/panelflex-7663b.appspot.com/o/products%20%26%20services%2Fcommercial%20pic2.jpg?alt=media&token=b666a372-76dc-432f-8be3-eefe6d659e31"/>
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

export default Combinerbox;