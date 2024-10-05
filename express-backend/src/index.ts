import express from 'express'
import { createClient } from 'redis'
const app = express()
app.use(express.json());

const client = createClient();

client.connect();

app.post('/submit', async (req,res) => {
    const { problemid , userId, code , languages} = req.body;

    //push this to db/redis
    await client.lPush('submissions',JSON.stringify({problemid,userId,code, languages}))
    res.json({
      message:"Submission received"  
    })
})

app.listen(3000, () => {
    console.log("server is running");
    
});