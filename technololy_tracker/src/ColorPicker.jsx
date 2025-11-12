// src/ColorPicker.jsx
import { useState } from 'react';
import ColorControls from "./ColorControls.jsx";
import ColorDisplay from "./ColorDisplay.jsx";

// родительский компонент - хранит состояние
function ColorPicker() {
    // состояние находится здесь, в родителе
    const [selectedColor, setSelectedColor] = useState('#ff0000');

    return (
        <div className="color-picker" style={{ margin: '20px 0', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
            <h2>Выбор цвета</h2>
            {/* передаём текущий цвет в ColorDisplay */}
            <ColorDisplay color={selectedColor} />
            {/* передаём и цвет, и функцию для его изменения */}
            <ColorControls
                color={selectedColor}
                onColorChange={setSelectedColor}
            />
        </div>
    );
}

export default ColorPicker;