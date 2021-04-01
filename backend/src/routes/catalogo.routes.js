const { Router } = require('express');
const router = Router();
const { getCatalogos, createCatalogo, getCatalogo , updateCatalogo, deleteCatalogo } = require('../controllers/catalogo.controller');

const Catalogo = require('../models/catalogo');

//Obtenemos Catalogos
router.route('/').get( getCatalogos )
                 .post( createCatalogo );
    

//Modificamos Catalogo
router.route('/:id').get( getCatalogo )
                    .put( updateCatalogo )
                    .delete( deleteCatalogo );

module.exports = router;