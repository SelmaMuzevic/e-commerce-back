import { Router } from "express";
import { DaoProfil } from "../database/dao-profil";

const dao = new DaoProfil();

export const routerProfil = Router();

routerProfil.get('/', (req,resp) => {
    dao.getAllProfils().then((profils) => resp.json(profils))
    .catch((error) => resp.status(500).send(error));
});

routerProfil.get('/:id', (req,resp) => {
    dao.getProfilById(req.params.id).then((profil) => resp.json(profil))
    .catch((error) => resp.status(500).send(error));;
});

routerProfil.post('/', (req,resp)=> {
    dao.addProfil(req.body).then(profil => resp.json(profil))
    .catch((error) => resp.status(500).send(error));;
});

routerProfil.patch('/', (req,resp)=> {
    dao.modifyProfil(req.body).then(profil => resp.json(profil))
    .catch((error) => resp.status(500).send(error));;
});

routerProfil.delete('/:id', (req,resp)=> {
    dao.removeProfil(req.params.id).then(profil => resp.json(profil))
    .catch((error) => resp.status(500).send(error));;
});
