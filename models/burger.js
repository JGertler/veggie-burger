//this requires our ORM and contains
//all the methods we will need to modify the ORM for use with the burgers database

var orm= require ('../config/orm.js');

var burger = {
  all: function (callback){
    //'burgers' is our tableInput
    orm.all ('burgers', function(res){
      callback(res);
    })
  },
  update: function(id, callback) {
    orm.update('burgers', id, callback);
  },
  create: function(name, callback) {
    orm.create('burgers', name, callback);
  },
  spit: function(burger_name, callback) {
    orm.spit('burgers', burger_name, callback);
  }
}

module.exports = burger;
