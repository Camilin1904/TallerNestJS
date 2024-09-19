import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Brand {
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column('text', {unique:true})
    name:string;

    @Column('text', {unique:true})
    slug:string;

    @BeforeInsert()
    checkSlug():void{
        if(!this.slug){
            this.slug = this.name; 
        }
    }
}
