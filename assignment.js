const students = [{ name:"Athul ATK",marks:100 , age: 18},
{name:"Rahuk Giri",marks:22,age:19},
{name:"Adersh Vijayan",marks:88,age:18}
]
let marks= (item) => console.log(`${item.name}-${item.marks}`)
students.map(marks)

//JSON
const person = '{"firstName":"Athul", "lastName": "ATK","age":50,"height":182}';
const obj = JSON.parse(person);
console.log(obj);

obj.weight = 80;            //adding property
delete obj.lastName;        //deleting property
console.log(obj);

