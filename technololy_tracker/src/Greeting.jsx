function Greeting() {
    const userName = "Иван";

    const currentHour = new Date().getHours();

    let timeOfDay; // переменная для хранения приветствия
    if (currentHour < 4) {
        timeOfDay = 'Доброй ночи';
    }
    else if (currentHour < 12) {
        timeOfDay = 'Доброе утро';
    } else if (currentHour < 18) {
        timeOfDay = 'Добрый день';
    } else {
        timeOfDay = 'Добрый вечер';
    }

    return (
        <div className="greeting">
            <h1>{timeOfDay}, {userName}!</h1>
            <p>Рады видеть Вас!</p>
        </div>
)
}

export default Greeting;