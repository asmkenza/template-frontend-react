import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import dbAtlasConnect from './config/dbAtlasConfig.js';
import dbCompassConnect from './config/dbCompassConfig.js';
import adminRoutes from './routes/adminRoutes.js'

dotenv.config()
const PORT= process.env.PORT || 5000

//server mis en place
const app = express();

if(process.env.NODE_ENV==="developement"){
app.use(morgan('dev'))
}

app.use(express.json())


//connection à la bdd
dbAtlasConnect();
//dbCompassConnect();


//écoute sur le port spécifié
app.listen(PORT,()=>{
    console.log(`app is listening on port ${PORT} `);
   })


//Middleware des routes admin
app.use("/admin",adminRoutes)