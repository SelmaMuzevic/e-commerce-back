import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Commande {
    constructor(nom:string,dateCommande:Date,dateLivraison:Date,description:string,id?){
        this.nom = nom;
        this.dateCommande = dateCommande;
        this.dateLivraison = dateLivraison;
        this.description = description;
        this.id = id;
    }

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    nom:string;

    @Column()
    dateCommande:Date;

    @Column()
    dateLivraison:Date;

    @Column()
    description:string;
    
}