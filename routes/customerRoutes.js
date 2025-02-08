const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customerController');
const validateCustomer = require('../validation/customerValidation')
const validate = require('../validation/validate');

router.post('/customer-signup', customerController.customerSignup);
// router.put('/update-customer-profile/:id', customerController.customerProfileUpdate);
// router.post('/customer-loginn', customerController.customerLogin);
router.post('/customer-login', customerController.customerLoginn);
router.post('/verify-customer', customerController.verifyCustomer);
router.post('/verify_web_customer', customerController.verifyWebCustomer);
router.post('/customer_google_login', customerController.customerGoogleLogin);
router.post('/get-customer-detail', customerController.getCustomersDetail);
router.get('/get-all-customers', customerController.getAllCustomers);

router.post('/get-customers-review', customerController.getCustomersReview);
router.post('/store-file', customerController.storeFile);
router.post('/deduct-wallet', customerController.calculateAndDeductChatPrice);
router.post('/create_razorpay_order', customerController.createRazorpayOrder);
router.post('/check_razorpay_payment_status', customerController.checkRazorPayPaymentStatus);
router.post('/create_phonepay_order', customerController.createPhonePayOrder);
router.get('/status/:txnId', customerController.checkPaymentStatus);
router.post('/add-profile', customerController.linkedProfile);
router.post('/getCustomerOrder', customerController.getCustomerOrder);
router.post('/orderDetailsByid', customerController.orderDetailsById);

router.post('/update-customer-details', customerController.updateCustomerDetails);
// router.put('/update-customer-profile-image/:customerId', customerController.updateCustomerProfileImage);

router.post('/recharge-customer-wallet', customerController.rechargeCustomerWallet);
router.post('/get-customer-recharge-history', customerController.customersWalletRechargeHistory);
router.post('/customer-wallet-balance', customerController.customersWalletBalance);
router.post('/customers_wallet_history', customerController.customersWalletHistory);
router.get('/get_customer_all_first_recharge_offfer', customerController.getCustomerAllFirstRechargeOffer);
router.get('/get_customer_all_recharge_plan', customerController.getCustomerAllRechargePlan);

router.post('/get-linked-profile', customerController.getallLinkedProfile);
router.post('/delete_linked_profile', customerController.deleteLinkedProfile);
router.post('/get_linked_profile', customerController.getLinkedProfile);
router.post('/customers-chat-history', customerController.chatHistoryOfCustomer);
router.post('/get_chat_details', customerController.getChatDetails);

// Notification to Customer
router.post('/send-notification-to-customer', customerController.sendNotificationToCustomer);
router.post('/get_custmer_notification', customerController.getCustmerNotification);
router.post('/update_customer_notification', customerController.updateCustomerNotification);

//Zegocloude call api
router.post('/deduct-call-price', customerController.calculateAndDeductCallPrice);
router.post('/customers-call-history', customerController.CallHistoryOfCustomer);
router.post('/initiate-call', customerController.initiateCall);
router.post('/initiate-chat', customerController.initiateChat);
router.post('/accept_chat', customerController.acceptChat);
router.post('/reject_chat', customerController.rejectChat);
router.post('/create-call', customerController.createCall);
router.post('/timeout-call', customerController.timeoutCall);
router.post('/cancel-call', customerController.cancelCall);
router.post('/accept-call', customerController.acceptCall);
router.post('/reject-call', customerController.rejectCall);
router.post('/end-call', customerController.endCall)
router.post('/get-call-data', customerController.getCallData)
router.post('/disconect-call', customerController.disconectCall)
router.post('/deduct-balance', customerController.updateChatHistoryAndBalances);
router.get('/customer-home-banner', customerController.customerHomeBanner)
router.get('/astrologer-detailes-banner', customerController.astrologerDetailesBanner)
router.post('/initate_live_streaming', customerController.initateLiveStreaming);
router.post('/create_live_room', customerController.createLiveRoom);
router.post('/end_live_streaming', customerController.endLiveStreaming);
router.post('/stop_live_streaming', customerController.stopLiveStreaming);
router.get('/get_live_streaming', customerController.getLiveStreaming);
router.get('/get_recent_live_streaming', customerController.getRecentLiveStreaming);
router.post('/send_gift_in_live_streaming', customerController.sendGiftInLiveStreaming);
router.post('/create_live_calls', customerController.createLiveCalls);
router.post('/exits_from_live', customerController.exitsFromLive);
router.post('/end_live_calls', customerController.endLiveCalls);
router.post('/get_customer_live_calls', customerController.getCustomerLiveCalls);

//exotel call api
router.post('/initiate_call_with_exotel', customerController.initiateCallWithExotel)
router.post('/call_status_response', customerController.callStatusResponse)

router.post('/check_customer_following', customerController.checkCustomerFollowing)
router.post('/follow_astrolgoer', customerController.followAstrolgoer)
router.post('/get_customer_following', customerController.getCustomerFollowing)
router.post('/match_making', customerController.matchMaking);
router.post('/get_match', customerController.getMatch);
router.get('/get_all_match', customerController.getAllMatch);
router.post('/user_numerology', customerController.userNumerology);
router.post('/get_numerology', customerController.getNumerology);
router.post('/delete_numero_data', customerController.deleteNumeroLogyById);
router.get('/get_all_numerology', customerController.getAllNumerology);
router.post('/VideoCallIDGenerator',customerController.videocallidgenerator);
router.post('/endvideocall',customerController.endvideoCalls);
router.post('/get_videocall_history', customerController.getVideoCallHistory);
router.post('/delete_account', customerController.deleteAccount);

//Phonepe Payment Gateway
router.post('/phonepe_payment',customerController.phonepePayment);
router.post('/callbackPhonepe',customerController.callbackPhonepe);
router.get('/redirectPhonepeWallet',customerController.redirectPhonepeWallet);



router.post('/match_save',customerController.matchsave)
router.post('/match_delete',customerController.matchdelete)
router.post('/match_data',customerController.matchData);
router.post('/match_date_by_id', customerController.matchDataById)

router.post('/update_profile_intake', customerController.updateProfileIntake);
router.post('/change_profile', customerController.changeProfile);
router.post('/customer_service_transaction_history_by_id', customerController.customerServiceTransactionHistory);

module.exports = router;

