import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { 
  Building2, 
  LayoutDashboard, 
  Users, 
  BookOpen, 
  Settings, 
  LogOut, 
  Bell, 
  Search,
  ShieldAlert,
  Activity
} from 'lucide-react';
import './DashboardLayout.css';
import Logo from '../components/Logo/Logo';

const DashboardLayout = ({ role }) => {
  const location = useLocation();
  const isCollege = role === 'college';

  const menuItems = isCollege ? [
    { name: 'Обзор', path: '/college', icon: LayoutDashboard },
    { name: 'Паспорт Колледжа', path: '/college/passport', icon: Users },
    { name: 'Мои ОП', path: '/college/programs', icon: BookOpen },
    { name: 'Статистика', path: '/college/stats', icon: Activity },
  ] : [
    { name: 'Система', path: '/admin', icon: LayoutDashboard },
    { name: 'Платформы (API)', path: '/admin/platforms', icon: Activity },
    { name: 'Модерация', path: '/admin/moderation', icon: ShieldAlert },
    { name: 'Колледжи', path: '/admin/colleges', icon: Building2 },
  ];

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <div className="logo-icon-svg" style={{width: '24px', height: '24px', display: 'flex'}}>
              <Logo />
            </div>
            <span>TALAP</span>
          </div>
          <div className="sidebar-role-badge">
            {isCollege ? 'Колледж' : 'Администратор'}
          </div>
        </div>

        <nav className="sidebar-nav">
          <ul>
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link to={item.path} className={`nav-link ${isActive ? 'active' : ''}`}>
                    <Icon size={20} />
                    <span>{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="sidebar-footer">
          <Link to="/" className="nav-link">
            <Settings size={20} />
            <span>Настройки</span>
          </Link>
          <Link to="/" className="nav-link text-red">
            <LogOut size={20} />
            <span>Выйти</span>
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="dashboard-main">
        {/* Topbar */}
        <header className="dashboard-topbar">
          <div className="topbar-search">
            <Search size={18} className="text-muted" />
            <input type="text" placeholder="Поиск по кабинету..." />
          </div>

          <div className="topbar-actions">
            <button className="icon-btn">
              <Bell size={20} />
              <span className="notification-dot"></span>
            </button>
            <div className="user-profile">
              <div className="avatar">{isCollege ? 'К' : 'А'}</div>
              <span className="user-name">
                {isCollege ? 'Политехнический колледж' : 'Admin N.N.'}
              </span>
            </div>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <div className="dashboard-content-wrapper">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
