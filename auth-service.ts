import start from './tracer';
start('auth-service');
import express from 'express';
import opentelemetry from "@opentelemetry/api";
const app = express();

app.get('/auth',(req,res)=>{
    res.json({username: 'Michael Haberman'})
    opentelemetry.trace.getActiveSpan()?.setAttribute("Username","Michael Haberman'")
})

app.listen(8080, () => {
    console.log('service is up and running!');
})