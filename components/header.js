import React, { Component } from 'react';

class Header extends Component {
    constructor(){
        super()
        this.state={
            showServicesMenu: false
        }
        this.showServicesMenu = this.showServicesMenu.bind(this);
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
    
    render(){
        return (
            <div className="Header">
                <div className="mainHeader">
                    <p className="logo">PanelFlex</p>
                    <div className="link_container">
                        <div className="linkContainerSmall">
                            <a className="links" href="/"><p className="mainHeaderLinkText">Home</p></a>
                        </div>
                        <div className="linkContainerSmall">
                            <a className="links" href="/products" onClick={this.showServicesMenu}><p className="mainHeaderLinkText">Products<b>↓</b></p></a>
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