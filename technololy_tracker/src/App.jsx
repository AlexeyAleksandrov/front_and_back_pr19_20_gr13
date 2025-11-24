import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';

// компоненты из практической работы 23 (React Router)
import Home from "./23/pages/Home.jsx";
import About from "./23/pages/About.jsx";
import Contact from "./23/pages/Contact.jsx";
import UserProfile from "./23/pages/UserProfile.jsx";
import Login from "./23/pages/Login.jsx";
import Dashboard from "./23/pages/Dashboard.jsx";
import ProtectedRoute from "./23/components/ProtectedRoute.jsx";

// компоненты из предыдущих практических работ
import Greeting from "./Greeting.jsx";
import UserCard from "./UserCard.jsx";
import TaskList from "./TaskList.jsx";
import Counter from "./Counter.jsx";
import RegistrationForm from "./RegistrationForm.jsx";
import ColorPicker from "./ColorPicker.jsx";
import WindowSizeTracker from "./21/WindowSizeTracker.jsx";
import UserProfile21 from "./21/UserProfile.jsx";
import ContactForm from "./21/ContactForm.jsx";
import UserSettings from "./22/UserSettings.jsx";
import SimpleModalExample from "./22/SimpleModalExample.jsx";
import ProgressDashboard from "./22/ProgressDashboard.jsx";
import QuickActions from "./22/QuickActions.jsx";
import useTechnologies from "./22/useTechnologies.js";
import UserList from "./24/UserList.jsx";
import ProductSearch from "./24/ProductSearch.jsx";
import PostList from "./24/PostList.jsx";

// компоненты из практической работы 25 (формы и валидация)
import TechnologyForm from "./25/TechnologyForm.jsx";
import WorkingAccessibleForm from "./25/WorkingAccessibleForm.jsx";
import DataImportExport from "./25/DataImportExport.jsx";

// компоненты из практической работы 26 (Material-UI)
import SimpleTechCard from "./26/SimpleTechCard.jsx";
import MuiDashboard from "./26/Dashboard.jsx";

// создаем тему Material-UI
const muiTheme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

