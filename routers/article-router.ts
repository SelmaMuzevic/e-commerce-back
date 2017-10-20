import { Router } from "express";
import { DaoArticle } from "../database/dao-article";

const dao = new DaoArticle();

export const routerArticle = Router();

routerArticle.get('/', (req,resp) => {
    dao.getAllArticles().then((articles) => resp.json(articles))
    .catch((error) => resp.status(500).send(error));
});

routerArticle.get('/:id', (req,resp) => {
    dao.getArticleById(req.params.id).then((article) => resp.json(article))
    .catch((error) => resp.status(500).send(error));;
});

routerArticle.post('/', (req,resp)=> {
    dao.addArticle(req.body).then(article => resp.json(article))
    .catch((error) => resp.status(500).send(error));;
});

routerArticle.patch('/', (req,resp)=> {
    dao.modifyArticle(req.body).then(article => resp.json(article))
    .catch((error) => resp.status(500).send(error));;
});

routerArticle.delete('/:id', (req,resp)=> {
    dao.removeArticle(req.params.id).then(article => resp.json(article))
    .catch((error) => resp.status(500).send(error));;
});
