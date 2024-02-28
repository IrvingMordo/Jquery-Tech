import mongoose from "mongoose";

mongoose.connect(process.env.CONECTION_STRING)
.then(db => console.log('DB connected'))
.catch(err => console.error(err))

export default mongoose;
