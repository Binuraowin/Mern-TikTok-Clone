import  express from 'express'
import mongoose from 'mongoose'
import Data from './data.js'
import Videos from './dbModel.js'

//app config
const app = express();
const port = 9000;

//DB config
const connection_url = 'mongodb://admin:admin@cluster0-shard-00-00.wevar.mongodb.net:27017,cluster0-shard-00-01.wevar.mongodb.net:27017,cluster0-shard-00-02.wevar.mongodb.net:27017/tiktok?ssl=true&replicaSet=atlas-87hyzp-shard-0&authSource=admin&retryWrites=true&w=majority';
mongoose.connect(connection_url,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
});

//middlewares
app.use(express.json());
app.use((req,res,next) =>{
    res.setHeaders('Access-Control-Allow-Origin','*'),
        res.setHeaders('Access-Control-Allow-Headers','*'),
        next()
})

// end points
app.get("/", (req,res) => res.status(200).send("hello world"));

app.get("/v1/posts", (req,res) => res.status(200).send(Data));

app.post("/v2/posts", (req,res) =>
{
    const  dbVideoes = req.body
    Videos.create(dbVideoes,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }else {
            res.status(201).send(data)
        }
    })
});

app.get("/v2/posts", (req,res) =>
{

    Videos.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }else {
            res.status(200).send(data)
        }
    })
});


// listen
app.listen(port,() => console.log('hgksdjhsa'));
