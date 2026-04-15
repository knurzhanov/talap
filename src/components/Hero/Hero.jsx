import { ArrowRight, ChevronRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-mesh-bg">
        <div className="mesh-blob b1"></div>
        <div className="mesh-blob b2"></div>
      </div>

      <div className="container">
        <div className="hero-content fade-in-up">


          <h1 className="hero-title">
            Интеллектуальная экосистема<br />для управления <span>ТиПО</span>
          </h1>

          <p className="hero-subtitle">
            Прозрачная аналитика, реестр программ и рекрутинг на единой цифровой платформе, объединяющей все колледжи страны.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">
              Каталог сервисов <ArrowRight size={18} />
            </button>
            <button className="btn-secondary">
              Узнать больше
            </button>
          </div>

          <div className="hero-stats-strip">
            <div className="strip-item">
              <strong>15+</strong> Сервисов
            </div>

            <div className="strip-separator"></div>
            <div className="strip-item">
              <strong>24/7</strong> Доступность
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
