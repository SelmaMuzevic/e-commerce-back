import { Router } from "express";
import { DaoPhoto } from "../database/dao-photo";

const dao = new DaoPhoto();

export const routerPhoto = Router();

routerPhoto.get('/', (req,resp) => {
    dao.getAllPhotos().then((photos) => resp.json(photos))
    .catch((error) => resp.status(500).send(error));
});

routerPhoto.get('/:id', (req,resp) => {
    dao.getPhotoById(req.params.id).then((photo) => resp.json(photo))
    .catch((error) => resp.status(500).send(error));;
});

routerPhoto.post('/', (req,resp)=> {
    dao.addPhoto(req.body).then(photo => resp.json(photo))
    .catch((error) => resp.status(500).send(error));;
});

routerPhoto.patch('/', (req,resp)=> {
    dao.modifyPhoto(req.body).then(photo => resp.json(photo))
    .catch((error) => resp.status(500).send(error));;
});

routerPhoto.delete('/:id', (req,resp)=> {
    dao.removePhoto(req.params.id).then(photo => resp.json(photo))
    .catch((error) => resp.status(500).send(error));;
});
