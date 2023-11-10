import product from '../model/productRoute.js'



export const getproduct= async (req ,res)=>
{
      try{
        let getprod=await product.find();
        res.status(200).send(getprod);
    }
      catch(error)
      {
        res.status(500).send(error);
      }
}   