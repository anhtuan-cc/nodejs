var express = require("express"); //goi module thu vien khac vao
var app = express(); // tao 1 ung dung tu express module
var port = process.env.PORT | 5000;
app.listen(port,function (){
    console.log("Sever is running...");
});
app.use(express.static("public"));//cap quyen truy cap cac file static (file tinh: css,imd, jquery...)
app.set("view engine","ejs"); //Báo rằng sẽ sử dụng ejs làm view engine
var count = 0; // dem so luong nguoi vao web
// routing - bo dinh tuyen (Nhan vien cua van phong)
app.get("/",function (req,res){
    // res.send("Xin chao quy khach......");//html- chi la 1 chuoi doi voi may chu
    // res.sendFile(__dirname+"/public/demobootsap.html");  //__dirname: Xuat cho chung ta 1  duong dan chinh xac tren may tinh
    count++;
    res.render("home",{
        count: count
    }); //tự động hiểu để lấy file home.ejs trong thư mục views
});
// app.get("/ke-toan",function (reg,res){
//     count++;
//     res.sendFile(__dirname+"/public/demobootstap.html");
});
app.get("/ke-toan",function (reg,res){
    count++;
    var products = [
        {
            id:1,
            name:"Product 1",
            image: "images/dtvn.jpg"
        },
        {
            id:2,
            name:"Product 1",
            image: "images/dtvn.jpg"
        },
        {
            id:3,
            name:"Product 1",
            image: "images/dtvn.jpg"
        },
        {
            id:4,
            name:"Product 1",
            image: "images/dtvn.jpg"
        }
    ];
    res.render("ketoan",{
        products:products
    });
});
app.get("/chi-tiet",function (reg,res){
    var masp = reg.query.id;
    //khi co id,tim kiem theo id trong array
    var p = {};
    for(var i=0;i<products.length;i++){
        if(products[i].id == masp){
            p = products[i];
            break;

        }
    }
    res.render("chitiet",{
        masp:map,
        p: p
    })
})
