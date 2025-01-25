import express from 'express';
import fileUpload from 'express-fileupload';
import { resolve } from 'node:path';

const app = express();
app.use(express.static(resolve('./public')));

app.get('/', (request, response) => {
  response.status(200).send('<h1>안녕!</h1>');
});

app.listen(4000, () => {
  console.log('백엔드 프로그램 서버 구동 http://localhost:4000');
});
