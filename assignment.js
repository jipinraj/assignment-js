const students = [{ name:"Athul ATK",marks:100 , age: 18},
{name:"Rahuk Giri",marks:22,age:19},
{name:"Adersh Vijayan",marks:88,age:18}
]
let marks= (item) => console.log(`${item.name}-${item.marks}`)
students.map(marks)