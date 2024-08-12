import express from 'express';
import { Users } from './controllers/Users.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const users = new Users();

app.use(express.json()); // Built-in middleware to parse JSON request bodies

app.get('/users', (req, res) => users.fetchUsers(req, res));
app.get('/users/:id', (req, res) => users.fetchUser(req, res));
app.post('/users', (req, res) => users.createUser(req, res));
app.put('/users/:id', (req, res) => users.updateUser(req, res));
app.delete('/users/:id', (req, res) => users.deleteUser(req, res));
app.post('/login', (req, res) => users.login(req, res));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
