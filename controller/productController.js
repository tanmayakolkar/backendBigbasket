import product from '../model/productRoute.js'

export const addProduct = async (req,res) => {
    console.log("request recieved");
    // debugger;
    let { name, price, qty, info, image } = req.body;
      try{
        let newProduct= new product({
            name,
            price,
            qty,
            info,
            image
        });

       let result= await newProduct.save();
      //  console.log(result);
       res.status(200).send(result);
      }
      catch(error)
      {
        console.log(error)
        res.status(500).send(error);
      }
}
