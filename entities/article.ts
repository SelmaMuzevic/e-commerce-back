import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Article {
    constructor(nom:string,prix:number,photo:string,description:string,id?){
        this.nom = nom;
        this.prix = prix;
        this.photo = photo;
        this.description = description;
        this.id = id;
    }

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    nom:string;

    @Column()
    prix:number;

    @Column()
    photo:string;

    @Column()
    description:string;
    
}