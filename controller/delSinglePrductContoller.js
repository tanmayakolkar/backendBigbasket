import product from '../model/productRoute.js'


export const  delproduct= async (req ,res )=>
{let id=req.params.id;
    try {
        let singlePrduct=await product.findByIdAndDelete(id);
        res.status(200).send(singlePrduct)
        
    } catch (error) {
        res.status(500).send(error)
        
    }

}