import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Photo {
    constructor(height:number,width:number,description:string,id?){
        this.height = height;
        this.width = width; 
        this.description = description;
        this.id = id;
    }

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    height:number;

    @Column()
    width:number;

    @Column()
    description:string;
    
}