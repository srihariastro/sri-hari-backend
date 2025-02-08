const mongoose = require('mongoose');

const rechargeWalletSchema = new mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customers'
    },
    referenceId: {
        type: String,
        refPath: 'referenceModel'
    },
    
    addressId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AddressCarts'
    },

    referenceModel: {
        type: String,
        enum: ['ChatHistory', 'CallHistory', 'LiveCalls', 'Gift'],  // These are the names of the models that referenceId can refer to
    },
    invoiceId: {
        type: String,
        default: ''
    },
    rechargePlanId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'RechargePlan'
    },
    gst: {
        type: Number,
        default: 0
    },
    recieptNumber: {
        type: Number,
        default: 0
    },
    discount: {
        type: Number,
        default: 0
    },
    offer: {
        type: String,
        default: ''
    },
    totalAmount: {
        type: Number,
        default: 0
    }, 
    amount: {
        type: Number,
        required: true
    },
    paymentMethod: {
        type: String,
        default: ''
    },
    payment_status:{
        type: String
    },
    order_id:{
        type: String
    },
    transactionType: {
        type: String,
        enum: ['DEBIT', 'CREDIT']
    },
    type: {
        type: String,
        enum: ['CHAT', 'CALL', 'GIFT', 'VIDEO_CALL', 'LIVE_VEDIO_CALL',  'WALLET_RECHARGE',  "PRODUCT"],
        default: ''
    }
}, { collection: 'RechargeWallet', timestamps: true });

const RechargeWallet = mongoose.model('RechargeWallet', rechargeWalletSchema);

module.exports = RechargeWallet;