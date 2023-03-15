import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import userRouter from './routes/users.js';
import subjectRouter from './routes/subject.js';
import presanceRouter from './routes/presance.js';

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use('/users', userRouter);
app.use('/subject', subjectRouter);
app.use('/presance', presanceRouter);

const PORT = 5000; 
const CONNECTION_URL ="mongodb+srv://sdrosssi:053443478512@cluster0.twqhdbw.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`successded: ${PORT}`)))
    .catch((error) => console.log(error.message));

