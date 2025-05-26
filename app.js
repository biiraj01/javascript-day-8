function getdata(dataId ,getNextdata)
{
    setTimeout(()=>{
        console.log("Data: ",dataId);

        if(getNextdata)
        {
            getNextdata();
        }
    },2000);
}

getdata(3,()=>{
    getdata(4,()=>{
        getdata(5,()=>{
        })
    })
});
