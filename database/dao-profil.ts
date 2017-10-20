import { Profil } from "../entities/profil";

import { createConnection, Repository, getConnection } from "typeorm";



export class DaoProfil {

    private getRepo(): Repository<Profil> {
        return getConnection().getRepository(Profil);

            
    }
    getAllProfils(): Promise<Profil[]> {
        return this.getRepo().find();
    }
    getProfilById(id: number): Promise<Profil> {
        return this.getRepo().findOneById(id);
    }
    addProfil(profil: Profil): Promise<Profil> {
        return this.getRepo().save(profil);
    }
    removeProfil(id:number): Promise<any> {
        return this.getRepo().removeById(id);
    }
    modifyProfil(profil:Profil): Promise<void> {
        return this.getRepo().updateById(profil.id,profil);
    }

}