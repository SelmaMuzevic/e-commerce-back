import { Commande } from "../entities/commande";

import { createConnection, Repository, getConnection } from "typeorm";



export class DaoCommande {

    private getRepo(): Repository<Commande> {
        return getConnection().getRepository(Commande);

            
    }
    getAllCommandes(): Promise<Commande[]> {
        return this.getRepo().find();
    }
    getCommandeById(id: number): Promise<Commande> {
        return this.getRepo().findOneById(id);
    }
    addCommande(commande: Commande): Promise<Commande> {
        return this.getRepo().save(commande);
    }
    removeCommande(id:number): Promise<any> {
        return this.getRepo().removeById(id);
    }
    modifyCommande(commande:Commande): Promise<void> {
        return this.getRepo().updateById(commande.id,commande);
    }

}