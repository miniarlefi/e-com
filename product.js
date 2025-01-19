
const express = require('express')
const router = express.Router()
const Product = require('../models/Product')



router.get('/getproduct', async (req, res) => {
    try {
        const { name, category, minPrice, maxPrice } = req.query;
        let query = {};

        if (name) {
            query.name = new RegExp (name, 'i'); //  search
        }
        if (category) {
            query.category = category;
        }
        if (minPrice) {
            query.price = { ...query.price, $gte:Number(minPrice)  };
        }
        if (maxPrice) {
            query.price = { ...query.price, $lte:Number(maxPrice) };
        }

        const products = await Product.find(query);
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});



router.post('/postproduct', async (req, res) => 
    { try { const product = new Product(req.body);
         await product.save(); res.status(201).send(product); }
          catch (error) { res.status(400).send(error); } });

          router.delete('/deleteproduct', async (req, res) => 
            { try { const product = new Product(req.body);
                 await product.save(); res.status(201).send(product); }
                  catch (error) { res.status(400).send(error); } });
  
                  


module.exports = router