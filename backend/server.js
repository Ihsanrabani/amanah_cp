import express, { application } from 'express';
import cors from 'cors';

const app = express()
const PORT = 4343

app.use(express.json())
app.use(cors())

app.listen(PORT, () => {
    console.log("SERVER BERJALAN...")
})