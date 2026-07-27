function fetchUser(id){
    return new Promise((resolve, reject)=>{
       setTimeout(()=>{
        if(id){
            resolve({user:"jane",age:21})
        }else{
            reject("user not found")
        }

       },1000);
    })
}
fetchUser(1).then(console.log).catch(console.error);
async function getUser() {
    try{
        const user = await fetchUser(0);
        console.log(user);
    }catch(ex){
        console.error(ex);
    }
}
function someFn(){
    console.log("some func called")
}
getUser();
someFn();