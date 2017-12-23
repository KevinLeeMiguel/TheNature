var express               = require("express"),
app                   = express();

app.set("view engine","ejs");
app.use(express.static("public"));

app.get("/",function(req,res){
    res.render("index"); 
 });
app.get("/about",function(req,res){
      res.render("aboutus");
});
app.get("/services",function(req,res){
      res.render("services");
});
//  app.listen(process.env.PORT,process.env.IP, function(){
//        console.log("the nature Server Started");
//       });

      app.listen(1000,function(){
            console.log("Care Server Started");
        });