// страница со всеми предыдущими компонентами
function AllExamples() {
  const { technologies, markAllCompleted, resetAll } = useTechnologies();
  // состояние для демонстрации TechnologyForm
  const [showTechForm, setShowTechForm] = useState(false);
  // состояние для демонстрации Material-UI карточек
  const [muiTechnologies, setMuiTechnologies] = useState([
    {
      id: 1,
      title: 'React Components',
      description: 'Изучение функциональных и классовых компонентов',
      category: 'frontend',
      status: 'in-progress'
    },
    {
      id: 2,
      title: 'Material-UI',
      description: 'Освоение Material Design для React',
      category: 'ui-library',
      status: 'not-started'
    },
    {
      id: 3,
      title: 'React Hooks',
      description: 'Использование useState, useEffect и других хуков',
      category: 'frontend',
      status: 'completed'
    }
  ]);

  // обработчик сохранения формы технологии
  const handleSaveTechnology = (data) => {
    console.log('Сохранение технологии:', data);
    alert('Технология сохранена! Проверьте консоль.');
    setShowTechForm(false);
  };

  // обработчик изменения статуса для MUI карточек
  const handleMuiStatusChange = (techId, newStatus) => {
    setMuiTechnologies(prev =>
      prev.map(tech =>
        tech.id === techId ? { ...tech, status: newStatus } : tech
      )
    );
  };

  return (
    <div className="all-examples">
      <h1>Все примеры из практических работ 19-26</h1>

      {/* 19 */}
      <section className="practice-section">
        <h2>ПР 19 - Основы React</h2>
        <Greeting />
        <UserCard name="Иван" role="Пользователь" avatarUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfVMhpKmVy_-iwfRLAiNiaDslMa-2oEz7KTw&s" isOnline={true}/>
        <TaskList />
      </section>

      {/* 20 */}
      <section className="practice-section">
        <h2>ПР 20 - Состояние и события</h2>
        <Counter />
        <RegistrationForm />
        <ColorPicker />
      </section>

      {/* 21 */}
      <section className="practice-section">
        <h2>ПР 21 - useEffect и жизненный цикл</h2>
        <WindowSizeTracker />
        <UserProfile21 />
        <ContactForm />
      </section>

      {/* 22 */}
      <section className="practice-section">
        <h2>ПР 22 - Кастомные хуки</h2>
        <UserSettings />
        <SimpleModalExample />
        <ProgressDashboard />
        <QuickActions 
          onMarkAllCompleted={markAllCompleted}
          onResetAll={resetAll}
          technologies={technologies}
        />
      </section>

      {/* 24 */}
      <section className="practice-section">
        <h2>ПР 24 - Работа с API</h2>
        <UserList />
        <ProductSearch />
        <PostList />
      </section>

      {/* 25 */}
      <section className="practice-section">
        <h2>ПР 25 - Формы и валидация</h2>
        
        <h3>Пример 1: Форма с валидацией</h3>
        <button 
          onClick={() => setShowTechForm(!showTechForm)}
          style={{ 
            padding: '10px 20px', 
            marginBottom: '10px',
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          {showTechForm ? 'Скрыть форму' : 'Показать форму добавления технологии'}
        </button>
        {showTechForm && (
          <TechnologyForm 
            onSave={handleSaveTechnology}
            onCancel={() => setShowTechForm(false)}
          />
        )}

        <h3>Пример 2: Доступная форма</h3>
        <WorkingAccessibleForm />

        <h3>Пример 3: Импорт/Экспорт данных</h3>
        <DataImportExport />
      </section>

      {/* 26 */}
      <section className="practice-section">
        <h2>ПР 26 - Material-UI</h2>
        
        <h3>Пример 1: Карточки технологий (Material-UI)</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {muiTechnologies.map(tech => (
            <SimpleTechCard
              key={tech.id}
              technology={tech}
              onStatusChange={handleMuiStatusChange}
            />
          ))}
        </div>

        <h3>Пример 2: Dashboard (Material-UI)</h3>
        <MuiDashboard technologies={muiTechnologies} />
      </section>
    </div>
  );
}

function App() {
  // состояние для отслеживания авторизации
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  // проверяем авторизацию при загрузке
  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const user = localStorage.getItem('username') || '';
    setIsLoggedIn(loggedIn);
    setUsername(user);
  }, []);

  const handleLogin = (user) => {
    setIsLoggedIn(true);
    setUsername(user);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    setIsLoggedIn(false);
    setUsername('');
  };

  // данные пользователей для динамических маршрутов
  const users = [
    { id: 1, name: 'Анна' },
    { id: 2, name: 'Иван' },
    { id: 3, name: 'Мария' }
  ];

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Router basename={import.meta.env.BASE_URL}>
        <div className="app">
          {/* навигационное меню */}
          <nav className="main-nav">
            <div className="nav-brand">
              <h2>Трекер технологий</h2>
            </div>
            <ul className="nav-links">
              <li><Link to="/">Главная</Link></li>
              <li><Link to="/about">О проекте</Link></li>
              <li><Link to="/contact">Контакты</Link></li>
              <li className="dropdown">
                <span>Пользователи ▼</span>
                <ul className="dropdown-menu">
                  {users.map(user => (
                    <li key={user.id}>
                      <Link to={`/user/${user.id}`}>{user.name}</Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li><Link to="/all-examples">Все примеры</Link></li>
              
              {isLoggedIn ? (
                <>
                  <li><Link to="/dashboard">Панель управления</Link></li>
                  <li className="user-info">
                    <span>Привет, {username}!</span>
                    <button onClick={handleLogout} className="logout-btn">
                      Выйти
                    </button>
                  </li>
                </>
              ) : (
                <li><Link to="/login">Войти</Link></li>
              )}
            </ul>
          </nav>

          {/* основное содержимое с маршрутами */}
          <main className="main-content">
            <Routes>
              {/* маршруты из практической работы 23 */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/user/:userId" element={<UserProfile />} />
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
              
              {/* защищенный маршрут */}
              <Route 
                path="/dashboard" 
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <Dashboard />
                  </ProtectedRoute>
                } 
              />

              {/* страница со всеми примерами */}
              <Route path="/all-examples" element={<AllExamples />} />

              {/* редирект на главную для несуществующих маршрутов */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;