const express = require('express');
const router = express.Router();

const EcommerceController = require('../controllers/ecommerceController')

router.post('/create_product_category', EcommerceController.createProductCategory);
router.post('/update_product_category', EcommerceController.updateProductCategory);
router.get('/get_product_category', EcommerceController.getProductCategory);
router.post('/delete_product_category', EcommerceController.deleteProductCategory);
router.post('/create_products', EcommerceController.createProducts);
router.post('/update_products', EcommerceController.updateProducts);
router.post('/get_products', EcommerceController.getProducts);
router.get('/get_all_products', EcommerceController.getAllProducts);
router.post('/delete_product', EcommerceController.deleteProduct);
router.post('/create_puja', EcommerceController.createPooja);
router.post('/update_puja', EcommerceController.updatePooja);
router.get('/get_puja', EcommerceController.getPooja);
router.post('/get_puja_details', EcommerceController.poojaDetailById);
router.post('/delete_puja', EcommerceController.deletePooja);
router.post('/add_to_cart', EcommerceController.addToCart);
router.post('/remove_cart_item', EcommerceController.removeCartItem);
router.post('/get_customer_cart', EcommerceController.getCustomerCart);
router.post('/update_cart_item_quantity', EcommerceController.updateCartItemQuantity);
router.post('/order_product', EcommerceController.orderProduct);

// PhonePe Gateway Payment from Mall
router.post('/order_product_phonepe',EcommerceController.orderProductPhonepe);
router.post('/order_product_callback',EcommerceController.orderProductCallback);

router.post('/book_puja', EcommerceController.bookPuja);
router.get('/all_requested_puja', EcommerceController.allRequestedPuja);
router.post('/puja_assign_to_astrologer', EcommerceController.pujaAssignToAstrologer);
router.post('/change_puja_status', EcommerceController.changePujaStatus);
router.get('/get_customer_booked_pooja', EcommerceController.getCustomerBookedPooja);
router.post('/get_astrologer_registered_puja', EcommerceController.getAstrologerRegisteredPooja);
router.post('/get_customer_puja_history', EcommerceController.getCustomerPujaHistory);
router.post('/get_astrologer_complete_puja', EcommerceController.getAstrologerCompletePuja);
router.post('/get_customer_complete_puja', EcommerceController.getCustomerCompletePuja);
router.get('/get_puja_history', EcommerceController.getPujaHistory);
router.get('/get_astrologer_requested_pooja', EcommerceController.getAstrologerRequestedPooja);
router.get('/get_customer_accepted_pooja', EcommerceController.getCustomerAcceptedPooja);
router.get('/get_astrologer_rejected_pooja', EcommerceController.getAstrologerRejectedPooja);
router.post('/update_astrologer_pooja_status', EcommerceController.updateAstrologerPoojaStatus);
router.post('/get_astrolgoers_pooja', EcommerceController.getAstrolgoersPooja);
router.post('/order_astrologer_pooja', EcommerceController.orderAstrologerPooja);
router.get('/get_completed_pooja', EcommerceController.completedPooja);
router.get('/order_history', EcommerceController.orderHistory);
router.post('/change_order_status', EcommerceController.updateProductOrderStatus);
router.post('/get_product_order_history', EcommerceController.getProductOrderHistory);
router.post('/complete_astrologer_pooja', EcommerceController.completeAstrologerPooja);
router.post('/get_custoemer_booked_pooja', EcommerceController.getCustoemerBookedPooja);

router.post('/create_address_cart',EcommerceController.createAddressCart);
router.post('/update_address_cart',EcommerceController.UpdateAddressCart);
router.post('/delete_address_cart',EcommerceController.DeleteAddressCart);
router.post('/get_address_cart', EcommerceController.GetAddressCart);

module.exports = router;