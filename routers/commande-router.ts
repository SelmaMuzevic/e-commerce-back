import { Router } from "express";
import { DaoCommande } from "../database/dao-commande";

const dao = new DaoCommande();

export const routerCommande = Router();

routerCommande.get('/', (req,resp) => {
    dao.getAllCommandes().then((commande) => resp.json(commande))
    .catch((error) => resp.status(500).send(error));
});

routerCommande.get('/:id', (req,resp) => {
    dao.getCommandeById(req.params.id).then((commande) => resp.json(commande))
    .catch((error) => resp.status(500).send(error));;
});

routerCommande.post('/', (req,resp)=> {
    dao.addCommande(req.body).then(commande => resp.json(commande))
    .catch((error) => resp.status(500).send(error));;
});

routerCommande.patch('/', (req,resp)=> {
    dao.modifyCommande(req.body).then(commande => resp.json(commande))
    .catch((error) => resp.status(500).send(error));;
});

routerCommande.delete('/:id', (req,resp)=> {
    dao.removeCommande(req.params.id).then(commande => resp.json(commande))
    .catch((error) => resp.status(500).send(error));;
});
