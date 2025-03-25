import express from 'express'; // For this we have to change the type field in the package.json file as module

import authRoutes from './routes/auth.route.js';
import { ENV_VARS } from './config/envVars.js';
import { connectDB } from './config/db.js';

const app = express();
const PORT = ENV_VARS.PORT;

app.use(express.json()); // this will allow us to parse req.body object in the controllers
app.use("/api/v1/auth", authRoutes);

app.listen(PORT, () => {
    console.log("Server started at http://localhost:"+ PORT);
    connectDB();
});