const MongoClient = require( 'mongodb' ).MongoClient;
const url = "mongodb://localhost:27017";

var _db;

module.exports = {
  connectToServer:() =>  new Promise((resolve, reject) => {
    MongoClient.connect( url,  { useNewUrlParser: true }, function( err, client ) {
      _db  = client.db('topicos');
      if(err){
        reject(err);
      }else{
        resolve();
      }
    } );
  }),

  getDb: function() {
    return _db;
  }
};