import { BarChart3, TrendingUp, Users, Download } from 'lucide-react';
import './CollegeStats.css';

const CollegeStats = () => {
  return (
    <div className="dashboard-page stats-page">
      <div className="page-header flex-between">
        <div>
          <h1>Аналитика и Статистика</h1>
          <p>Показатели эффективности образовательного процесса колледжа.</p>
        </div>
        <button className="btn-secondary" style={{padding: '10px 20px', borderRadius: '8px'}}>
          <Download size={18} /> Скачать отчет
        </button>
      </div>

      <div className="stats-grid fade-in-up">
        {/* Main Chart Card placeholder */}
        <div className="stat-card main-chart">
          <div className="s-card-header">
            <h3>Трудоустройство выпускников</h3>
            <select className="s-select"><option>2025-2026 уч. год</option></select>
          </div>
          
          <div className="mock-chart">
            <div className="c-bar">
              <div className="c-fill" style={{height: '85%'}}></div>
              <span>IT/Связь</span>
            </div>
            <div className="c-bar">
              <div className="c-fill" style={{height: '60%'}}></div>
              <span>Экономика</span>
            </div>
            <div className="c-bar">
              <div className="c-fill" style={{height: '92%'}}></div>
              <span>Медицина</span>
            </div>
            <div className="c-bar">
              <div className="c-fill" style={{height: '45%'}}></div>
              <span>Аграрный</span>
            </div>
          </div>
        </div>

        {/* Small metric cards */}
        <div className="stat-card">
          <div className="s-metric-icon" style={{background: '#dcfce7', color: '#16a34a'}}><TrendingUp size={24}/></div>
          <h4>Средний балл ЕНТ</h4>
          <div className="s-metric-val">82.4</div>
          <span className="trend positive">+4.2 с прошлого года</span>
        </div>

        <div className="stat-card">
          <div className="s-metric-icon" style={{background: '#fee2e2', color: '#ef4444'}}><Users size={24}/></div>
          <h4>Отсев студентов</h4>
          <div className="s-metric-val">2.1%</div>
          <span className="trend negative">-0.8% улучшение</span>
        </div>

        <div className="stat-card full-width">
          <div className="s-card-header">
            <h3>Рейтинг специальностей по конкурсу</h3>
          </div>
          <div className="s-ranking-list">
            <div className="s-rank-item">
              <span className="rank-num">1</span>
              <span className="rank-name">Программная инженерия</span>
              <span className="rank-score">12 чел/место</span>
            </div>
            <div className="s-rank-item">
              <span className="rank-num">2</span>
              <span className="rank-name">Кибербезопасность</span>
              <span className="rank-score">9 чел/место</span>
            </div>
            <div className="s-rank-item">
              <span className="rank-num">3</span>
              <span className="rank-name">Учет и аудит</span>
              <span className="rank-score">4 чел/место</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeStats;
