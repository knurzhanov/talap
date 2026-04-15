import { useState } from 'react';
import { Save, AlertCircle, Building, Users, Home, BookOpen, Plus, Trash2 } from 'lucide-react';
import './CollegePassport.css';

const CollegePassport = () => {
  const [activeTab, setActiveTab] = useState('general');

  // State for Teachers
  const [teachers, setTeachers] = useState([
    { id: 1, name: 'Оспанов Серик Аманович', category: 'Педагог-исследователь', exp: '12 лет' }
  ]);
  const [newTeacher, setNewTeacher] = useState({ name: '', category: 'Педагог', exp: '' });

  const addTeacher = () => {
    if(newTeacher.name) {
      setTeachers([...teachers, { ...newTeacher, id: Date.now() }]);
      setNewTeacher({ name: '', category: 'Педагог', exp: '' });
    }
  };

  const removeTeacher = (id) => {
    setTeachers(teachers.filter(t => t.id !== id));
  };

  // State for Faculties/Professions
  const [faculties, setFaculties] = useState([
    { id: 1, name: 'Информационные системы', students: 340 }
  ]);
  const [newFaculty, setNewFaculty] = useState({ name: '', students: '' });

  const addFaculty = () => {
    if(newFaculty.name) {
      setFaculties([...faculties, { ...newFaculty, id: Date.now() }]);
      setNewFaculty({ name: '', students: '' });
    }
  };

  const removeFaculty = (id) => {
    setFaculties(faculties.filter(f => f.id !== id));
  };


  return (
    <div className="dashboard-page passport-page">
      <div className="page-header flex-between">
        <div>
          <h1>Сбор мастер-данных колледжа</h1>
          <p>Обязательная форма профиля организации для интеграции со всеми гос. платформами.</p>
        </div>
        <button className="btn-primary" style={{padding: '10px 20px', borderRadius: '8px'}}>
          <Save size={18} /> Сохранить профиль
        </button>
      </div>

      <div className="passport-container fade-in-up">
        <div className="passport-sidebar">
          <div className="completion-card">
            <h4>Профиль заполнен</h4>
            <div className="progress-bar"><div className="progress" style={{width: '65%'}}></div></div>
            <span className="completion-text">Требуется заполнить Факультеты</span>
          </div>
          
          <ul className="passport-tabs">
            <li className={activeTab === 'general' ? 'active' : ''} onClick={() => setActiveTab('general')}>
              <Building size={18} /> Общие контакты
            </li>
            <li className={activeTab === 'faculties' ? 'active' : ''} onClick={() => setActiveTab('faculties')}>
              <BookOpen size={18} /> Факультеты и студенты
            </li>
            <li className={activeTab === 'staff' ? 'active' : ''} onClick={() => setActiveTab('staff')}>
              <Users size={18} /> Преподавательский состав
            </li>
            <li className={activeTab === 'infra' ? 'active' : ''} onClick={() => setActiveTab('infra')}>
              <Home size={18} /> Инфраструктура
            </li>
          </ul>
        </div>

        <div className="passport-content">
          
          {/* GENERAL INFO TAB */}
          {activeTab === 'general' && (
            <div className="tab-pane fade-in">
              <div className="pane-header">
                <h3>Контактные данные и реквизиты</h3>
                <span className="status-badge success">✅ Частично заполнено</span>
              </div>
              
              <form className="passport-form">
                <div className="form-section">
                  <div className="form-group">
                    <label>Полное наименование колледжа</label>
                    <input type="text" defaultValue="Алматинский государственный политехнический колледж" />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>БИН / ИИН</label>
                      <input type="text" defaultValue="990240001234" />
                    </div>
                    <div className="form-group">
                      <label>ФИО Директора</label>
                      <input type="text" defaultValue="Ахметов Арман Серикович" />
                    </div>
                  </div>
                </div>

                <div className="form-section">
                  <h4>Контактная база базы колледжа</h4>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Основной телефон (Приемная)</label>
                      <input type="text" defaultValue="+7 (727) 234-56-78" />
                    </div>
                    <div className="form-group">
                      <label>Телефон доверия</label>
                      <input type="text" placeholder="Укажите номер" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Email приемной</label>
                      <input type="email" placeholder="priemnaya@college.kz" />
                    </div>
                    <div className="form-group">
                      <label>Официальный сайт</label>
                      <input type="text" defaultValue="agpk.kz" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Фактический адрес</label>
                    <input type="text" defaultValue="г. Алматы, Медеуский район, ул. Татибекова, 31" />
                  </div>
                </div>
              </form>
            </div>
          )}

          {/* FACULTIES TAB */}
          {activeTab === 'faculties' && (
            <div className="tab-pane fade-in">
              <div className="pane-header">
                <h3>Профессии и контингент студентов</h3>
              </div>
              <div className="info-alert">
                 <AlertCircle size={18}/> Внесите все работающие факультеты/профессии и текущее количество студентов.
              </div>

              <div className="add-form-card">
                <h4>Добавить профессию (специальность)</h4>
                <div className="form-row" style={{alignItems: 'flex-end'}}>
                  <div className="form-group" style={{flex: 2}}>
                    <label>Название факультета / Профессии</label>
                    <input type="text" value={newFaculty.name} onChange={e => setNewFaculty({...newFaculty, name: e.target.value})} placeholder="Например: Сварочное дело" />
                  </div>
                  <div className="form-group">
                    <label>Кол-во студентов</label>
                    <input type="number" value={newFaculty.students} onChange={e => setNewFaculty({...newFaculty, students: e.target.value})} placeholder="0" />
                  </div>
                  <button type="button" className="btn-secondary" onClick={addFaculty} style={{height: '46px', padding: '0 20px'}}>
                    <Plus size={18}/> Добавить
                  </button>
                </div>
              </div>

              <div className="table-responsive" style={{marginTop: '32px'}}>
                <table className="dash-table">
                  <thead>
                    <tr>
                      <th>Название профессии / Факультета</th>
                      <th>Кол-во студентов</th>
                      <th style={{textAlign: 'right'}}>Действия</th>
                    </tr>
                  </thead>
                  <tbody>
                    {faculties.map((fac) => (
                      <tr key={fac.id}>
                        <td style={{fontWeight: 500}}>{fac.name}</td>
                        <td>{fac.students} чел.</td>
                        <td style={{textAlign: 'right'}}>
                          <button onClick={() => removeFaculty(fac.id)} className="icon-btn-small text-red"><Trash2 size={16}/></button>
                        </td>
                      </tr>
                    ))}
                    {faculties.length === 0 && <tr><td colSpan="3" style={{textAlign: 'center', padding: '20px', color: '#94a3b8'}}>Список пуст</td></tr>}
                  </tbody>
                </table>
              </div>
            </div>
          )}


          {/* STAFF TAB */}
          {activeTab === 'staff' && (
            <div className="tab-pane fade-in">
              <div className="pane-header">
                <h3>Педагогический состав</h3>
              </div>
              
              <div className="add-form-card">
                <h4>Добавление нового преподавателя</h4>
                <div className="form-row" style={{alignItems: 'flex-end'}}>
                  <div className="form-group" style={{flex: 2}}>
                    <label>ФИО Преподавателя</label>
                    <input type="text" value={newTeacher.name} onChange={e => setNewTeacher({...newTeacher, name: e.target.value})} placeholder="Иванов И.И." />
                  </div>
                  <div className="form-group">
                    <label>Категория</label>
                    <select value={newTeacher.category} onChange={e => setNewTeacher({...newTeacher, category: e.target.value})}>
                      <option>Педагог</option>
                      <option>Педагог-модератор</option>
                      <option>Педагог-эксперт</option>
                      <option>Педагог-исследователь</option>
                      <option>Педагог-мастер</option>
                    </select>
                  </div>
                  <div className="form-group" style={{flex: 0.5}}>
                    <label>Стаж (лет)</label>
                    <input type="number" value={newTeacher.exp} onChange={e => setNewTeacher({...newTeacher, exp: e.target.value})} placeholder="0" />
                  </div>
                  <button type="button" className="btn-secondary" onClick={addTeacher} style={{height: '46px', padding: '0 20px'}}>
                    <Plus size={18}/> Добавить
                  </button>
                </div>
              </div>

               <div className="table-responsive" style={{marginTop: '32px'}}>
                <table className="dash-table">
                  <thead>
                    <tr>
                      <th>ФИО</th>
                      <th>Категория</th>
                      <th>Стаж</th>
                      <th style={{textAlign: 'right'}}>Действия</th>
                    </tr>
                  </thead>
                  <tbody>
                    {teachers.map(t => (
                       <tr key={t.id}>
                        <td style={{fontWeight: 500}}>{t.name}</td>
                        <td><span className="cat-badge">{t.category}</span></td>
                        <td>{t.exp} лет</td>
                        <td style={{textAlign: 'right'}}>
                          <button onClick={() => removeTeacher(t.id)} className="icon-btn-small text-red"><Trash2 size={16}/></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* INFRASTRUCTURE TAB */}
          {activeTab === 'infra' && (
            <div className="tab-pane fade-in">
              <div className="pane-header">
                <h3>Учебно-материальная база</h3>
              </div>
              <form className="passport-form">
                 <div className="form-row">
                    <div className="form-group">
                      <label>Общая площадь (кв.м)</label>
                      <input type="number" defaultValue="14500" />
                    </div>
                    <div className="form-group">
                      <label>Количество учебных кабинетов</label>
                      <input type="number" defaultValue="42" />
                    </div>
                  </div>
                  <div className="form-group checkbox-group">
                      <label><input type="checkbox" defaultChecked /> Наличие общежития</label>
                      <label><input type="checkbox" defaultChecked /> Спортивный зал</label>
                      <label><input type="checkbox" /> Баสсейн</label>
                  </div>
              </form>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default CollegePassport;
