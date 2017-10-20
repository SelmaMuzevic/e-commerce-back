import { Panier } from "../entities/panier";

import { createConnection, Repository, getConnection } from "typeorm";



export class DaoPanier {

    private getRepo(): Repository<Panier> {
        return getConnection().getRepository(Panier);

            
    }
    getAllPaniers(): Promise<Panier[]> {
        return this.getRepo().find();
    }
    getPanierById(id: number): Promise<Panier> {
        return this.getRepo().findOneById(id);
    }
    addPanier(panier: Panier): Promise<Panier> {
        return this.getRepo().save(panier);
    }
    removePanier(id:number): Promise<any> {
        return this.getRepo().removeById(id);
    }
    modifyPanier(panier:Panier): Promise<void> {
        return this.getRepo().updateById(panier.id,panier);
    }

}