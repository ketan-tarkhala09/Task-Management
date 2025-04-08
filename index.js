
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const dotenv = require('dotenv');
const sequelize = require('./config/db');
const cookieParser = require('cookie-parser');
const taskRoutes = require('./routes/taskRouter');
const userRoutes = require('./routes/userRouter');
const categoryRoutes = require('./routes/categoryRouter');
const authRoutes=require("./routes/authRouter");
const auth = require('./middlewares/auth');

dotenv.config();
const app = express();
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: '*' } });

//Middle ware
app.use(cookieParser());
app.use(express.json());
  

// Routes
app.use("/api/auth",authRoutes)
app.use('/api/tasks',auth, taskRoutes(io));
app.use('/api/users',auth, userRoutes);
app.use('/api/categories',auth, categoryRoutes);


const PORT = process.env.PORT || 5000;


sequelize.sync({ alter: true }).then(() => {
  server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => console.error('Error to connect with database :', err));
