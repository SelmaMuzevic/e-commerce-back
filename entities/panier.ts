import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Panier {
    constructor(image:string,recapitulatif:string,prix:number,id?){
        this.image = image;
        this.recapitulatif = recapitulatif;
        this.prix = prix;
        this.id = id;
    }

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    image:string;

    @Column()
    recapitulatif:string;

    @Column()
    prix:number;

}