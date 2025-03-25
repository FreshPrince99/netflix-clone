import express from 'express'; // For this we have to change the type field in the package.json file as module
import authRoutes from './routes/auth.route.js';

const app = express();

app.use("/api/v1/auth", authRoutes);

app.listen(5000, () => {
    console.log("Server started at http://localhost:5000");
});