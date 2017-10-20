import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Categorie {
    constructor(nom:string,id?){
        this.nom = nom;
        this.id = id;
    }

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    nom:string;
}