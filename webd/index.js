const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const path = require("path");
const chat = require("./models/chat.js");//chat.js la require kelaay


app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));

main().then(()=>{
    console.log("connect sucess");
})

.catch((err)=>{
    console.log(err);
});



async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
  
// let chat1 = new chat({
//     from:"sanket",
//     to:"rushi",
//     msg:"rushi tu kute ahes",
//     created_at: new Date()
//   });
//   chat1.save().then((res)=>{
//     console.log(res);
//   });
  app.get("/chats",async(req,res)=>{    //async aplyava apla sagla data sdatabase madhun annun denyacha kam karto
    let chats = await chat.find();
    //console.log(chats);
    res.render("index.ejs",{chats}); // abhi ye sab deta  ham view ke andar banaya huva .ejs ke file me dalenge frontend ko denge 

  });
  // new chart cha box cha accept karnya sathi

  app.get("/chats/new",(req,res)=>{
   res.render("new.ejs");    

  });



//   // create route
  app.post("/chats",async(req,res)=>{
    let { from,msg,to} = req.body;
    let newChat = await new Chat({
        from:from,
        to:to,
        msg:msg,
        created_at: new Date(),
    });
    console.log(newChat);
    res.send('working');

//     newChat
//     .save()
//     .then((res)=>{
//         console.log("chat was saved");
//     })
//     .catch((err)=>{
//         console.log(err);

//     });
//     res.redirect("/chats");
   });



app.get("/",(req,res)=>{
    console.log("yes its work");
});
app.listen(3000,()=>{
    console.log(`listening port work on ${port}`);
});
