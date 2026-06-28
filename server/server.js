import express from 'express';
import 'dotenv';
import cors from 'cors';

const app = express();

// MiddleWares
app.use(cors);
app.use(express.json());

// Routes
app.get('/', (req, res) => res.send("API is working"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Server is running on Port : ', PORT);
})

export default app;