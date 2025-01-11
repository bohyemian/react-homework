import 'dotenv/config';
import express from 'express';
import type { Express } from 'express';
import { resolve } from 'path';

/* CONFIG. ------------------------------------------------------------------ */

const HOSTNAME = process.env.HOSTNAME!;
const PORT = Number(process.env.PORT) ?? 4000;
const MESSAGE = `웹 서버 구동 : http://${HOSTNAME}:${PORT}`;

/* Application -------------------------------------------------------------- */

const app: Express = express();

/* Middleware --------------------------------------------------------------- */

app.use(express.static(resolve(__dirname, '../public')));
app.use(express.json());

/* Listening ---------------------------------------------------------------- */

app.listen(PORT, HOSTNAME, () => {
  console.log(MESSAGE);
});
