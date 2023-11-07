const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');


const UserSchema=new Schema({
    email:{
        type: String,
        required:true,
        unique:true,
        match: [/.+@.+\..+/, 'Please enter a valid e-mail address'] //validation of @//
    },
    password:{
        type:String,
        required:true,
        minlength:4
    },
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true // it saves spaces like "  hello" into "hello"//
        
    },
    
    
});
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });
  
  userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };

  
const User = model('User', UserSchema);

module.exports = User;