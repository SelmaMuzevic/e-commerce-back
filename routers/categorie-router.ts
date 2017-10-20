import { Router } from "express";
import { DaoCategorie } from "../database/dao-categorie";

const dao = new DaoCategorie();

export const routerCategorie = Router();

routerCategorie.get('/', (req,resp) => {
    dao.getAllCategories().then((categorie) => resp.json(categorie))
    .catch((error) => resp.status(500).send(error));
});

routerCategorie.get('/:id', (req,resp) => {
    dao.getCategorieById(req.params.id).then((categorie) => resp.json(categorie))
    .catch((error) => resp.status(500).send(error));;
});

routerCategorie.post('/', (req,resp)=> {
    dao.addCategorie(req.body).then(categorie => resp.json(categorie))
    .catch((error) => resp.status(500).send(error));;
});

routerCategorie.patch('/', (req,resp)=> {
    dao.modifyCategorie(req.body).then(categorie => resp.json(categorie))
    .catch((error) => resp.status(500).send(error));;
});

routerCategorie.delete('/:id', (req,resp)=> {
    dao.removeCategorie(req.params.id).then(categorie => resp.json(categorie))
    .catch((error) => resp.status(500).send(error));;
});

