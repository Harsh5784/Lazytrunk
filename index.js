let obj = {
    name:"Harsh Bhasin",
    Course : "BCA"
}

let jsinjson = JSON.stringify(obj);

console.log(jsinjson);

let jsoninjs = JSON.parse(jsinjson);

console.log(jsoninjs);