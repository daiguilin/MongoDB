var newInterest = ["Sing", "Dance", "Code"];
var db = connect("company");
// db.workmate.update({ name: "xiaoWang" }, { $addToSet: { "interest": { $each: newInterest } } })
// db.workmate.update({ name: "xiaoWang" }, { $pop: { "interest": -1 } })
// db.workmate.update({ name: "xiaoWang" }, { $set: { "interest.2": "Code" } })

// db.workmate.update({ sex: 1 }, { $set: { money: 1000 } }, false, true)
// var resultMessage = db.runCommand({ getLastError: 1 })
// printjson(resultMessage);

var myModify = {
    findAndModify: "workmate",
    query: { name: 'JSPang' },
    update: { $set: { age: 18 } },
    new: true //更新完成，需要查看结果，如果为false不进行查看结果
}

var ResultMessage = db.runCommand(myModify);
printjson(ResultMessage)