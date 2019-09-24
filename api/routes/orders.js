const expres = require('express');
const router = expres.Router();

// Handle incoming get request to /order
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Orders was fetched'
    });
})

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Order was created'
    });
})

router.get('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Get order details', 
        orderId: req.params.orderId
    });
})

router.delete('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Order deleted', 
        orderId: req.params.orderId
    });
})


module.exports = router;
