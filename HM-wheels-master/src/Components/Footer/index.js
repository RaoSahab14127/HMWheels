import fblogo from "../../images/facebook logo.png";
import instalogo from "../../images/insta logo.png";
import twiterlogo from "../../images/twiter logo.png";
import youtubelogo from "../../images/youtube logo.png";
import googleplaylogo from "../../images/downloading images.svg";
import appstorelogo from "../../images/appstore downloading images.svg";
import "./footer.css";
function Footer() {
  return (
    <div className="footer-all-material">
      <div className="main-footer">
        <div>
          <h3 className="footer-headings">Sell on HM wheels</h3>
          <p>Sell your car</p>
        </div>
        <div>
          <h3 className="footer-headings">Follow Us</h3>
          <div className="display-logos">
            <img className="footer-logos" src={fblogo} alt="fb logo" />
            <img className="footer-logos" src={instalogo} alt="insta logo" />
            <img className="footer-logos" src={twiterlogo} alt="twiter logo" />
            <img
              className="footer-logos"
              src={youtubelogo}
              alt="youtube logo"
            />
          </div>
        </div>
        <div>
          <h3 className="footer-headings">Download Mobile Apps</h3>
          <img
            className="downloads-logo"
            src={googleplaylogo}
            alt="googleplay logo"
          />
          <img
            className="downloads-logo"
            src={appstorelogo}
            alt="apstore logo"
          />
        </div>
      </div>
      <hr className="footer-line" />
      <div className="footer-bottom-side">
        <p className="footer-bottom-para">
          Copyright © 2022 - 2023 HMWheels (Pvt) Ltd. - All Rights Reserved.
        </p>
        <p className="footer-bottom-para">Terms of Service | Privacy Policy</p>
        <p className="footer-bottom-para">
          Reproduction of material from any HMWheels.com pages without
          permission is strictly prohibited.
        </p>
      </div>
    </div>
  );
}
export default Footer;
