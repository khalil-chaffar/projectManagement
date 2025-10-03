const express = require('express');
const router = express.Router();

const  { create, list, preview, byId, deleteProject, update } = require('../controllers/project');
const multer = require('multer');
const { verifyToken } = require('../config/auth/middleware');

fileNames= [];
const myStorage = multer.diskStorage({
    destination:'./uploads',
    filename: (req, file, redirect)=>{7
        fl = Date.now() + '.' + file.mimetype.split('/')[1];
        fileNames.push(fl);
        redirect(null, fl);
    }
})

const upload = multer({storage: myStorage});
router.post('/create', upload.any('files'), (req, res)=>{
    create(req, res, fileNames);
    fileNames = [];
});
router.get('/list', list);
router.get('/preview/:id', preview);
router.get('/byId/:id', byId);
router.delete('/delete/:id',deleteProject);
router.put('/update/:id',upload.any('files'), (req,res)=>{
    update(req, res, fileNames);
    fileNames = [];
});







module.exports = router;