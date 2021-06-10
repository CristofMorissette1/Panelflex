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
                    <h1 className="pclMainTitle">Buildings & Skids</h1>
                </div>
                <hr className="border1"/>
                <div className="pclBodyContainer">
                    <img className="skidsPic" src="https://firebasestorage.googleapis.com/v0/b/panelflex-7663b.appspot.com/o/products%20%26%20services%2Fskids%20pic.jpg?alt=media&token=a5eca7cc-ac05-4030-93b3-4e11bf723d6e"/>
                    <p className="skidsIntroText"><b>We will bring your Electrical Building design to reality.</b></p>
                    <h2 className="pclTitleSmall">Some more information:</h2>
                    <p className="pclIntroText"><b>In collaboration with our industry partners, we can provide the Electrical Building and Skid solutions you are looking for. Each Custom Electrical Building will be assigned a project manager to follow the procurement, manufacturing, testing, certification and shipping. We will take care of your build from plan to building.</b></p>
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
                <img className="skidPic2" src="https://firebasestorage.googleapis.com/v0/b/panelflex-7663b.appspot.com/o/products%20%26%20services%2Fskid.png?alt=media&token=ec0a4f0b-0082-4361-8e17-623387415073"/>
                <Footer/>
            </div>
        )
    }
}

export default Combinerbox;