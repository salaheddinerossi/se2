import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstName:{type:String,required:true},
    userName:{type:String,required:true},
    lastName:{type:String,required:true},
    id:{type:String},
    code:{type:String}
})

export default mongoose.model('User' , userSchema)
