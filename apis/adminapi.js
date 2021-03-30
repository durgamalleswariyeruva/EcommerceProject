const exp=require("express");
const adminApiObj=exp.Router();
const errorHandler=require("express-async-handler");
const { ErrorHandler } = require("@angular/core");
//import 
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary")
const multer = require("multer")
//configure cloudinary
cloudinary.config({
    cloud_name: 'dtrhafbol',
    api_key: '471847945156575',
    api_secret: 'H7vKMedZ5nAeWlIjbjtNebdk3OY'
});
//configure cloudinary storage

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'adminproduct',
        format: async (req, file) => 'jpg', // supports promises as well
        public_id: (req, file) => file.fieldname + '-' + Date.now()
    },
});
//congigure multer
var upload = multer({ storage: storage });
//extract body of req obj
adminApiObj.use(exp.json())


adminApiObj.post("/productdetails",upload.single('photo'),errorHandler(async (req,res,next)=>{
    console.log("url is ",req.file.path);
    //get product collectionobject

    let productCollectionObj=req.app.get("productCollectionObj");
   console.log("product details obj is",req.body)
   let proObj=JSON.parse(req.body.proObj);
    //add Imagelink
    proObj.ImgLink = req.file.path;
let success=await productCollectionObj.insertOne(proObj)
        res.send({message:"product created"})

    
}))
adminApiObj.get("/getlist",errorHandler(async (req,res,next)=>{
    let productCollectionObj = req.app.get("productCollectionObj") 
  
    let proObj=await productCollectionObj.find().toArray();
    console.log("list is",proObj);

    res.send({message:"success",list:proObj})
    
    }))
adminApiObj.post("/delete",errorHandler(async(req,res,next)=>{
    
        let productCollectionObj = req.app.get("productCollectionObj");
        let productObj =  req.body;
        
        console.log("product object is",productObj);
        //check for product in db
        let product = await productCollectionObj.findOne({pname:productObj.pname});
    
        if(product!==null){
            let remove=await productCollectionObj.deleteOne({pname:productObj.pname});
            res.send({message:true});
        }
    
    }))



























module.exports=adminApiObj;