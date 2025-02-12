
const mongoose = require('mongoose');

module.exports = {
    Connect : async () => {
   
       await mongoose
       .connect(process.env.MONGO_URI)
       .then((conn) => console.log(`connected to mongodb  on ${conn.connection.host}`))
       .catch ((error)=> 
       console.log(`connexion failed to mongodb`, error));
   }}