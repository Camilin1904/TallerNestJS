/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import {v4 as uuid} from 'uuid'
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';


@Injectable()
export class CarsService {
    public cars: Car[]=[
        {   
            "id":uuid(),
            "brand":"Chevrolet",
            "model":"Captiva",
            "year":2020
        },
        {
            "id":uuid(),
            "brand":"Renault",
            "model":"Sandero",
            "year":2019
        }
    ];
    findById(id: string): Car{
        const car= this.cars.find((car)=>id==car.id);
        if(car==undefined){
            throw new NotFoundException();
        }
        return car;
    }
    findAll(): string{
        return JSON.stringify(this.cars);
    }

    create(car:CreateCarDto){
        const newCar:Car = {id:uuid(),...car};
        this.cars.push(newCar);
        return newCar;
    }

    delete(id: string): Car{
        const car=this.findById(id);
        this.cars = this.cars.filter((car)=>id!=car.id);
        
        return car;
    }

    update(id:string, car: UpdateCarDto): Car{
        const carUpdate = this.findById(id);
        Object.assign(carUpdate, car);
        return carUpdate;
    }
}
