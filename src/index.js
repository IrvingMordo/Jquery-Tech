import app from "./app.js";
import dbs from "./db.js";
app.listen(process.env.PORT,()=>{
  console.log('Listen on port ' + process.env.PORT)
}) 
