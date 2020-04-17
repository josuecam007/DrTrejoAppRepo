import React from 'react';
import '../assets/styles/components/Footer.scss';
import WhatsappIcon from '../assets/static/footer/Icon awesome-whatsapp@2x.png';
import facebookIcon from '../assets/static/footer/Icon awesome-facebook@2x.png';
import twitterIcon from '../assets/static/footer/Icon awesome-twitter@2x.png';
import instagramIcon from '../assets/static/footer/Icon awesome-instagram@2x.png';
import youtubeIcon from '../assets/static/footer/Icon awesome-youtube@2x.png';
import emailIcon from '../assets/static/footer/Icon material-email@2x.png';

const Footer = () => {
  return (
    <div className='footer-section'>
      <div className='footer-container'>
        <div>
          <span>Contacto</span>
          <br />
          <span>Dr. José Trejo Belmonte</span>
          <br />
          <img
            src={WhatsappIcon}
            alt='whatsapp_icon'
            className='facebook-icon'
          />
          <span>55 39 82 21 24</span>
          <br />
          <img src={emailIcon} alt='email_icon' className='facebook-icon' />
          DR_JOSE_TREJO_BELMONTE@outlook.com
          <div>
            <img
              src={facebookIcon}
              alt='facebook_icon'
              className='facebook-icon'
            />
            <img
              src={twitterIcon}
              alt='twitter_icon'
              className='twitter-icon'
            />
            <img
              src={instagramIcon}
              alt='instagram_icon'
              className='instagram-icon'
            />
            <img
              src={youtubeIcon}
              alt='youtube_icon'
              className='youtube-icon'
            />
          </div>
        </div>
        <div>
          <span>Ubicación</span>
          <br />
          <br />
          <span>KINEMEDICSPORT Área 360: Calle Andrés Terán 1413 Lomas Del Country 44610 Guadalajara, Jalisco</span>
          <br />
          <br />
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d933.0665596134086!2d-103.3656382908795!3d20.69941063771799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ae10b2c0a5d9%3A0xdabe68b814c0d211!2sKinemedicsport%20Area%20360!5e0!3m2!1ses-419!2smx!4v1587142263171!5m2!1ses-419!2smx'
            frameborder='0'
            className='footer-map'
            allowfullscreen='true'
            aria-hidden='false'
            tabindex='0'
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Footer;