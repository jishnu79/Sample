import express,{json} from "express";
import dotenv from 'dotenv'
import cors from 'cors'
import text from './Router/TextRoute'

const app = express();
  
dotenv.config(); 
app.use(cors())
app.use(json({limit:'60mb'}));

app.use('/api',text)


const port = process.env.PORT;

app.listen(port, () => { 
    console.log(`User Server is running at ${port}`);  
  });
  