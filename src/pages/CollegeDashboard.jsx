import { FileText, Users, CheckCircle, TrendingUp } from 'lucide-react';
import './CollegeDashboard.css';

const CollegeDashboard = () => {
  return (
    <div className="dashboard-page">
      <div className="page-header">
        <h1>Обзор колледжа</h1>
        <p>Сводка по учебному процессу и статусу программ</p>
      </div>

      <div className="dash-metrics fade-in-up">
        <div className="metric-card">
          <div className="metric-icon blue"><Users size={20} /></div>
          <div className="metric-info">
            <span className="metric-label">Студентов</span>
            <span className="metric-value">1,240</span>
          </div>
        </div>
        <div className="metric-card">
          <div className="metric-icon green"><FileText size={20} /></div>
          <div className="metric-info">
            <span className="metric-label">Утвержденных ОП</span>
            <span className="metric-value">18</span>
          </div>
        </div>
        <div className="metric-card">
          <div className="metric-icon orange"><CheckCircle size={20} /></div>
          <div className="metric-info">
            <span className="metric-label">Преподавателей</span>
            <span className="metric-value">142</span>
          </div>
        </div>
        <div className="metric-card">
          <div className="metric-icon purple"><TrendingUp size={20} /></div>
          <div className="metric-info">
            <span className="metric-label">Общий рейтинг</span>
            <span className="metric-value">8.4<small>/10</small></span>
          </div>
        </div>
      </div>

      <div className="dash-bento fade-in-up"   style={{animationDelay: '0.1s'}}>
        <div className="dash-card col-span-2">
          <h3 className="card-title">Статус образовательных программ</h3>
          <div className="table-responsive">
            <table className="dash-table">
              <thead>
                <tr>
                  <th>Шифр</th>
                  <th>Наименование ОП</th>
                  <th>Академ. часы</th>
                  <th>Статус</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0611000</td>
                  <td>Информационные системы</td>
                  <td>3200</td>
                  <td><span className="status-badge success">Утверждено</span></td>
                </tr>
                <tr>
                  <td>0714000</td>
                  <td>Электрооборудование</td>
                  <td>2800</td>
                  <td><span className="status-badge warning">На модерации</span></td>
                </tr>
                <tr>
                  <td>0411000</td>
                  <td>Учет и аудит</td>
                  <td>2400</td>
                  <td><span className="status-badge success">Утверждено</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="dash-card col-span-1 rating-widget">
          <div className="widget-header">
            <h3 className="card-title" style={{marginBottom: '0'}}>Позиция в Лиге</h3>
            <span className="trend-badge positive">+2 позиции</span>
          </div>
          
          <div className="league-display">
            <div className="league-medal">🏅</div>
            <div className="league-info">
              <h4>Золотая Лига</h4>
              <p>Топ-10% колледжей РК</p>
            </div>
          </div>

          <div className="rank-stats">
            <div className="r-stat">
              <span className="r-label">Национальный рейтинг</span>
              <span className="r-val">14 <small>из 648</small></span>
            </div>
            <div className="r-stat">
              <span className="r-label">Балл (KPI)</span>
              <span className="r-val">89.4 <small>/ 100</small></span>
            </div>
          </div>
        </div>

        <div className="dash-card col-span-3">
          <h3 className="card-title">Системные Уведомления</h3>
          <div className="notification-list" style={{display: 'flex', gap: '24px', flexDirection: 'row'}}>
            <div className="notif-item" style={{border: 'none', borderLeft: '3px solid #3b82f6', paddingLeft: '16px', background: '#f8fafc', padding: '16px', borderRadius: '8px', flex: 1}}>
              <div className="notif-text">
                <strong style={{color: '#3b82f6'}}>Минпросвещения РК</strong>
                <span>Опубликован новый приказ по обновлению программы "Информационные системы"</span>
              </div>
            </div>
            <div className="notif-item" style={{border: 'none', borderLeft: '3px solid #f97316', background: '#f8fafc', padding: '16px', borderRadius: '8px', flex: 1}}>
              <div className="notif-text">
                <strong style={{color: '#f97316'}}>Система Интеграции</strong>
                <span>Авто-синхронизация преподавателей с НОБД прошла успешно.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeDashboard;
