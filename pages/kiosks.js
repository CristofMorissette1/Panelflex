import Head from 'next/head';
import { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Chatbot from '../components/chatbot';



class Kiosks extends Component {
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
                    <h1 className="pclMainTitle">Electrical Kiosks</h1>
                </div>
                <hr className="border1"/>
                <div className="pclBodyContainer">
                    <img className="kioskPic" src="https://firebasestorage.googleapis.com/v0/b/panelflex-7663b.appspot.com/o/products%20%26%20services%2FDSCF1672.jpg?alt=media&token=8e9ed8a1-feb6-4fb4-86c7-3b78db89f880"/>
                    <p className="skidsIntroText"><b>We will build Kiosks to your needs. Be it floor mount, wall mount, free standing, recessed or any other kiosk type we can do it all. Each Kiosk is custom built and assembled to your exact specifications.</b></p>
                    <h2 className="pclTitleSmall">Enclosure options include:</h2>
                    <ul className="pclList"><b>
                        <li className="pclListItem">Stainless Steel</li>
                        <li className="pclListItem">Carbon Steel and Galvanized</li>
                    </b></ul>
                </div>
                <img className="kioskPic2" src="https://firebasestorage.googleapis.com/v0/b/panelflex-7663b.appspot.com/o/products%20%26%20services%2FDSCF4676.JPG?alt=media&token=f841d7a5-2622-4e19-a06b-7c959e996fc9"/>
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

export default Kiosks;