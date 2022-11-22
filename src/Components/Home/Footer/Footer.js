import React from 'react';
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';


const Footer = () => {
    return (
        <CDBFooter className="shadow py-1 my-1 bg-dark">
        <CDBBox display="flex" flex="column" className="mx-auto py-5 text-white" style={{ width: '90%' }}>
          <CDBBox display="flex" justifyContent="between" className="flex-wrap text-white">
            <CDBBox>
              <a href="/" className="d-flex align-items-center p-0 text-white">
                <img alt="logo" src="https://cdn.pixabay.com/photo/2017/04/20/17/05/letter-a-2246311_960_720.png" width="60px" />
                <span className="ml-3 h4 font-weight-bold text-white">Apnito</span>
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
                <CDBFooterLink  href="/"><h5 className='text-white'>Resources</h5></CDBFooterLink>
                <CDBFooterLink  href="/"><h5 className='text-white'>About Us</h5></CDBFooterLink>
                <CDBFooterLink  href="/"><h5 className='text-white'>Contact</h5></CDBFooterLink>
                <CDBFooterLink  href="/"><h5 className='text-white'>Blog</h5></CDBFooterLink>
              </CDBBox>
            </CDBBox>
            <CDBBox>
              <p className="h5 mb-4 text-white" style={{ fontWeight: '600' }}>
                Help
              </p>
              <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                <CDBFooterLink  href="/"><h5 className='text-white'>Support</h5></CDBFooterLink>
                <CDBFooterLink  href="/"><h5 className='text-white'>Sign Up</h5></CDBFooterLink>
                <CDBFooterLink  href="/"><h5 className='text-white'>Sign In</h5></CDBFooterLink>
              </CDBBox>
            </CDBBox>
            <CDBBox>
              <p className="h5 mb-4 text-white" style={{ fontWeight: '600' }}>
                Services
              </p>
              <CDBBox flex="column"  style={{ cursor: 'pointer', padding: '0' }}>
                <CDBFooterLink  href="/"><h5 className='text-white'>web Scabing</h5></CDBFooterLink>
                <CDBFooterLink  href="/"><h5 className='text-white'>App development</h5></CDBFooterLink>
                <CDBFooterLink  href="/"><h5 className='text-white'>website development</h5></CDBFooterLink>
                <CDBFooterLink  href="/"><h5 className='text-white'>Bot development</h5></CDBFooterLink>
              </CDBBox>
            </CDBBox>
          </CDBBox>
          <small className="text-center mt-5 text-white">&copy; Apnito, 2022. All rights reserved.</small>
        </CDBBox>
      </CDBFooter>
    );
};

export default Footer;