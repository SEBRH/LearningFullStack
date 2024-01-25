function CallbackHell(callback){
setTimeout(() => {
    const data = "inside callbackfunc"
    console.log(data);
    callback(data);
},2000);
}

function firstfunc(data,callback){
    setTimeout(() => {const processedData = `${data} - "procesedfirst"`;
    console.log("Inside first func function")
    callback(processedData);
    },1000);
}

function secondfunc(data,callback){
    setTimeout(() => {const processedData = `${data} - "procesedsecond"`;
    console.log("Inside second func function")
    callback(processedData);
    },1500);
}

//callback Hell

CallbackHell((data) => {
    firstfunc(data, (processedData1) => {
        secondfunc(processedData1, (processedData2) => {
            console.log("finalResult " + processedData2);
            });
        });
    });

//callback hell cant always be async could be sync too

//callback hell is when you have a lot of nested callbacks

function fetchData(callback)
{
    return new Promise((resolve) => {
        setTimeout(() => {const data = "inside fecth"})
        console.log(data);  
        callback(data);
    },2000);
}

function firstFunction(data)
{
    return new Promise((resolve, reject) => {
    setTimeout(() => {
    const processedData = `${data} - processed data`;
    console.log(`inside first func function`); 
    resolve(processedData)
    },2000);
    });
}

function secondFunc(data)
{
    return new Promise((resolve, reject) => {
    setTimeout(() => {
    const processedData2 = `${data} - processed data2`;
    console.log(`inside second func function`); 
    resolve(processedData2)
    },2000);
    });
}

callbackHell()
.then((data) => firstFunction(data))
.then(processedData => secondFunc(processedData))
.then((processedData2) => console.log(`Final Result:  ${processedData2}`))
.catch(error => console.log(`error ${error}`));