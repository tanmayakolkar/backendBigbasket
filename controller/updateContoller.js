import product from '../model/productRoute.js'


 export const  updateproduct=async ( req ,res)=>
{
      let id=req.params.id;

      try{
           let updatedProduct=
           {
            name:req.body.name,
            price:req.body.price,
            qty:req.body.qty,
            info:req.body.info,
            image:req.body.image
           }
           let newOne=await product.findByIdAndUpdate(id,{
            $set:updatedProduct
           })
           res.status(200).send(newOne)

         }
      catch(error)
      {
        console.log(error)
        res.status(500).send(error)

      }
}