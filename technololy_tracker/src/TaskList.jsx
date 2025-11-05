function TaskList() {

    // массив задач - каждая задача это объект с уникальным id
    const tasks = [
        { id: 1, title: 'Изучить JSX', completed: true },
        { id: 2, title: 'Разобраться с компонентами', completed: false },
        { id: 3, title: 'Освоить работу с props', completed: true },
        { id: 4, title: 'Отклеить этикетки от бананов', completed: false },
        { id: 5, title: 'Сделать пример номер 3', completed: true }
    ];

    return (
        <div className="task-list">
            <h2>Список задач:</h2>
            <ul>
                {
                    tasks.map(task => (
                        <li key={task.id} className={task.completed ? 'completed' : 'pending'}>
                            <span>{task.title}</span>
                            <div>{task.completed ? '✅' : '⏳'}</div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default TaskList;