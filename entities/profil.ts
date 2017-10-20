import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Profil {
    constructor(nom:string,prenom:string,commande:number,date:Date,description:string,id?){
        this.nom = nom;
        this.prenom = prenom;
        this.commande = commande;
        this.date= date;
        this.description = description;
        this.id = id;
    }

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    nom:string;

    @Column()
    prenom:string;

    @Column()
    commande:number;

    @Column()
    date:Date;

    @Column()
    description:string;
    
}