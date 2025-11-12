// src/RegistrationForm.jsx
import { useState } from 'react';

function RegistrationForm() {
    // состояние для данных формы
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    // состояние для ошибок валидации
    const [errors, setErrors] = useState({});

    // обработчик изменения любого поля
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // валидация email в реальном времени
        if (name === 'email' && value && !value.includes('@')) {
            setErrors(prev => ({ ...prev, email: 'Некорректный email' }));
        } else if (name === 'email') {
            setErrors(prev => ({ ...prev, email: '' }));
        }
    };

    // обработчик отправки формы
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Данные формы:', formData);
        alert(`Добро пожаловать, ${formData.name}!`);
    };

    return (
        <form onSubmit={handleSubmit} className="registration-form">
            <h2>Регистрация</h2>

            <div className="form-group">
                <label>Имя:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div className="form-group">
                <label>Пароль:</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
            </div>

            <button type="submit">Зарегистрироваться</button>
        </form>
    );
}

export default RegistrationForm;