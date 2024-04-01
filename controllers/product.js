const getAllProductsStatic = async (req,res) =>{
    const products = await product.find({
        name: 'vase table',
    })
    throw new Error('testing async errors')
    res.status(200).json({msg: `products testing route`})
}

const getAllProducts = async (req,res) =>{
    const { featured, company, name } = req.query
    const queryObject = {}

    if (featured) {
        queryObject.featured = featured === 'true' ? true: false
    }
    if(company){
        queryObject.company = company
    }
    if(name){
        queryObject.name = name
    }
    console.log(queryObject)
    const products = await product.find(req.query)
    res.status(200).json({msg: `products route`})
}

module.exports = {
    getAllProducts,
    getAllProductsStatic
}