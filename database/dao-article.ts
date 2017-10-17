import { Article } from "../entities/article";
import { createConnection, Repository, getConnection } from "typeorm";


export class DaoArticle {

    private getRepo(): Repository<Article> {
        return getConnection().getRepository(Article);

            
    }
    getAllArticles(): Promise<Article[]> {
        return this.getRepo().find();
    }
    getArticleById(id: number): Promise<Article> {
        return this.getRepo().findOneById(id);
    }
    addArticle(article: Article): Promise<User> {
        return this.getRepo().save(article);
    }
    removeArticle(id:number): Promise<any> {
        return this.getRepo().removeById(id);
    }
    modifyArticle(article: Article): Promise<void> {
        return this.getRepo().updateById(article.id,article);
    }

}