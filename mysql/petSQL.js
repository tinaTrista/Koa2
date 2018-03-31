
 // 使用model
const model = require('./model');
let now = Date.now()
let Pet = model.Pet;
// 定义pet 数据库操作对象
function petSQL() {
  this.Pet = Pet;
}

 function createPet(name) {
  console.log(name);
  var dog =  Pet.create({
    id: 'd-' + now,
    name: name,
    gender: false,
    birth: '2008-08-08',
    createdAt: now,
    updatedAt: now,
    version: 0
  });
  console.log('created: ' + JSON.stringify(dog));
}
 function queryPet(name) {
  var pets =  Pet.findAll({
    where: {
      name: name
    }
  });
  return pets;
}

 function delPet(name) {
  var re =  Pet.destroy({
    where: {
      name: name
    }
  })
  console.log(re)
}
 function update(name) {
    var p =  Pet.update(
      {name:'lisa'},
      {where: {
        name: name
      }}
    )
    console.log(p)
}


petSQL.prototype.createPet= createPet;
petSQL.prototype.queryPet = queryPet;
petSQL.prototype.delPet = delPet;
petSQL.prototype.update = update;
module.exports = petSQL;
