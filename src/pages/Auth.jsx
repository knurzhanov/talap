import { ShieldCheck, ArrowLeft, Key } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Auth.css';
import Logo from '../components/Logo/Logo';

const Auth = () => {
  return (
    <div className="auth-page">
      <div className="auth-split left-panel">
        <Link to="/" className="back-link">
          <ArrowLeft size={16} /> На главную
        </Link>
        <div className="auth-branding" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div className="logo-icon-svg" style={{ width: '64px', height: '64px' }}>
            <Logo />
          </div>
          <h2>Единая платформа ТиПО</h2>
          <p>Единая точка доступа ко всем государственным и образовательным платформам.</p>
        </div>

        <div className="auth-illustration">
          {/* Decorative mesh/blur on the left */}
          <div className="auth-blob a1"></div>
          <div className="auth-blob a2"></div>
          <div className="auth-glass-panel">
            <ShieldCheck size={40} className="shield-icon" />
            <p><strong>Защищенное соединение</strong><br />Все данные зашифрованы и защищены согласно стандарту ГОСТ РК.</p>
          </div>
        </div>
      </div>

      <div className="auth-split right-panel">
        <div className="auth-form-container fade-in-up">
          <div className="form-header">
            <h3>Вход в систему</h3>
            <p>Авторизуйтесь для доступа к рабочему каталогу</p>
          </div>

          <button className="sso-btn" disabled style={{ opacity: 0.6, cursor: 'not-allowed', background: '#f1f5f9', color: '#64748b' }}>
            <Key size={18} />
            <span>Единый вход SSO (В разработке)</span>
          </button>

          <div className="auth-divider">
            <span>Или по логину</span>
          </div>

          <form className="auth-form">
            <div className="input-group">
              <label>ИИН или Email</label>
              <input type="text" placeholder="Введите ваш логин" />
            </div>

            <div className="input-group">
              <div className="label-row">
                <label>Пароль</label>
                <a href="#" className="forgot-link">Забыли пароль?</a>
              </div>
              <input type="password" placeholder="••••••••" />
            </div>

            <Link to="/college" className="submit-btn" style={{ textAlign: 'center', display: 'block' }}>
              Войти в систему
            </Link>
          </form>

          <p className="auth-footer-text">
            Служба поддержки: <a href="mailto:support@talap.edu.kz">support@talap.edu.kz</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
