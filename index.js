
// POST DATA

const fetchData = async () =>{
    fetch("https://jsonplaceholder.typicode.com/posts"),{
    method:"POST",
    headers:{
     "contant_type":"application/json",
    },
    body: JHSON.stringfy({
     tittle:"New Post",
     body:"This is a new post contant",
     userId:1
    })
}

.then((data)=>{
    console.log(data,"post created",data);
})
.catch((error)=>{
    console.error("Error",error);
})
 

}



