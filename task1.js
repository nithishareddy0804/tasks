// doubt session task

for(i=1;i<=100;i++){
    if(i%3===0 && i%5===0){
        console.log("fizzbuzz")
    }else if(i%3===0){
        console.log("fizz")
    }else if(i%5===0){
        console.log("buzz")
    }else{
     console.log(i)   
    }
}

//doubt session task
function amstr(){
    for(i=1;i<10;i++){
        for(j=0;j<10;j++){
            for(k=0;k<10;k++){
                var power= Math.pow(i,3)+ Math.pow(j,3)+ Math.pow(k,3)
                var total=i*100+j*10+k*1;
                if(power==total){
                    console.log(power);
                }
            }
        }
    }
}
amstr();



//pattern
var line="";
for(i=4;i>=1;i--){
    for(j=1;j<=i;j++){
        line+="*";
    }
    line+="\n";
}
console.log(line)

//pattern

var line="";
for(i=4;i>=1;i--){
    for(j=1;j<=i;j++){
        line+="*";
    }
    line+="\n";
}
console.log(line)

//monitoring session task


var obj={
    name : "nithisha",
    id : "123",
    salary : "50k",
}
debugger;
obj["salary of employee"] = obj["salary"];
delete obj["salary"];
console.log(obj);



//problem solving task
var a=2;
var b=3;
var c=4
console.log(Math.max(a,b,c),"elder");
console.log(Math.min(a,b,c) ,"younger");

