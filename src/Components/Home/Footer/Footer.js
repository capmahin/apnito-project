import React from 'react';
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';


const Footer = () => {
    return (
        <CDBFooter className="shadow py-2 my-2 bg-dark">
        <CDBBox display="flex" flex="column" className="mx-auto py-5 text-white" style={{ width: '90%' }}>
          <CDBBox display="flex" justifyContent="between" className="flex-wrap text-white">
            <CDBBox>
              <a href="/" className="d-flex align-items-center p-0 text-white">
                <img alt="logo" src="https://cdn.pixabay.com/photo/2017/04/20/17/05/letter-a-2246311_960_720.png" width="50px" />
                <span className="ml-3 h5 font-weight-bold text-white">Apnito</span>
              </a>
              <p className="my-3" style={{ width: '250px' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nihil nam iusto beatae neque aspernatur a, exercitationem ex optio veritatis laudantium corrupti natus pariatur repellendus libero unde, illo dolorem eius!
              </p>
              <CDBBox display="flex" className="mt-4">
                <CDBBtn flat color="dark">
                  <CDBIcon fab icon="facebook-f" />
                </CDBBtn>
                <CDBBtn flat color="dark" className="mx-3">
                  <CDBIcon fab icon="twitter" />
                </CDBBtn>
                <CDBBtn flat color="dark" className="p-2">
                  <CDBIcon fab icon="instagram" />
                </CDBBtn>
              </CDBBox>
            </CDBBox>
            <CDBBox>
              <p className="h5 mb-4 text-white" style={{ fontWeight: '600' }}>
                Apnito
              </p>
              <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                <CDBFooterLink  href="/">Resources</CDBFooterLink>
                <CDBFooterLink  href="/">About Us</CDBFooterLink>
                <CDBFooterLink  href="/">Contact</CDBFooterLink>
                <CDBFooterLink  href="/">Blog</CDBFooterLink>
              </CDBBox>
            </CDBBox>
            <CDBBox>
              <p className="h5 mb-4 text-white" style={{ fontWeight: '600' }}>
                Help
              </p>
              <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                <CDBFooterLink  href="/">Support</CDBFooterLink>
                <CDBFooterLink  href="/">Sign Up</CDBFooterLink>
                <CDBFooterLink  href="/">Sign In</CDBFooterLink>
              </CDBBox>
            </CDBBox>
            <CDBBox>
              <p className="h5 mb-4 text-white" style={{ fontWeight: '600' }}>
                Products
              </p>
              <CDBBox flex="column"  style={{ cursor: 'pointer', padding: '0' }}>
                <CDBFooterLink  href="/">Windframe</CDBFooterLink>
                <CDBFooterLink  href="/">Loop</CDBFooterLink>
                <CDBFooterLink  href="/">Contrast</CDBFooterLink>
              </CDBBox>
            </CDBBox>
          </CDBBox>
          <small className="text-center mt-5 text-white">&copy; Devwares, 2020. All rights reserved.</small>
        </CDBBox>
      </CDBFooter>
    );
};

export default Footer;