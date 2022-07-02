import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));

app.get('/', (_req, res) => {
    res.json({ welcome: 'mr david' });
});

const port = +(process.env.PORT ?? 8080);

app.listen(port, '0.0.0.0', () => {
    console.log(`server started at http://localhost:${port}`);
})