import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './router.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost/task-list", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.once('open', () => {
    console.log('Database connection - successful')
});

mongoose.connection.on('error', (error) => {
    console.log('Error connecting to database', error)
});

mongoose.Promise = global.Promise;

app.use('/users/3', router);

app.get('/', (req, res) => res.end('<h1>server is up</h1>'));

const port = 3001;
app.listen(port, () => console.log('server running on port' + port));