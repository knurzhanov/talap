import { LayoutGrid, Globe, Shield, Terminal, Zap, Users } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects-ecosystem">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Экосистема проектов</h2>
          <p className="section-subtitle">Единая информационная среда, объединяющая ключевые инициативы и платформы.</p>
        </div>

        <div className="bento-grid">
          {/* Main Core Project */}
          <div className="bento-card core-project">
            <div className="bento-icon"><Globe size={28} /></div>
            <h3>Единая платформа ТиПО</h3>
            <p>Ядро экосистемы. Централизованное управление учебным процессом, интеграция данных всех колледжей и аналитика в реальном времени.</p>
            <div className="bento-tags">
              <span>Big Data</span>
              <span>Мониторинг</span>
            </div>
          </div>

          <div className="bento-card">
            <div className="bento-icon"><Shield size={24} /></div>
            <h3>Реестр ОП</h3>
            <p>Единая база образовательных программ с проверкой актуальности.</p>
          </div>

          <div className="bento-card">
            <div className="bento-icon"><Users size={24} /></div>
            <h3>Развитие педагогов</h3>
            <p>Карта компетенций и аттестации преподавательского состава.</p>
          </div>

          <div className="bento-card wide-project">
            <div className="bento-icon"><Zap size={24} /></div>
            <div className="bento-content-row">
              <div>
                <h3>WorldSkills Kazakhstan</h3>
                <p>Национальный чемпионат профессионального мастерства. Интеграция результатов и портфолио студентов.</p>
              </div>
              <button className="bento-btn">Перейти</button>
            </div>
          </div>

          <div className="bento-card">
            <div className="bento-icon"><Terminal size={24} /></div>
            <h3>Атлас новых профессий</h3>
            <p>Прогнозирование трендов рынка труда.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
