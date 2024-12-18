import express from 'express';
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3000;

app.use(express.static('public'))

app.listen(PORT, () => {
    console.log(`Running your sweet app!`);
});