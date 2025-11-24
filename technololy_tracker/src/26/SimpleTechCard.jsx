import React from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Chip,
  Box
} from '@mui/material';

// компонент карточки технологии с использованием Material-UI
function SimpleTechCard({ technology, onStatusChange }) {
  // функция определения цвета чипа в зависимости от статуса
  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'success';
      case 'in-progress': return 'warning';
      default: return 'default';
    }
  };

  // функция получения текста статуса на русском языке
  const getStatusText = (status) => {
    switch (status) {
      case 'completed': return 'Завершено';
      case 'in-progress': return 'В процессе';
      default: return 'Не начато';
    }
  };

  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardContent>
        {/* заголовок карточки */}
        <Typography variant="h5" component="h2" gutterBottom>
          {technology.title}
        </Typography>
        
        {/* описание технологии */}
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {technology.description}
        </Typography>
        
        {/* чипы с категорией и статусом */}
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          <Chip 
            label={technology.category} 
            variant="outlined" 
            size="small" 
          />
          <Chip 
            label={getStatusText(technology.status)}
            color={getStatusColor(technology.status)}
            size="small"
          />
        </Box>
      </CardContent>
      
      {/* кнопки действий */}
      <CardActions>
        {technology.status !== 'completed' && (
          <Button 
            size="small" 
            variant="contained"
            onClick={() => onStatusChange(technology.id, 'completed')}
          >
            Завершить
          </Button>
        )}
        
        <Button 
          size="small" 
          variant="outlined"
          onClick={() => onStatusChange(technology.id, 
            technology.status === 'in-progress' ? 'not-started' : 'in-progress')}
        >
          {technology.status === 'in-progress' ? 'Приостановить' : 'Начать'}
        </Button>
      </CardActions>
    </Card>
  );
}

export default SimpleTechCard;
