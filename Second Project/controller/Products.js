import Product from "../model/Product.js";
const getAllProductsStatic = (req, res) => {
  res.status(200).json({ msg: "products testing route" });
};
const getAllProducts =async (req, res) => {
    const{featured} = req.query
    const queryObject={}
    if(featured)
    {
        queryObject.featured = featured === 'true'?true:false;
    }
    console.log(queryObject);
    const Products = await Product.find(queryObject)
  res.status(200).json({ Products,nhbits:Products.length});
};

export { getAllProductsStatic, getAllProducts };
