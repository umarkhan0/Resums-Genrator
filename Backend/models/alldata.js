import mongoose from "mongoose";
// const {Schema} = "mongoose"
const UserSchema = mongoose.Schema({
    daata: {
        experienceEndInfo: {
            contect: {
            type: Object,
            },
            experiecePage: {
                type: Array
            },
            education:{
                type: Object
            },
            language: {
                type: Object
            },
            skillsfinal:{
                type: Object
            }

                },
                summry: {
                    type: String
                }
    }
});
const AllData = mongoose.model("alldata" , UserSchema);
export default AllData