import { Link } from 'react-router-dom';

import Image from './Image';
import face from './../../assets/social/facebook-white.svg';
import twitter from './../../assets/social/twitter-white.svg';
import instagram from './../../assets/social/instagram-white.svg';
import appStore from './../../assets/store/app-store.svg';
import playStore from './../../assets/store/play-store.svg';
import windowsStore from './../../assets/store/windows-store.svg';

const Footer = () => {
  return (
    <>
      <footer>
        <ul>
          <li className="li1">
            <Link to="">Home</Link>
          </li>
          <li className="li2">
            <Link to="/termsAndConditions">Terms and Conditions</Link>
          </li>
          <li className="li3">
            <Link to="/privacyPolicy">Privacy Policy</Link>
          </li>
          <li className="li4">
            <Link to="/collectionStatement">Collection Statement</Link>
          </li>
          <li className="li5">
            <Link to="/help">Help</Link>
          </li>
          <li className="li6">
            <Link to="/manageAccount">Manage Account</Link>
          </li>
        </ul>
        <p>Copyright © 2016 DEMO Streaming All Rights Reserved.</p>
        <div>
          <ul className="logos">
            <li>
              <a href="#">
                <Image src={face} alt="logo facebook" />
              </a>
              <a href="#">
                <Image src={twitter} alt="logo twitter" />
              </a>
              <a href="#">
                <Image src={instagram} alt="logo instagram" />
              </a>
            </li>
          </ul>
          <ul className="store">
            <li>
              <a href="#" className="appStore">
                <Image src={appStore} alt="app Store" />
              </a>
            </li>
            <li>
              <a href="#" className="playStore">
                <Image src={playStore} alt="play Store" />
              </a>
            </li>
            <li>
              <a href="#" className="windowStore">
                <Image src={windowsStore} alt="windows Store" width="135px" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
