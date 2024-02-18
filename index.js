// let fruits =["mango","lemon","apple","banana"]

// fruits[1]="waterlemon";
// console.log("update",fruits)



// fruits.splice(0,2)
// fruits[2]="dog"
// console.log(fruits)



// object


// let people={
//     name: "thanh",
//     age:20,
//     height:"1m7"
// }

// people.weight="56kg"
// console.log("create",people)

// // update
// people.age=21
// console.log("update",people)


// // delete
// delete people.weight;
// console.log("delete",people)


// BT2
// let goods={
//     made_in :"china"
// }
// console.log(goods)

// goods.made_in="japan"
// console.log(goods)

// delete goods.made_in;
// console.log(goods)


let people = [
    {name :"nga",age:21},
    {name :"ngb",age:22},
    {name :"ngc",age:23}
]

function searchName(){
    var name= document.getElementById("searchinput").value;
    var index=false
    for(i=0; i<people.length; i++){
        if(people[i] && name.toLocaleLowerCase() === people[i].name.toLocaleLowerCase()){
            document.getElementById("searchresult").innerHTML=`
            <p>tên:${people[i].name}</p>
            `
            index=true;
        }
        
    }
    if(index==false){ document.getElementById("searchresult").innerHTML=`
    <p>ko có người </p>
    `}

    
    
}