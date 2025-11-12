// компонент с кнопками для выбора цвета
function ColorControls({ color, onColorChange }) {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'];

    return (
        <div className="color-controls">
            <h3>Выберите цвет:</h3>
            <div className="color-buttons">
                {colors.map((col) => (
                    <button
                        key={col}
                        style={{
                            backgroundColor: col,
                            border: color === col ? '3px solid #000' : '1px solid #ccc',
                            padding: '10px 20px',
                            margin: '5px',
                            cursor: 'pointer',
                            borderRadius: '5px'
                        }}
                        onClick={() => onColorChange(col)}
                    >
                        {col}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default ColorControls;