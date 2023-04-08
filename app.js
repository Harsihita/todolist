const express= require("express");
const bodyParser= require("body-parser");

const app=express();
let items=["Buy eggs",]
let workitems=[]

app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"));

app.get("/",function(req,res){


var today =new Date();

var options ={
    weekday:"long",
    day:"numeric",
    month:"long"
}
 
var day = today.toLocaleDateString("en-IN",options)

res.render("lists",{listTitle:day, newitemlist: items})

});

app.post("/",function(req,res){
    let item=req.body.newItem;
    
    if(req.body.list==="Work"){
        workitems.push(item)
        res.redirect("/work")
    }
    else{
        items.push(item);
        res.redirect("/");
    }
    
})
app.get("/work",function(req,res){
    res.render("lists",{listTitle:"Work list", newitemlist: workitems})
})



app.listen(3000,function(){
    console.log("Server port")
})