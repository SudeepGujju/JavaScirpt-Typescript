function fnProm(arg){

    if(arg == 1)
        return Promise.resolve("Promise Resolving");
    else
        return Promise.reject("Promise Rejecting");
}

fnProm(1)
    .then((i)=>{
        console.log(i);
    })
    .catch((err)=>{
        console.log(err);
    });

fnProm(0)
    .then((i)=>{
        console.log(i);
    })
    .catch((err)=>{
        console.log(err);
    });

console.log("Promises makes a function async");

function fnProm1(a,b){

    if(b != 0)
        return Promise.resolve(a/b);
    else
        return Promise.reject("Denominator should not be zero");

}

fnProm1(10,2)
    .then((i)=>{ console.log(i); })
    .catch((err)=>{ console.log(err); });

fnProm1(8,0)
    .then((i)=>{ console.log(i); })
    .catch((err)=>{ console.log(err); });

function fnPromObj(){

    var Prom = new Promise(function(res,rej){
            res(`Calling Resolve`);
            rej('');
        });
    return Prom;
}
console.log(fnPromObj());

function fnPromObj2(){

    let Arr = [];
    for(var i=1; i<5; i++){

        var Prom = new Promise(function(res,rej){
            res(`Calling Resolve - ${i}`);
        });
        Arr.push(Prom);
    }
    return Arr;
}
console.log(fnPromObj2());
/*
function fnObservable()
{
   return Observable.create((obs)=>{

        for(var i=1; i<5; i++){
            obs.next(i);
        }
   });
}

console.log(fnObservable());

fnObservable().subscribe((i)=>{
    console.log(i);
});

*/