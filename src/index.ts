import express, {json} from 'express';
import createError from 'http-errors';
import morgan from 'morgan';
import ApiRouter from './routes';


const app = express();
const PORT = (process.env.PORT || 8000);

app.use(morgan('tiny'));
app.use(json());

app.get('/', (req, res) => res.send('Express + TypeScript Server 2'));
app.use('/api', ApiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
  });

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});