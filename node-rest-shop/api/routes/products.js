const exress = require('express');
const router = exress.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message : 'Welcome to the API, handeling GET requests to /products'
    });
});

router.post('/', (req, res, next) => {
    const product = {
        name : req.body.name,
        price : req.body.price
    };
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