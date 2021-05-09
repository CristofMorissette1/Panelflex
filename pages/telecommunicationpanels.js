import Head from 'next/head';
import { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Chatbot from '../components/chatbot';
import Image from 'next/image';


class TelecommunicationPanels extends Component {
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
                <div className="teleHeaderContainer">
                    <h1 className="pclMainTitle">Instrument Racks/Telecommunication Panels</h1>
                </div>
                <hr className="border1"/>
                <div className="pclBodyContainer">
                    <p className="pclIntroText">Panelflex wide services are not limited to custom control panel assembly. We offer a wide range of manufacturing custom instrumentation transmitter racks and telecommunication / network panels.</p>
                    <img className="instrumentPic" src="https://firebasestorage.googleapis.com/v0/b/panelflex-7663b.appspot.com/o/products%20%26%20services%2Finstrument%20pic1.jpg?alt=media&token=a0344acd-4c5d-4955-8435-e1a30be5265b"/>
                </div>
                
                <Footer/>
            </div>
        )
    }
}

export default TelecommunicationPanels;