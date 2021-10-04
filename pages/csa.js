import Head from 'next/head';
import { Component } from 'react';
import Header from '../components/header';
import Chatbot from '../components/chatbot';
import Footer from '../components/footer';



class Csa extends Component {
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
            <div className="csaMainContainer">
            <Header/>
            <div className="csaHeaderContainer">  
            </div>
            <div className="csaContainer">
                <h1 className="csaTitle">CSA</h1>
                <p className="csaText">We offer a diverse line of CSA general purpose or Class I Div 2 approved custom electrical control panels built to your specific applications. Panelflex is certified by the Canadian Standards Association to manufacture industrial control panels to CSA C22.1#14 and UL 508. Panels are certified for use in Canada and the United States.</p>
                <div className="csaContainerSmall">
                    <img className="csaImage" src="https://firebasestorage.googleapis.com/v0/b/panelflex-new.appspot.com/o/CSA%2Fcsa.jpg?alt=media&token=be533425-f1a4-487c-bbdc-c034ec57f06a"/>
                    <p className="csaTextSmall">Canadian Certification:<br/>Panels bearing the designation CSA are certified to meet the requirements of CSA C22.2 No.14 (Industrial Control Equipment) and are approved for use throughout Canada.</p>
                </div>
                <div className="csaContainerSmall">
                    <img className="csaImage2" src="https://firebasestorage.googleapis.com/v0/b/panelflex-new.appspot.com/o/CSA%2FcCSAus-Mark-150x150.png?alt=media&token=e0ed2a77-7142-4143-86ea-9f9abc7e79f4"/>
                    <p className="csaTextSmall">Canadian and US Certification:<br/> Control assemblies bearing c CSA us are certified to have been built in accordance with or exceed the applicable requirements of CSA C22.2 #14 and UL 508 and are approved for use in Canada and the United States.   See "US Certification" for description of American certification.</p>
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

export default Csa;