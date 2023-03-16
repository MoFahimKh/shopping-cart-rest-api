const exress = require('express');
const router = exress.Router();
const Product = require('../models/product');
const mongoose = require('mongoose');
router.get('/', (req, res, next) => {
    res.status(200).json({
        message : 'Welcome to the API, handeling GET requests to /products'
    });
});

router.post('/', (req, res, next) => {
    const product = new Product({
        _id : new mongoose.Types.ObjectId(),
        name : req.body.name,
        price : req.body.price
    });

    product.save().then((result) => {console.log(result)}).catch((err) => {console.log(err)});

    res.status(200).json({
        message : 'Welcome to the API, handeling POST requests to /products',
        createProduct : product
    });
})

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if(id==='special'){
        res.status(200).json({
            message : 'Welcome to the API, handeling GET requests to /products/special',
            id:id
        });
    }else{
        res.status(200).json({
            message : 'You passed an ID :' + id
        });
    }
    });


    router.patch('/:productId', (req, res, next) => {
       res.status(200).json({
        message : 'Upload product!'
       })
        });

        router.delete('/:productId', (req, res, next) => {
            res.status(200).json({
                message : 'Delete product!'
            });
            });


module.exports = router;