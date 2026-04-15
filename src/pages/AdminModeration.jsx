import { useState, useMemo } from 'react';
import { Filter, Search, CheckCircle, XCircle, Eye, X } from 'lucide-react';
import './AdminModeration.css';

const initialRequests = [
  { id: 'REQ-8902', org: 'Алматинский политехнический колледж', bin: '990140001234', type: 'Обновление профиля', typeCat: 'profile', date: '16.03.2026' },
  { id: 'REQ-8901', org: 'Astana IT College', bin: '100240009876', type: 'Специальность (ОП)', typeCat: 'program', date: '15.03.2026' },
  { id: 'REQ-8898', org: 'Медицинский колледж г. Шымкент', bin: '880240001111', type: 'Преподаватель (12 шт)', typeCat: 'teacher', date: '14.03.2026' }
];

const AdminModeration = () => {
  const [requests, setRequests] = useState(initialRequests);
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState('All');
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const filteredRequests = useMemo(() => {
    return requests.filter(req => {
      const matchSearch = req.org.toLowerCase().includes(search.toLowerCase()) || req.id.includes(search) || req.bin.includes(search);
      const matchType = filterType === 'All' || req.typeCat === filterType;
      return matchSearch && matchType;
    });
  }, [requests, search, filterType]);

  const handleAction = (request, action) => {
    if (action === 'view') {
      setModalContent(`Полные сведения по заявке: ${request.id} (${request.type}) от организации ${request.org}. В разработке.`);
      setIsModalOpen(true);
    } else if (action === 'approve') {
      setRequests(requests.filter(r => r.id !== request.id));
      setModalContent(`Заявка ${request.id} успешно одобрена. Данные синхронизированы c MDM.`);
      setIsModalOpen(true);
    } else if (action === 'reject') {
      setRequests(requests.filter(r => r.id !== request.id));
      setModalContent(`Заявка ${request.id} отклонена. Уведомление отправлено колледжу.`);
      setIsModalOpen(true);
    }
  };

  return (
    <div className="dashboard-page moderation-page relative">
      <div className="page-header flex-between">
        <div>
          <h1>Модерация профилей и программ</h1>
          <p>Проверка данных перед публикацией в глобальном реестре (MDM).</p>
        </div>
        <div className="header-stats">
          <div className="h-stat-badge">Ожидают: <strong>{requests.length}</strong></div>
        </div>
      </div>

      <div className="moderation-controls fade-in-up">
        <div className="search-bar">
          <Search size={18} className="text-muted" />
          <input 
            type="text" 
            placeholder="Поиск по БИН, названию или номеру заявки..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="filters-group">
          <select className="ui-select" value={filterType} onChange={(e) => setFilterType(e.target.value)}>
            <option value="All">Все типы заявок</option>
            <option value="profile">Паспорт Колледжа</option>
            <option value="program">Новая ОП</option>
            <option value="teacher">Преподаватели</option>
          </select>
          <select className="ui-select"><option>Сначала новые</option></select>
        </div>
      </div>

      <div className="moderation-board fade-in-up" style={{animationDelay: '0.1s'}}>
        <div className="table-responsive">
          <table className="dash-table mod-table">
            <thead>
              <tr>
                <th>ID Заявки</th>
                <th>Организация</th>
                <th>Тип обновления</th>
                <th>Дата подачи</th>
                <th style={{textAlign: 'right'}}>Действия</th>
              </tr>
            </thead>
            <tbody>
              {filteredRequests.map(req => (
                <tr key={req.id}>
                  <td><span className="req-id">{req.id}</span></td>
                  <td>
                    <strong>{req.org}</strong>
                    <span className="sub-text">БИН: {req.bin}</span>
                  </td>
                  <td>
                    <span className={`cat-badge ${req.typeCat === 'program' ? 'blue' : req.typeCat === 'teacher' ? 'purple' : ''}`}>
                      {req.type}
                    </span>
                  </td>
                  <td>{req.date}</td>
                  <td className="actions-cell">
                    <button className="icon-btn-small" title="Просмотреть" onClick={() => handleAction(req, 'view')}><Eye size={16}/></button>
                    <button className="icon-btn-small text-green" title="Одобрить" onClick={() => handleAction(req, 'approve')}><CheckCircle size={16}/></button>
                    <button className="icon-btn-small text-red" title="Отклонить" onClick={() => handleAction(req, 'reject')}><XCircle size={16}/></button>
                  </td>
                </tr>
              ))}
              {filteredRequests.length === 0 && (
                <tr><td colSpan="5" className="text-center" style={{padding: '40px', color: '#94a3b8'}}>Список заявок пуст</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-card fade-in" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Действие модератора</h3>
              <button className="icon-btn-small" onClick={() => setIsModalOpen(false)}><X size={18}/></button>
            </div>
            <div className="modal-body" style={{padding: '24px 0'}}>
              <p style={{fontSize: '15px'}}>{modalContent}</p>
            </div>
            <div className="modal-footer" style={{display: 'flex', justifyContent: 'flex-end'}}>
              <button className="btn-primary" onClick={() => setIsModalOpen(false)} style={{padding: '8px 16px', borderRadius: '8px'}}>ОК, понятно</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminModeration;
