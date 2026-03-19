const app = require('./server/app.js');
const PORT = 3000;

app.get("/",(req,res)=>{
    res.send("Authforge Homepage is Here 🚀");
})

app.listen(PORT,()=>{
    console.log(`Server Started at Localhost: ${PORT}`)
});
