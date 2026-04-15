import { useState, useMemo } from 'react';
import { Download, Search, Filter, Mail, Phone, MoreHorizontal, X, CheckCircle } from 'lucide-react';

const initialColleges = [
  { id: 1, name: 'Алматинский государственный политехнический колледж', bin: '990140001234', region: 'Алматы', students: 1240, status: 'Апробирован' },
  { id: 2, name: 'Высший колледж APEC PetroTechnic', bin: '120540003322', region: 'Атырауская обл.', students: 860, status: 'Апробирован' },
  { id: 3, name: 'Медико-технический колледж', bin: '010240002222', region: 'Астана', students: 920, status: 'Заполняется' },
  { id: 4, name: 'Костанайский индустриальный колледж', bin: '081240005555', region: 'Костанайская обл.', students: 450, status: 'Ожидает' }
];

const AdminColleges = () => {
  const [colleges, setColleges] = useState(initialColleges);
  const [search, setSearch] = useState('');
  const [regionFilter, setRegionFilter] = useState('Все');
  
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const filteredColleges = useMemo(() => {
    return colleges.filter(college => {
      const matchSearch = college.name.toLowerCase().includes(search.toLowerCase()) || 
                          college.bin.includes(search);
      const matchRegion = regionFilter === 'Все' || college.region.includes(regionFilter);
      return matchSearch && matchRegion;
    });
  }, [colleges, search, regionFilter]);

  const handleAction = (actionName, collegeName) => {
    setModalContent(`${actionName} для: ${collegeName}`);
    setIsModalOpen(true);
  };

  const handleExport = () => {
    setModalContent(`Экспорт базы данных... Сгенерировано ${filteredColleges.length} записей.`);
    setIsModalOpen(true);
  };

  return (
    <div className="dashboard-page colleges-master-page relative">
      <div className="page-header flex-between">
        <div>
          <h1>Единый реестр колледжей</h1>
          <p>База из {colleges.length} организаций технического и профессионального образования РК.</p>
        </div>
        <button className="btn-secondary" onClick={handleExport} style={{padding: '10px 20px', borderRadius: '8px'}}>
          <Download size={18} /> Экспорт БД
        </button>
      </div>

      <div className="moderation-controls fade-in-up">
        <div className="search-bar">
          <Search size={18} className="text-muted" />
          <input 
            type="text" 
            placeholder="Поиск по названию или БИН..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="filters-group">
          <select className="ui-select" value={regionFilter} onChange={(e) => setRegionFilter(e.target.value)}>
            <option value="Все">Регион: Все</option>
            <option value="Алматы">г. Алматы</option>
            <option value="Астана">г. Астана</option>
            <option value="Атырауская">Атырауская обл.</option>
            <option value="Костанайская">Костанайская обл.</option>
          </select>
        </div>
      </div>

      <div className="moderation-board fade-in-up" style={{animationDelay: '0.1s'}}>
        <div className="table-responsive">
          <table className="dash-table mod-table">
            <thead>
              <tr>
                <th>Наименование / БИН</th>
                <th>Регион</th>
                <th>Контингент</th>
                <th>Статус профиля</th>
                <th style={{textAlign: 'right'}}>Связь</th>
              </tr>
            </thead>
            <tbody>
              {filteredColleges.map(c => (
                <tr key={c.id}>
                  <td>
                    <strong>{c.name}</strong>
                    <span className="sub-text">БИН: {c.bin}</span>
                  </td>
                  <td>{c.region}</td>
                  <td>{c.students} <small>студентов</small></td>
                  <td>
                    <span className={`status-badge ${c.status === 'Апробирован' ? 'success' : c.status === 'Заполняется' ? 'warning' : 'draft-badge'}`}>
                      {c.status}
                    </span>
                  </td>
                  <td className="actions-cell">
                    <button className="icon-btn-small" title="Написать Email" onClick={() => handleAction('Отправка Email', c.name)}><Mail size={16}/></button>
                    <button className="icon-btn-small" title="Позвонить" onClick={() => handleAction('Звонок', c.name)}><Phone size={16}/></button>
                    <button className="icon-btn-small" title="Управление" onClick={() => handleAction('Редактирование профиля', c.name)}><MoreHorizontal size={16}/></button>
                  </td>
                </tr>
              ))}
              {filteredColleges.length === 0 && (
                <tr><td colSpan="5" className="text-center" style={{padding: '40px', color: '#94a3b8'}}>Ничего не найдено по фильтрам</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Reusable Action Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-card fade-in" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Системное действие</h3>
              <button className="icon-btn-small" onClick={() => setIsModalOpen(false)}><X size={18}/></button>
            </div>
            <div className="modal-body" style={{padding: '24px 0', display: 'flex', alignItems: 'center', gap: '16px'}}>
              <CheckCircle size={32} className="text-green" />
              <p style={{fontSize: '15px'}}>{modalContent}</p>
            </div>
            <div className="modal-footer" style={{display: 'flex', justifyContent: 'flex-end'}}>
              <button className="btn-primary" onClick={() => setIsModalOpen(false)} style={{padding: '8px 16px', borderRadius: '8px'}}>ОК, закрыть</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminColleges;
