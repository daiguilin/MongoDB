var startTime = (new Date()).getTime();
var db = connect('company');

var rs = db.randomInfo.find({ username: 'ojb8vw5y', randNum0: 160831 }).hint({ randNum0: 1 });

rs.forEach(rs => { printjson(rs) });


var runTime = new Date().getTime() - startTime;
print('[Demo]this run time is ' + runTime + 'ms');