var connection= require('./connection.js');

var orm = {
  all: function(tableInput, callback){
    connection.query('SELECT * FROM '+tableInput+';', function (err,
    result){
      if(err) throw err;
      callback(result)
    })
  },
  update: function(tableInput, condition, callback) {
    connection.query('UPDATE ' +tableInput+ ' SET devoured=true WHERE id='+condition+';', function(err, result){
      if (err) throw err;
      callback(result);
    })
  },
  create: function(tableInput, value, callback){
    connection.query('INSERT INTO ' +tableInput+ " (burger_name) VALUES ('"+value+"');", function (err, result){
      if (err) throw err;
      callback(result);
    })
  },
  spit: function(tableInput, condition, callback){
    connection.query('UPDATE ' +tableInput+ " SET devoured=false WHERE burger_name=('"+condition+"');", function(err, result){
      console.log(condition);
      if (err) throw err;
      callback(result);
    })
  }
};

// Export the orm object for the model (burger.js).
module.exports = orm;
