import { Server, Activity, ShieldAlert, Users, Database } from 'lucide-react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className="dashboard-page admin-page">
      <div className="page-header">
        <h1>Сводка системы (Admin)</h1>
        <p>Глобальный мониторинг экосистемы ТиПО</p>
      </div>

      <div className="admin-status-bar fade-in-up">
        <div className="status-indicator">
          <div className="ping pulse"></div>
          <span>Система работает в штатном режиме</span>
        </div>
        <div className="server-load">
          <Server size={16} /> Нагрузка: 24%
        </div>
      </div>

      <div className="dash-metrics fade-in-up" style={{animationDelay: '0.1s'}}>
        <div className="metric-card">
          <div className="metric-icon blue"><Building /></div>
          <div className="metric-info">
            <span className="metric-label">Всего колледжей</span>
            <span className="metric-value">648</span>
          </div>
        </div>
        <div className="metric-card">
          <div className="metric-icon purple"><Users /></div>
          <div className="metric-info">
            <span className="metric-label">Активных сессий</span>
            <span className="metric-value">12,405</span>
          </div>
        </div>
        <div className="metric-card">
          <div className="metric-icon orange"><ShieldAlert /></div>
          <div className="metric-info">
            <span className="metric-label">Требуют модерации</span>
            <span className="metric-value">34 <small>программы</small></span>
          </div>
        </div>
        <div className="metric-card">
          <div className="metric-icon green"><Database /></div>
          <div className="metric-info">
            <span className="metric-label">Транзакции НБД</span>
            <span className="metric-value">1.2M <small>/ день</small></span>
          </div>
        </div>
      </div>

      <div className="dash-bento fade-in-up" style={{animationDelay: '0.2s'}}>
        <div className="dash-card col-span-2">
          <h3 className="card-title">Очередь модерации ОП</h3>
          <div className="table-responsive">
            <table className="dash-table">
              <thead>
                <tr>
                  <th>Шифр</th>
                  <th>Колледж</th>
                  <th>Дата подачи</th>
                  <th>Действие</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1015000</td>
                  <td>Алматинский Технологический</td>
                  <td>16.03.2026</td>
                  <td><button className="action-btn">Проверить</button></td>
                </tr>
                <tr>
                  <td>0422000</td>
                  <td>Astana IT College</td>
                  <td>15.03.2026</td>
                  <td><button className="action-btn">Проверить</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="dash-card col-span-1">
          <h3 className="card-title">Системные логи</h3>
          <div className="log-list">
            <div className="log-item">
              <span className="log-time">10:42:01</span>
              <span className="log-msg success">Синхронизация завершена</span>
            </div>
            <div className="log-item">
              <span className="log-time">10:15:33</span>
              <span className="log-msg warning">Задержка API Gateway (2000ms)</span>
            </div>
            <div className="log-item">
              <span className="log-time">09:00:00</span>
              <span className="log-msg info">Резервное копирование</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Polyfill internal icon to save import space
const Building = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>
)

export default AdminDashboard;
