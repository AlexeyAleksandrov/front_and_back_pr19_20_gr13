import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
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

// страница со всеми предыдущими компонентами
function AllExamples() {
  const { technologies, markAllCompleted, resetAll } = useTechnologies();

  return (
    <div className="all-examples">
      <h1>Все примеры из практических работ 19-22, 24</h1>

      {/* 19 */}
      <section className="practice-section">
        <h2>ПР 19</h2>
        <Greeting />
        <UserCard name="Иван" role="Пользователь" avatarUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfVMhpKmVy_-iwfRLAiNiaDslMa-2oEz7KTw&s" isOnline={true}/>
        <TaskList />
      </section>

      {/* 20 */}
      <section className="practice-section">
        <h2>ПР 20</h2>
        <Counter />
        <RegistrationForm />
        <ColorPicker />
      </section>

      {/* 21 */}
      <section className="practice-section">
        <h2>ПР 21</h2>
        <WindowSizeTracker />
        <UserProfile21 />
        <ContactForm />
      </section>

      {/* 22 */}
      <section className="practice-section">
        <h2>ПР 22</h2>
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
        <h2>ПР 24</h2>
        <UserList />
        <ProductSearch />
        <PostList />
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
    <Router>
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
  );
}

export default App;