// primitive tipe daata yg mewakili satu nilai
let primitive = [
  "number", "bigInt", "String", "Boolean", "undifined", "symbol"
]
console.table(primitive)

// number
let hippoAge = 10
let hippoWeight = 290.0

// bigInt
const hippoEra = 1234567890123456789012345678901234567890n 

// string
const hippo = 'keren'
const hippoName = "igi"
const hippoFriend = `aksel` // template literal

// boolean
const isHippoHungry = true
const isHippoExtinct = false

// undifined
let dinoAge;

// symbol
const hippoID = Symbol('id');

// Object, tipe data yg dapat menyimpan banyak value
const blueHippo = {
  age : 20,
  height : "1.5 m",
  weight : "30 kg"
}

const yellowDino = new Object; //create new object using keyword new
console.log(`Tinggi blue hippo adalah ${blueHippo.height}`)