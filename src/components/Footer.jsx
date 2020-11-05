import React from 'react';
import '../assets/styles/components/Footer.scss';
import WhatsappIcon from '../assets/static/footer/Icon awesome-whatsapp@2x.png';
import facebookIcon from '../assets/static/footer/Icon awesome-facebook@2x.png';
import twitterIcon from '../assets/static/footer/Icon awesome-twitter@2x.png';
import instagramIcon from '../assets/static/footer/Icon awesome-instagram@2x.png';
import youtubeIcon from '../assets/static/footer/Icon awesome-youtube@2x.png';
import emailIcon from '../assets/static/footer/Icon material-email@2x.png';
import axxa from '../assets/static/footer/seguros/axxa.png';
import banorte from '../assets/static/footer/seguros/Banorte.png';
import gnp from '../assets/static/footer/seguros/GNP.png';
import latino from '../assets/static/footer/seguros/latino.png';
import qualitas from '../assets/static/footer/seguros/qualitas.png';
import thona from '../assets/static/footer/seguros/Thona.png';

const Footer = () => {
  return (
    <div className='footer-section'>
      <div className='footer-container'>
        <div>
          <span>Contacto</span>
          <br />
          <span>Dr. José Trejo Belmonte</span>
          <br />
          <div>
            <img
              src={WhatsappIcon}
              alt='whatsapp_icon'
              className='whatsapp-icon'
            />
            <span>
              <a href='https://wa.me/5215539822124' target='_blank'>
                55 39 82 21 24
              </a>
            </span>
          </div>
          <br />
          <div>
            <img src={emailIcon} alt='email_icon' className='email-icon' />
            <span>
              <a href='mailto:DR_JOSE_TREJO_BELMONTE@outlook.com'>
                DR_JOSE_TREJO_BELMONTE@outlook.com
              </a>
            </span>
          </div>
          <br />
          {/* <span>Citas: martes y jueves 15:30hrs. a 20:30hrs.</span> */}
          <br />
          <div>
            <a href='https://www.facebook.com/jose.trejo.3382' target='_blank'>
              <img
                src={facebookIcon}
                alt='facebook_icon'
                className='facebook-icon'
              />
            </a>
            <a href='https://www.facebook.com/jose.trejo.3382' target='_blank'>
              <img
                src={twitterIcon}
                alt='twitter_icon'
                className='twitter-icon'
              />
            </a>
            <a href='https://www.facebook.com/jose.trejo.3382' target='_blank'>
              <img
                src={instagramIcon}
                alt='instagram_icon'
                className='instagram-icon'
              />
            </a>
            <a href='https://www.facebook.com/jose.trejo.3382' target='_blank'>
              <img
                src={youtubeIcon}
                alt='youtube_icon'
                className='youtube-icon'
              />
            </a>
          </div>
          <span>Seguros</span>
          <div>
            <img
              src={axxa}
              alt='youtube_icon'
              className='seguros'
            />
            <img
              src={banorte}
              alt='youtube_icon'
              className='seguros'
            />
            <img
              src={gnp}
              alt='youtube_icon'
              className='seguros'
            />
          </div>
          <div>
            <img
              src={latino}
              alt='youtube_icon'
              className='seguros'
            />
            <img
              src={qualitas}
              alt='youtube_icon'
              className='seguros'
            />
            <img
              src={thona}
              alt='youtube_icon'
              className='seguros'
            />
          </div>
        </div>
        <div>
          <span>Ubicación</span>
          <br />
          <br />
          <span>KINEMEDICSPORT Área 360: Calle Andrés Terán 1413</span>
          <br />
          <span>Lomas Del Country 44610 Guadalajara,Jalisco</span>
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
        <div>
          <a href="http://anthonycamachodev.com" target='_blank'>© 2020 by anthony camacho dev</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
