const mongoose = require('mongoose');

try {
  // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
  mongoose.connect(process.env.DATABASE_URL,{ serverApi: { version: '1', strict: true, deprecationErrors: true } })
  const db = mongoose.connection
   db.on('error',error => console.error(error))
   db.once('open',() => console.log("connected"))
} finally {
  // Ensures that the client will close when you finish/error
   mongoose.disconnect();
}