import product from '../model/productRoute.js'



export const singlePrduct= async( req,res)=>
{

    let id=req.params.id;
    console.log("id",id )
    try
    {
         let singleRecord=await product.findById(id)
         console.log(singleRecord)
         res.status(200).send(singleRecord)
    }
    catch(error)
    {
      res.status(500).send(error)
    }

}