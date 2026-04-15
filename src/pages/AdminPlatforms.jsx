import { useState } from 'react';
import { Plus, Link as LinkIcon, Database, CheckCircle2, MoreVertical } from 'lucide-react';
import './AdminPlatforms.css';

const AdminPlatforms = () => {
  const [platforms] = useState([
    { id: 1, name: 'Конструктор образовательных программ', url: 'https://constructor.talap.kz', api: '/api/v1/sync/constructor', status: 'active' },
    { id: 2, name: 'Реестр образовательных программ', url: 'https://registry.talap.kz', api: '/api/v1/sync/registry', status: 'active' },
    { id: 3, name: 'Платформа профориентации', url: 'https://career.talap.kz', api: '/api/v1/sync/career', status: 'pending' },
  ]);

  return (
    <div className="dashboard-page platforms-admin-page">
      <div className="page-header flex-between">
        <div>
          <h1>Управление платформами (MDM)</h1>
          <p>Настройка REST API эндпоинтов и реестр дочерних подсистем экосистемы.</p>
        </div>
        <button className="btn-primary" style={{padding: '10px 20px', borderRadius: '8px'}}>
          <Plus size={18} /> Добавить платформу
        </button>
      </div>

      <div className="platforms-grid fade-in-up">
        {platforms.map(p => (
          <div key={p.id} className="platform-api-card">
            <div className="card-top">
              <div className="platform-icon-wrap">
                <Database size={24} className="text-blue" />
              </div>
              <button className="icon-btn-small"><MoreVertical size={18} /></button>
            </div>
            
            <h3 className="platform-name">{p.name}</h3>
            
            <div className="api-details">
              <div className="detail-row">
                <span className="label">Web URL:</span>
                <a href={p.url} className="value link"><LinkIcon size={12}/> {p.url}</a>
              </div>
              <div className="detail-row">
                <span className="label">REST API:</span>
                <span className="value code">{p.api}</span>
              </div>
            </div>

            <div className="card-footer">
              {p.status === 'active' ? (
                <span className="status-badge success"><CheckCircle2 size={14}/> Активна (Синхронизирована)</span>
              ) : (
                <span className="status-badge warning">Ожидает подключения</span>
              )}
              <button className="sync-btn">Синхронизировать</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPlatforms;
