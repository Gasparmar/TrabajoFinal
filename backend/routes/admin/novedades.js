var express = require("express");
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');
var util = require('util');
var cloudinary = require ('cloudinary').v2;

const uploader = util.promisify(cloudinary.uploader.upload);

/*GEt home page*/
router.get('/', async function (req, res, next){
  var novedades = await novedadesModel.getNovedades();

  novedades = novedades.map (novedad => {
    if (novedad.img_id) {
      const imagen = cloudinary.image(novedad.img_id, {
        width: 70,
        height: 70,
        crop: 'fill'
      });
      return {
        ...novedad,
        imagen
      }
    } else {
      return {
        ...novedad,
        imagen: ''
      }
    }
  });

  res.render('admin/novedades', {
    layout: 'admin/layout',
    persona: req.session.nombre,
    novedades
  });
});


router.get('/agregar', (req,res,next) =>{
  res.render('admin/agregar', {
    layout: 'admin/layout'
  })
});

router.post('/agregar', async (req,res,next)=> {
  try{
    var img_id = '';
    console.log (req.files.imagen);
    if (req.files && Object.keys (req.files).length > 0) {
      imagen = req.files.imagen;
      img_id = (await uploader (imagen.tempFilePath)).public_id;
    }

    if (req.body.titulo != "" && req.body.subtitulo !="" && req.body.cuerpo !="") {
      await novedadesModel.insertNovedad({
        ...req.body,
        img_id
      });
      res.redirect('/admin/novedades')
    } else {
      res.render('admin/agregar', {
        layout: 'admin/layout',
        error: true,
        message: 'Todos los campos son requeridos'
      })
    }
  } catch (error) {
    console.log(error)
    res.render ('admin/agregar', {
      layout: 'admin/layout',
      message: 'No se cargo la novedad'
    });
  }
});

module.exports = router;