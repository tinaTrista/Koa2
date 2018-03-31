
 // 使用model
const model = require('./model');
let now = Date.now()
let User = model.User;

function user() {
  this.User = User;
}

function add(name) {
  var dog = User.create({
    name: name,
    gender: false,
    passwd: '123123',
    email:'xx@dd.com'
  })
  console.log('created: ' + JSON.stringify(dog));
}
function query(name) {
  var Users = User.findAll({
    where: {
      name: name
    }
  });
  return Users;
}

function del(name) {
  var re = User.destroy({
    where: {
      name: name
    }
  })
  console.log(re)
}
function update(name) {
    var p =  User.update(
      {name:'lisa'},
      {where: {
        name: name
      }}
    )
    console.log(p)
}


user.prototype.add = add;
user.prototype.query = query;
user.prototype.del = del
user.prototype.update = update;
module.exports = user
