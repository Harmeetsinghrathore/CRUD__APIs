const razorpay = require('razorpay');
const crypto = require('crypto');
const userModel = require('../User/UserModel');

exports.createOrder = async (req, res) => {
    try {

        // ----- Instantiate razorpay -------
        const instance = new razorpay({
            key_id : process.env.KEY_ID,
            key_secret : process.env.KEY_SECRET
        });

        const options = {
            amount : req.body.amount*100,
            currency : 'INR',
            receipt : crypto.randomBytes(10).toString("hex")
        };

        instance.orders.create(options, (err, order) => {
            if (err) {
                console.log(err);
                return res.status(500).json({Message : 'Something went wrong'});
            }
            res.status(200).json({
                order_id : order.id,
                data : order
            })
        })
        
    } catch (error) {
        res.status(500).json({
            Status : 'Error',
            Message : 'Internal Server Error'
        })   
    }
}


exports.verifyPayment = async (req, res) => {
    try {

        const { razorpay_orderId, razorpay_paymentId, razorpay_signature} = req.body;

        // ---- Creating a hmac hex digest using SHA256 algorithm
        const sign = razorpay_orderId + "|" + razorpay_paymentId;
        const expectedSign = crypto
        .createHmac('sha256', process.env.KEY_SECRET)
        .update(sign.toString())
        .digest('hex');

        if(razorpay_signature == expectedSign) {
            // Payment successfull
        }else{
            return res.status(400).json({
                Status : 'Failure',
                Message : 'Invalid payment signature'
            })
        }

        res.status(200).json({
            Status : 'Success',
            Message : 'Payment verified successfully'
        })
        
        
    } catch (error) {
        res.status(500).json({
            Status : 'Error',
            Message : 'Internal Server Error'
        }) 
    }
}