import mongoose from "mongoose";
mongoose.connect(process.env.MONGOS_KEY);
export default mongoose;