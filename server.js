const app = require('./app');
const db = require('./config/db.js');

db.then(() => {
  app.listen(3001, () => {
    console.log("Server running. Use our API on port: 3001")
  })

}).catch(console.error)


