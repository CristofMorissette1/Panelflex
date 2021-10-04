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
                    <img className="skidsPic" src="https://firebasestorage.googleapis.com/v0/b/panelflex-new.appspot.com/o/Buildings%20%26%20Skids%2Fthumbnail_image002.png?alt=media&token=497506e1-67fe-4786-858a-796dc8f9a911"/>
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
                <img className="skidPic2" src="https://firebasestorage.googleapis.com/v0/b/panelflex-new.appspot.com/o/Buildings%20%26%20Skids%2FScreenshot%202021-10-04%20122137.png?alt=media&token=df07198e-ff6d-452b-9adf-a12545831272"/>
                <Footer/>
            </div>
        )
    }
}

export default Combinerbox;