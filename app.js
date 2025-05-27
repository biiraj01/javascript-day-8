// function getdata(dataId ,getNextdata)
// {
//     setTimeout(()=>{
//         console.log("Data: ",dataId);

//         if(getNextdata)
//         {
//             getNextdata();
//         }
//     },2000);
// }

// getdata(3,()=>{
//     getdata(4,()=>{
//         getdata(5,()=>{
//         })
//     })
// });


function getdata(dataId)
{
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            console.log("Data: ",dataId);
            resolve("Succeess");
        },3000);
    });
}

console.log("Fetching data 1....");
getdata(1).then((res)=>{
    console.log(res);
    console.log("Fetching data 2....");
    return getdata(2);
}).then((res)=>{
    console.log(res);
    console.log("Fetching data 3....");
    return getdata(3);
}).then((res)=>{
    console.log(res);
});