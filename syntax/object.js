var members=['egoing', 'kim', 'hoie'];
console.log(members[1]);//kim

var i=0;
while(i<members.length){
    console.log('array loop', members[i]);
    i=i+1;

}
var roles={
    'programmer':'egoing',
    'designer':'kim',
    'manger':'hoie'
}
console.log(roles.designer);//kim
console.log(roles['designer']);//kim

for(var name in roles){
    console.log('object ==> ', name, 'value ==> ', roles[name]);
}