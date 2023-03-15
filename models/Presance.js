import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    presance:{type:String},
    date:{type:Date,required:true},
    idUser:{type:String,required:true},
    idSubject:{type:String,required:true}
})

export default mongoose.model('Presance' , userSchema)
