const catalogoController = {};

const Catalogo = require('../models/catalogo');

catalogoController.getCatalogos = async (req, res) => {
    console.log(req.params.id);
    const catalogos = await Catalogo.find();
    console.log(catalogos);
    res.json(catalogos);    
};

catalogoController.createCatalogo = async (req, res) => {
    const { name, description } = req.body;
    const catalogo = new Catalogo( {name, description} );
    await catalogo.save();
    res.json({status: 'Nuevo Catalogo guardado'});
};

catalogoController.getCatalogo = async (req, res) => {
    console.log(req.params.id);
    const catalogo = await Catalogo.findById( req.params.id );
    res.json( catalogo );
};


catalogoController.updateCatalogo = async (req, res) => {
    const { name, description } = req.body;
    const catalogoToUpdate = { name, description };
    try{
        await Catalogo.findByIdAndUpdate(req.params.id, catalogoToUpdate);
    }catch(Error){
        
    }    
    res.json({status: 'Catalogo modificado'});
};

catalogoController.deleteCatalogo = async (req, res) => {
    await Catalogo.findByIdAndDelete(req.params.id);
    res.json({status: 'Catalogo eliminado'});
};


module.exports = catalogoController;