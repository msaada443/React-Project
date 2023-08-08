import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import {
  FooterHeading,
  FooterBox,
  FooterLinks,
  FooterContainer,
  FooterInfo,
  FooterBoxData,
  FooterText,
  FooterSocialItem,
} from "../index";

const Footer = () => {
  const boxesFooter = FooterBoxData.map((info) => (
    <FooterInfo key={info.id} srcImg={info.srcImg} content={info.content} />
  ));
  return (
    <footer>
      <div className="container">
        <FooterHeading text="Ready to get started?" btnContent="Get started" />
        <div className="footer-container">
          <FooterBox
            text="Subscribe to our newsletter"
            input="email"
            placeHolder="Email address"
          />
          <FooterContainer container="links1" content="f-links">
            <FooterLinks navItem="Home" />
            <FooterLinks navItem="About Us" />
            <FooterLinks navItem="Services" />
            <FooterLinks navItem="Latest News" />
          </FooterContainer>

          <FooterContainer container="links2" content="s-links">
            <FooterLinks navItem="Help" />
            <FooterLinks navItem="FAQs" />
            <FooterLinks navItem="Contact Us" />
          </FooterContainer>
          <div className="footer-box">{boxesFooter}</div>
          <FooterText text1="Terms & Conditions" text2="Privacy Policy" />
          <div className="copyright">
            <p> &copy; 2022 All rights reserved. techreif</p>
          </div>
          <ul className="social">
            <FooterSocialItem iconName="facebook" icon={faFacebookF} />
            <FooterSocialItem iconName="twitter" icon={faTwitter} />
            <FooterSocialItem iconName="instagram" icon={faInstagram} />
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
