import { ArrowUpRight, BarChart3, Users, BookOpen, Database, Target, Map, LayoutTemplate, Briefcase, GraduationCap } from 'lucide-react';
import './Platforms.css';

const Platforms = () => {
  return (
    <section className="platforms">
      <div className="container">
        <div className="platforms-header">
          <h2 className="section-title">Каталог платформ</h2>
          <p className="platforms-subtitle">Единый набор инструментов для полного контроля академических и административных процессов в системе ТиПО.</p>
        </div>

        <div className="platforms-bento">
          
          {/* Main feature - Large Span */}
          <div className="p-card p-main fade-in-up">
            <div className="p-icon-circle blue"><LayoutTemplate size={24} /></div>
            <div className="p-content">
              <h3>Конструктор образовательных программ</h3>
              <p>Централизованный инструмент для разработки, проектирования и согласования новых учебных программ.</p>
            </div>
            <div className="p-hover-action">
              <ArrowUpRight size={24} />
            </div>
          </div>

          {/* Stat-focused card */}
          <div className="p-card p-stat fade-in-up" style={{animationDelay: '0.1s'}}>
            <div className="p-stat-value">Топ<span>#1</span></div>
            <div className="p-content">
              <h3>Система рейтинга и ранжирования колледжей</h3>
              <p>Оценка эффективности</p>
            </div>
            <ArrowUpRight className="p-link-icon" size={20} />
          </div>

          {/* Standard cards */}
          <div className="p-card fade-in-up" style={{animationDelay: '0.2s'}}>
            <div className="p-icon-circle green"><Database size={24} /></div>
            <div className="p-content">
              <h3>Реестр образовательных программ</h3>
              <p>Единая республиканская база</p>
            </div>
          </div>

          <div className="p-card fade-in-up" style={{animationDelay: '0.3s'}}>
            <div className="p-icon-circle purple"><GraduationCap size={24} /></div>
            <div className="p-content">
              <h3>Система дистанционного обучения педагогов</h3>
              <p>Повышение квалификации</p>
            </div>
          </div>

          <div className="p-card fade-in-up" style={{animationDelay: '0.4s'}}>
            <div className="p-icon-circle orange"><Map size={24} /></div>
            <div className="p-content">
              <h3>Карта развития педагогов</h3>
              <p>Траектории роста преподавателей</p>
            </div>
          </div>

          <div className="p-card p-wide fade-in-up" style={{animationDelay: '0.5s'}}>
            <div className="p-flex-row">
              <div className="p-icon-circle slate"><BookOpen size={24} /></div>
              <div className="p-content">
                <h3>Единая система методической работы</h3>
                <p>База знаний, методички и нормативные документы для колледжей.</p>
              </div>
              <button className="p-button">Открыть</button>
            </div>
          </div>

          <div className="p-card fade-in-up" style={{animationDelay: '0.6s'}}>
            <div className="p-icon-circle blue"><Users size={24} /></div>
            <div className="p-content">
              <h3>Платформа открытого обмена и инноваций</h3>
              <p>Социально-профессиональное комьюнити</p>
            </div>
          </div>

          <div className="p-card fade-in-up" style={{animationDelay: '0.7s'}}>
            <div className="p-icon-circle target-color"><Target size={24} /></div>
            <div className="p-content">
              <h3>Платформа профориентации и рекрутинга</h3>
              <p>Навигатор студента и абитуриента</p>
            </div>
          </div>

          <div className="p-card fade-in-up" style={{animationDelay: '0.8s'}}>
            <div className="p-icon-circle slate"><Briefcase size={24} /></div>
            <div className="p-content">
              <h3>Информационная карта организации ТиПО</h3>
              <p>Паспорт колледжа и материальная база</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Platforms;
