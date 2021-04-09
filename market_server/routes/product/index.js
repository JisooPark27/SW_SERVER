const express = require('express');
const router = express.Router();
const upload = require('../../modules/multer');
const productController = require('../../controller/productController');
const auth = require('../../middlewares/auth');

router.post('/', auth.checkSession, auth.checkAdmin, upload.single('img'), productController.registerProduct);
router.get('/select/:id', productController.findProductById);
router.get('/', productController.findAllProduct);
router.get('/one/:category', productController.findAllProductByOneCategory);
router.get('/aerobic', productController.findAllProductByAerobic);
router.get('/weight', productController.findAllProductByWeight);
router.get('/aids', productController.findAllProductByAids);
router.get('/massage', productController.findAllProductByMassage);
router.get('/assistant', productController.findAllProductByAssistant);
router.put('/', auth.checkSession, auth.checkAdmin, upload.single('img'), productController.updateProductById);
router.delete('/:id', auth.checkSession, auth.checkAdmin, productController.deleteProductById);

module.exports = router;