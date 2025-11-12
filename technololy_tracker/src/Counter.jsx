import { useState} from "react";

function Counter() {

    const [count, setCount] = useState(0);

    // функция для увеличения счётчика
    const increment = () => {
        setCount(count + 1); // устанавливаем новое значение
    };

    // функция для уменьшения счётчика
    const decrement = () => {
        setCount(count - 1);
    };

    // функция для сброса счётчика
    const reset = () => {
        setCount(0); // возвращаем к начальному значению
    };

    return (
        <div className="counter">
            <h2>Счетчик: {count}</h2>
            <div className="counter-buttons">
                {/* при клике вызываем функцию decrement */}
                <button onClick={decrement}>-1</button>
                <button onClick={reset}>Сбросить</button>
                <button onClick={increment}>+1</button>
            </div>
            <p>Текущее значение: <strong>{count}</strong></p>
        </div>
    )
}

export default Counter;