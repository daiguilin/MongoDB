var db = connect('company')
db.workmate.find(
    { "skill.skillOne": "HTML+CSS" },
    { name: true, "skill.skillOne": true, _id: false }
)

db.workmate.find({ age: { $nin: [25, 33] } },
    { name: 1, "skill.skillOne": 1, age: 1, _id: 0 }
)
db.workmate.find({}, { name: true, age: true, _id: false }).limit(0).skip(2).sort({ age: 1 });