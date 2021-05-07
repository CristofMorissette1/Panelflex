import React, { Component } from 'react';

class Header extends Component {
    constructor(){
        super()
        this.state={
            showServicesMenu: false,
            home: true,
            products: false,
            discover: false,
            capabilities: false,
            csa: false,
            contact: false
        }
        this.showServicesMenu = this.showServicesMenu.bind(this);
        this.changeColour = this.changeColour.bind(this);
        this. productColour = this.productColour.bind(this);
    }

      showServicesMenu(e) {
          e.preventDefault();
          if (this.state.showServicesMenu == false) {
          this.setState({
            showServicesMenu: true,
          });
        } else {
          this.setState({
            showServicesMenu: false,
          });
        }
      }

    changeColour(e) {
        e.preventDefault();
        if (this.state.home == false) {
            this.setState({
                home: true,
                products: false,
                discover: false,
                capabilities: false,
                csa: false,
                contact: false
            })
        } else {
            null
        }  
        console.log(this.state) 
    }

    productColour(e) {
        e.preventDefault();
        if (this.state.products == false) {
            this.setState({
                home: false,
                products: true,
                discover: false,
                capabilities: false,
                csa: false,
                contact: false
            });
        }
        console.log(this.state)
    }
    
    render(){
        return (
            <div className="Header">
                <div className="mainHeader">
                    <a href="/"><img className="logo" src="https://firebasestorage.googleapis.com/v0/b/panelflex-7663b.appspot.com/o/Header%2FPanelflex.jpg?alt=media&token=e3229ecb-67d3-4a00-952e-10caa1e86196"/></a>
                    <div className="link_container">
                        <div className="linkContainerSmall">
                            <a className="links" href="/"><p className="mainHeaderLinkText" >Home</p></a>
                        </div>
                        <div className="linkContainerSmall">
                            <a className="links" href="/products" onClick={this.showServicesMenu}><p className="mainHeaderLinkText" onClick={this.productColour}>Products<b>↓</b></p></a>
                            {
                                this.state.showServicesMenu ?
                                (
                                    <div className="navMenuProducts">
                                        <div className="navMenuLinks">
                                            <a className="navLinks" href="/products">Products</a>
                                            <a className="navLinks" href="/pclpanels">PCL Panels</a>
                                            <a className="navLinks" href="/scadapanels">Scada/RTU Panels</a>
                                            <a className="navLinks" href="/marshallingpanels">DCS Marshalling Panels</a>
                                            <a className="navLinks" href="/commercialpanels">Commercial/Municipal Control Panels</a>
                                            <a className="navLinks" href="/vdfpanels">VDF/Motor Control Panels</a>
                                            <a className="navLinks" href="/lightingpanels">Lighting Control Panels</a>
                                            <a className="navLinks" href="/telecommunicationpanels">Instrument Racks/Telecommunication Panels</a>
                                            <a className="navLinks" href="/staging">Staging</a>
                                            <a className="navLinks" href="/combinerbox">PV Combiner box</a>
                                            <a className="navLinks" href="/protectionpanel">Protection Panels</a>
                                            <a className="navLinks" href="/skids">Buildings & Skids</a>
                                        </div>
                                    </div>
                                ) :
                                (
                                    null
                                )
                            }
                        </div>
                        <div className="linkContainerSmall">
                            <a className="links" href="/discoverpfx"><p className="mainHeaderLinkText">Discover PFX</p></a>
                        </div>
                        <div className="linkContainerSmall">
                            <a className="links" href="/capabilities"><p className="mainHeaderLinkText">Capabilities</p></a>
                        </div>
                        <div className="linkContainerSmall">
                            <a className="links" href="/csa"><p className="mainHeaderLinkText">CSA</p></a>
                        </div>
                        <div className="linkContainerSmall">
                            <a className="links" href="/contact"><p className="mainHeaderLinkText">Contact</p></a>
                        </div>
                    </div>
                </div>
            </div>
        ); 
    }  
}

  export default Header;