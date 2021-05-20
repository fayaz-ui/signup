const express=require("express");
const request=require("request");

const app=express();
app.get("/", function(request,response){
    response.sendFile(__dirname+"/signup.html");
    
})






app.listen(3000, function(){
    console.log("server started on port 3000");
});