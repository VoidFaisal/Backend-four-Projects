import Product from "../model/Product.js";
const getAllProductsStatic = async (req, res) => {
  res.status(200).json(await Product.find());
};
const getAllProducts = async (req, res) => {
  const { featured, company, name, sort, fields, numericFilters } = req.query;
  const queryObject = {};
  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }
if(numericFilters)
{
  const operatorMap = {
    ">": "$gt",
    ">=": "$gte",
    "=": "$eq",
    "<": "$lt",
    "<=": "$lte"
  }
  const regEx = /\b(<|>|>=|=|<|<=)\b/g
let filters = numericFilters.replace(regEx,(match)=>`-${operatorMap[match]}-`)
const options = ["price","rating"]
filters = filters.split(",").forEach(item => {
  const [field, operator, value] = item.split("-")
  if(options.includes(field))
  {
    queryObject[field] = {[operator]:Number(value)}
  }
});

  
}
  console.log(queryObject);
  let result = Product.find(queryObject);
  if (sort) {
    const sortList = sort.split(",").join(" ");
    result = result.sort(sortList);
  } else {
    result = result.sort("createdAT");
  }
  if (fields) {
    const fieldList = fields.split(",").join(" ");
    result = result.select(fieldList);
  }

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  result = result.skip(skip).limit(limit);
  const Products = await result;
  res.status(200).json({ Products, nhbits: Products.length });
};

export { getAllProductsStatic, getAllProducts };
