const mongoose = require("mongoose");
dbConnect()
async function dbConnect(){

  try {
    await mongoose.connect('mongodb+srv://Tayyb:<Password>@mernstack.kuvke.mongodb.net/test' , {useNewUrlParser : true});
    console.log('Database Connection success')
  } catch (error) {
    console.log('Mongo DB Connection failed')
  }

}
module.exports = mongoose
