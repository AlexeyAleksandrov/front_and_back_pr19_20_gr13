function Dashboard() {
  return (
    <div className="page">
      <h1>Панель управления</h1>
      <div className="dashboard-content">
        <p>Добро пожаловать в защищенную зону!</p>
        <p>Это страница доступна только авторизованным пользователям.</p>
        
        <div className="dashboard-stats">
          <div className="stat-card">
            <h3>Проектов</h3>
            <p className="stat-number">12</p>
          </div>
          <div className="stat-card">
            <h3>Задач</h3>
            <p className="stat-number">48</p>
          </div>
          <div className="stat-card">
            <h3>Завершено</h3>
            <p className="stat-number">35</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
