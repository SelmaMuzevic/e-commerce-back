import { Photo } from "../entities/photo";

import { createConnection, Repository, getConnection } from "typeorm";



export class DaoPhoto {

    private getRepo(): Repository<Photo> {
        return getConnection().getRepository(Photo);

            
    }
    getAllPhotos(): Promise<Photo[]> {
        return this.getRepo().find();
    }
    getPhotoById(id: number): Promise<Photo> {
        return this.getRepo().findOneById(id);
    }
    addPhoto(photo: Photo): Promise<Photo> {
        return this.getRepo().save(photo);
    }
    removePhoto(id:number): Promise<any> {
        return this.getRepo().removeById(id);
    }
    modifyPhoto(photo:Photo): Promise<void> {
        return this.getRepo().updateById(photo.id,photo);
    }

}