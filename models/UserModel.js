import mongoose from 'mongoose';
const { Schema } = mongoose;

const User = new Schema({
  username:  {
    type:String,
    required:[true,'please add username']
  },
  email: {
    type:String,
    required:[true,'please add email']
  },
  password:   {
    type:String,
    required:[true,'please add password']
  }, 
},
{
  timestamps:true
});


export default mongoose.model('User', User)