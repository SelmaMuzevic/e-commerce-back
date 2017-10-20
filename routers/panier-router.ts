import { Router } from "express";
import { DaoPanier } from "../database/dao-panier";

const dao = new DaoPanier();

export const routerPanier = Router();

routerPanier.get('/', (req,resp) => {
    dao.getAllPaniers().then((paniers) => resp.json(paniers))
    .catch((error) => resp.status(500).send(error));
});

routerPanier.get('/:id', (req,resp) => {
    dao.getPanierById(req.params.id).then((panier) => resp.json(panier))
    .catch((error) => resp.status(500).send(error));;
});

routerPanier.post('/', (req,resp)=> {
    dao.addPanier(req.body).then(panier => resp.json(panier))
    .catch((error) => resp.status(500).send(error));;
});

routerPanier.patch('/', (req,resp)=> {
    dao.modifyPanier(req.body).then(panier => resp.json(panier))
    .catch((error) => resp.status(500).send(error));;
});

routerPanier.delete('/:id', (req,resp)=> {
    dao.removePanier(req.params.id).then(panier => resp.json(panier))
    .catch((error) => resp.status(500).send(error));;
});
