import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class User {
    constructor(nom:string,prenom:string,pseudo:string,mail:string,password:string,id?){
        this.nom = nom;
        this.prenom = prenom;
        this.pseudo = pseudo;
        this.mail = mail;
        this.password = password;
        this.id = id;
    }

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    nom:string;

    @Column()
    prenom:string;

    @Column()
    pseudo:string;

    @Column()
    mail:string;

    @Column()
    password:string;
    
}