import express from "express";
import { addProduct } from "../controller/productController.js";
import { getproduct } from "../controller/getproductContoller.js";
import { singlePrduct } from "../controller/getSingleproductContoller.js";
import { delproduct } from "../controller/delSinglePrductContoller.js";
import { updateproduct } from "../controller/updateContoller.js";

const router=express.Router()


//product creation

router.post('/product',addProduct)
router.get('/product',getproduct)
router.get('/product/:id',singlePrduct)
router.delete('/product/:id',delproduct)
router.put('/product/:id',updateproduct)


export default router;