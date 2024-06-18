const express = require('express');
const app = express();
const { sequelize } = require('./models');
const reservationRoutes = require('./routes/reservationRoutes');
const taskRoutes = require('./routes/taskRoutes');

app.use(express.json());

app.use('/api/reservations', reservationRoutes);
app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});