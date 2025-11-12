
// компонент для отображения выбранного цвета
function ColorDisplay({ color }) {
    return (
        <div
            className="color-display"
            style={{
                backgroundColor: color,
                width: '200px',
                height: '100px',
                margin: '10px 0',
                border: '2px solid #333',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <p style={{ color: '#fff', textShadow: '1px 1px 2px #000' }}>
                Выбранный цвет: {color}
            </p>
        </div>
    );
}

export default ColorDisplay;