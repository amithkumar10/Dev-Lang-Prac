//CALLBACK FUNCTIONS
// A callback function is a function (fn1) that is passed as an argument to another function (fn2) to be executed at some point during or after fn2’s execution. This allows fn2 to call fn1 when a specific event occurs or when a certain condition is met, enabling asynchronous behavior and event-driven programming.

//Example

function sum(x, y, callback){
    total = x+y;
    callback(total);
}

function display(total){
    console.log("The sum is: " + total);
}

sum(3, 4, display); 


//------------------------------------------Next Topic--------------------------------------------------

//PROMISES
// A Promise is an object representing the eventual completion or failure of an asynchronous operation. It allows you to write cleaner and more manageable asynchronous code by providing a way to handle success and failure cases without deeply nested callbacks (callback hell).

//Example of Callback Hell

function walkDog(callback){
    setTimeout(()=>{
        console.log("Dog walked");
        callback();
    }, 3000)
};

function cleanKitchen(callback){
    setTimeout(()=>{
        console.log("Kitchen cleaned");
        callback();
    }, 2000)
};

function doLaundry(callback){
    setTimeout(()=> {
        console.log("Laundry done");
        callback();
    }, 1000)
}

//Now we need to do these tasks in order: walkDog -> cleanKitchen -> doLaundry
//So we use callbacks ------But this leads to callback hell

walkDog(()=>{
    cleanKitchen(()=>{
        doLaundry(()=>{
            console.log("All tasks done!");
        })
    })
});

//Hence we use Promises to avoid callback hell

//Example of Promises

function studyDSA(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve("Study DSA")
        }, 1000)
    })
}

function studyOOPs(){
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            resolve("Study OOPs")
        },1500)
    })
}


function studyDBMS(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Study DBMS")
        },100)
    })
} 


//Now we can chain these promises to do the tasks in order
studyDSA().then((message)=>{
    console.log(message);
    return studyOOPs();
}).then((message)=>{
    console.log(message);
    return studyDBMS();
}).then((message)=>{
    console.log(message);
    console.log("All studies done!");
})


