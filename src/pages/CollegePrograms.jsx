import { useState, useMemo } from 'react';
import { FileText, Plus, Search, Filter, X } from 'lucide-react';
import './CollegePrograms.css';

const initialPrograms = [
  { id: 1, code: '0611000', title: 'Информационные системы (по областям применения)', term: '3 года 10 месяцев', language: 'Казахский, Русский', status: 'Утверждено', progress: 100 },
  { id: 2, code: '0714000', title: 'Электрооборудование (по видам и отраслям)', term: '2 года 10 месяцев', language: 'Казахский', status: 'На модерации', progress: 100 },
  { id: 3, code: '---', title: 'Графический дизайн и 3D моделирование', term: '---', language: '---', status: 'Черновик', progress: 45 }
];

const CollegePrograms = () => {
  const [programs, setPrograms] = useState(initialPrograms);
  const [search, setSearch] = useState('');
  
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProgramTitle, setNewProgramTitle] = useState('');

  const filteredPrograms = useMemo(() => {
    return programs.filter(p => p.title.toLowerCase().includes(search.toLowerCase()) || p.code.includes(search));
  }, [programs, search]);

  const handleCreate = () => {
    if (newProgramTitle) {
      setPrograms([...programs, {
        id: Date.now(),
        code: '---',
        title: newProgramTitle,
        term: '---',
        language: '---',
        status: 'Черновик',
        progress: 0
      }]);
      setNewProgramTitle('');
      setIsModalOpen(false);
    }
  };

  return (
    <div className="dashboard-page programs-page relative">
      <div className="page-header flex-between">
        <div>
          <h1>Мои Образовательные Программы</h1>
          <p>Реестр программ колледжа и статус их согласования в министерстве.</p>
        </div>
        <button className="btn-primary" onClick={() => setIsModalOpen(true)} style={{padding: '10px 20px', borderRadius: '8px'}}>
          <Plus size={18} /> Создать программу
        </button>
      </div>

      <div className="programs-controls fade-in-up">
        <div className="search-bar">
          <Search size={18} className="text-muted" />
          <input 
            type="text" 
            placeholder="Поиск по шифру или названию..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <button className="btn-secondary">
          <Filter size={18} /> Фильтры
        </button>
      </div>

      <div className="programs-list fade-in-up" style={{animationDelay: '0.1s'}}>
        {filteredPrograms.map(p => (
          <div key={p.id} className={`program-card ${p.status === 'Черновик' ? 'draft' : ''}`}>
            <div className="p-card-header">
              <span className="p-code">{p.code}</span>
              <span className={`status-badge ${p.status === 'Утверждено' ? 'success' : p.status === 'На модерации' ? 'warning' : 'draft-badge'}`}>
                {p.status}
              </span>
            </div>
            <h3 className="p-title">{p.title}</h3>
            <div className="p-meta">
              {p.status === 'Черновик' ? (
                <>
                  <span><strong>Проект Конструктора ОП</strong></span>
                  <span>Заполнено: {p.progress}%</span>
                </>
              ) : (
                <>
                  <span><strong>Срок обучения:</strong> {p.term}</span>
                  <span><strong>Язык:</strong> {p.language}</span>
                </>
              )}
            </div>
            <div className={`p-actions ${p.status === 'Черновик' ? 'border-top' : ''}`}>
              {p.status === 'Утверждено' && (
                <>
                  <button className="icon-btn-small">Редактировать</button>
                  <button className="icon-btn-small">Скачать УП</button>
                </>
              )}
              {p.status === 'На модерации' && (
                <>
                  <button className="icon-btn-small" disabled>Отозвать</button>
                  <button className="icon-btn-small">Смотреть замечания</button>
                </>
              )}
              {p.status === 'Черновик' && (
                <button className="icon-btn-small active-text">Продолжить создание</button>
              )}
            </div>
          </div>
        ))}
        {filteredPrograms.length === 0 && (
          <div className="text-center" style={{gridColumn: '1 / -1', padding: '40px', color: '#94a3b8'}}>Программы не найдены</div>
        )}
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-card fade-in" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Новая образовательная программа</h3>
              <button className="icon-btn-small" onClick={() => setIsModalOpen(false)}><X size={18}/></button>
            </div>
            <div className="modal-body" style={{padding: '24px 0'}}>
              <div className="form-group">
                <label style={{fontSize: '13px', fontWeight: 600, color: '#64748b', marginBottom: '8px', display: 'block'}}>Название программы</label>
                <input 
                  type="text" 
                  value={newProgramTitle}
                  onChange={e => setNewProgramTitle(e.target.value)}
                  placeholder="Например: Графический дизайн" 
                  style={{width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', outline: 'none', background: '#f8fafc'}}
                />
              </div>
              <p style={{fontSize: '13px', color: '#64748b', marginTop: '16px'}}>
                После создания вы будете перенаправлены в Конструктор ОП для заполнения модулей.
              </p>
            </div>
            <div className="modal-footer" style={{display: 'flex', justifyContent: 'flex-end', gap: '12px'}}>
              <button className="btn-secondary" onClick={() => setIsModalOpen(false)} style={{padding: '8px 16px', borderRadius: '8px'}}>Отмена</button>
              <button className="btn-primary" onClick={handleCreate} disabled={!newProgramTitle} style={{padding: '8px 16px', borderRadius: '8px'}}>Создать</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CollegePrograms;
