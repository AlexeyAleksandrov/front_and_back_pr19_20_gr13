import { useState, useEffect } from 'react';
import './DataImportExport.css';

function DataImportExport() {
  // состояние для списка технологий
  const [technologies, setTechnologies] = useState([]);
  // состояние для сообщений о статусе операций
  const [status, setStatus] = useState('');
  // состояние для перетаскивания файла
  const [isDragging, setIsDragging] = useState(false);

  // загрузка данных из localStorage при монтировании компонента
  useEffect(() => {
    loadFromLocalStorage();
  }, []);

  // функция загрузки данных из localStorage
  const loadFromLocalStorage = () => {
    try {
      const saved = localStorage.getItem('technologies');
      if (saved) {
        const parsed = JSON.parse(saved);
        setTechnologies(parsed);
        setStatus('Данные загружены из localStorage');
        setTimeout(() => setStatus(''), 3000);
      }
    } catch (error) {
      setStatus('Ошибка загрузки данных из localStorage');
      console.error('Ошибка загрузки:', error);
    }
  };

  // функция сохранения данных в localStorage
  const saveToLocalStorage = () => {
    try {
      localStorage.setItem('technologies', JSON.stringify(technologies));
      setStatus('Данные сохранены в localStorage');
      setTimeout(() => setStatus(''), 3000);
    } catch (error) {
      setStatus('Ошибка сохранения данных');
      console.error('Ошибка сохранения:', error);
    }
  };

  // экспорт данных в JSON-файл
  const exportToJSON = () => {
    try {
      const dataStr = JSON.stringify(technologies, null, 2);
      const dataBlob = new Blob([dataStr], { type: 'application/json' });
      
      // создаем временную ссылку для скачивания
      const url = URL.createObjectURL(dataBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `technologies_${new Date().toISOString().split('T')[0]}.json`;
      
      // программно кликаем по ссылке для начала скачивания
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // освобождаем память
      URL.revokeObjectURL(url);
      
      setStatus('Данные экспортированы в JSON');
      setTimeout(() => setStatus(''), 3000);
    } catch (error) {
      setStatus('Ошибка экспорта данных');
      console.error('Ошибка экспорта:', error);
    }
  };

  // импорт данных из JSON-файла
  const importFromJSON = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    
    reader.onload = (e) => {
      try {
        const imported = JSON.parse(e.target.result);
        
        // проверка что импортированные данные - это массив
        if (!Array.isArray(imported)) {
          throw new Error('Неверный формат данных');
        }
        
        setTechnologies(imported);
        setStatus(`Импортировано ${imported.length} технологий`);
        setTimeout(() => setStatus(''), 3000);
      } catch (error) {
        setStatus('Ошибка импорта: неверный формат файла');
        console.error('Ошибка импорта:', error);
      }
    };
    
    reader.readAsText(file);
    // сбрасываем значение input для возможности повторного импорта того же файла
    event.target.value = '';
  };

  // обработчик начала перетаскивания
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  // обработчик окончания перетаскивания
  const handleDragLeave = () => {
    setIsDragging(false);
  };

  // обработчик сброса файла
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (file && file.type === 'application/json') {
      const reader = new FileReader();
      
      reader.onload = (event) => {
        try {
          const imported = JSON.parse(event.target.result);
          if (!Array.isArray(imported)) {
            throw new Error('Неверный формат данных');
          }
          
          setTechnologies(imported);
          setStatus(`Импортировано ${imported.length} технологий`);
          setTimeout(() => setStatus(''), 3000);
        } catch (error) {
          setStatus('Ошибка импорта: неверный формат файла');
          console.error('Ошибка импорта:', error);
        }
      };
      
      reader.readAsText(file);
    } else {
      setStatus('Пожалуйста, используйте JSON-файл');
      setTimeout(() => setStatus(''), 3000);
    }
  };

  // очистка всех данных
  const clearData = () => {
    if (window.confirm('Вы уверены, что хотите удалить все данные?')) {
      setTechnologies([]);
      localStorage.removeItem('technologies');
      setStatus('Все данные удалены');
      setTimeout(() => setStatus(''), 3000);
    }
  };

  return (
    <div className="data-import-export">
      <h1>Импорт/Экспорт данных</h1>
      
      {/* статус операций */}
      {status && (
        <div className="status-message" role="status" aria-live="polite">
          {status}
        </div>
      )}

      {/* кнопки управления */}
      <div className="control-buttons">
        <button onClick={saveToLocalStorage} className="btn-save">
          Сохранить в localStorage
        </button>
        
        <button onClick={exportToJSON} className="btn-export">
          Экспортировать в JSON
        </button>
        
        <label className="btn-import">
          Импортировать из JSON
          <input
            type="file"
            accept=".json"
            onChange={importFromJSON}
            style={{ display: 'none' }}
          />
        </label>
        
        <button onClick={clearData} className="btn-clear">
          Очистить все данные
        </button>
      </div>

      {/* зона перетаскивания файлов */}
      <div
        className={`drop-zone ${isDragging ? 'dragging' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <p>Перетащите JSON-файл сюда</p>
        <p className="drop-zone-hint">или используйте кнопку "Импортировать из JSON"</p>
      </div>

      {/* список технологий */}
      {technologies.length > 0 && (
        <div className="technologies-list">
          <h2>Текущие технологии ({technologies.length})</h2>
          <ul>
            {technologies.map((tech, index) => (
              <li key={index}>
                <strong>{tech.title}</strong>
                {tech.description && ` - ${tech.description}`}
              </li>
            ))}
          </ul>
        </div>
      )}

      {technologies.length === 0 && (
        <div className="empty-state">
          <p>Нет данных для отображения</p>
          <p>Импортируйте данные из файла или добавьте новые технологии</p>
        </div>
      )}
    </div>
  );
}

export default DataImportExport;
