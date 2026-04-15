import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';
import Logo from '../Logo/Logo';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">

        <div className="footer-top">
          <div className="footer-links">
            <a href="#">О компании</a>
            <a href="#">Новости</a>
            <a href="#">Платформы</a>
            <a href="#">Контакты</a>
          </div>
          <div className="footer-socials">
            <a href="#" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
            </a>
            <a href="#" aria-label="YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 7.1C2.6 5.9 3.5 5 4.7 4.9 7 4.5 12 4.5 12 4.5s5 0 7.3.4c1.2.1 2.1 1 2.2 2.2.4 2.4.4 4.9.4 4.9s0 2.5-.4 4.9c-.1 1.2-1 2.1-2.2 2.2-2.3.4-7.3.4-7.3.4s-5 0-7.3-.4c-1.2-.1-2.1-1-2.2-2.2-.4-2.4-.4-4.9-.4-4.9s0-2.5.4-4.9z" /><path d="m10 15 5-3-5-3z" /></svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            </a>
          </div>
        </div>

        <div className="footer-main">
          <div className="footer-brand">
            <div className="logo-icon-svg" style={{ width: '32px', height: '32px', marginRight: '16px' }}>
              <Logo />
            </div>
            <span className="logo-text">TALAP</span>
          </div>

          <div className="footer-contacts">
            <div className="contact-item">
              <Mail size={18} />
              <div>
                <a href="mailto:info@talap.edu.kz">info@talap.edu.kz</a>
                <a href="mailto:help@talap.edu.kz">help@talap.edu.kz</a>
              </div>
            </div>
            <div className="contact-item">
              <Phone size={18} />
              <a href="tel:+77172797888">+7 (7172) 79 78 88</a>
            </div>
            <div className="contact-item">
              <MapPin size={18} />
              <address>
                010000, Республика Казахстан<br />
                Астана қаласы, Мәңгілік Ел 34, 7 қабат
              </address>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            © 2026. НАО «Talap». Все права защищены
          </div>
          <div className="legal-links">
            <a href="#">Политика конфиденциальности</a>
            <a href="#">Политика в отношении файлов cookie</a>
            <a href="#">Условия эксплуатации</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
