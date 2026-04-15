import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Header.css';
import Logo from '../Logo/Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-content">
        
        <div className="header-left">
          <button 
            className="menu-btn" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            Меню
          </button>
        </div>

        <Link to="/" className="header-logo">
          <div className="logo-icon-svg" style={{width: '28px', height: '28px', marginRight: '12px'}}>
            <Logo />
          </div>
          <span className="logo-text">TALAP</span>
        </Link>
        
        <div className="header-right">
          <Link to="/auth" className="auth-btn">Авторизация</Link>
        </div>

      </div>

      {/* Dropdown Menu */}
      <div className={`nav-dropdown ${isMenuOpen ? 'open' : ''}`}>
        <div className="container">
          <div className="nav-grid">
            <div className="nav-column">
              <h4>Платформы</h4>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>Реестр ОП</Link>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>Развитие педагогов</Link>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>Атлас профессий</Link>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>WorldSkills</Link>
            </div>
            <div className="nav-column">
              <h4>Интеграции</h4>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>Шлюз НОБД</Link>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>API Документация</Link>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>Статистика</Link>
            </div>
            <div className="nav-column">
              <h4>О нас</h4>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>Контакты</Link>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>Новости ТиПО</Link>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>Служба поддержки</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
