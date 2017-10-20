import { Categorie } from "../entities/categorie";

import { createConnection, Repository, getConnection } from "typeorm";



export class DaoCategorie {

    private getRepo(): Repository<Categorie> {
        return getConnection().getRepository(Categorie);

            
    }
    getAllCategories(): Promise<Categorie[]> {
        return this.getRepo().find();
    }
    getCategorieById(id: number): Promise<Categorie> {
        return this.getRepo().findOneById(id);
    }
    addCategorie(categorie: Categorie): Promise<Categorie> {
        return this.getRepo().save(categorie);
    }
    removeCategorie(id:number): Promise<any> {
        return this.getRepo().removeById(id);
    }
    modifyCategorie(categorie:Categorie): Promise<void> {
        return this.getRepo().updateById(categorie.id,categorie);
    }

}