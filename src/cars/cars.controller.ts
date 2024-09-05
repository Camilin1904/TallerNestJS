/* eslint-disable prettier/prettier */
import { Controller, Get, Post,Param, ParseIntPipe, Body, ValidationPipe, UsePipes, ParseUUIDPipe, Delete, Patch  } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
export class CarsController {

    public carsService:CarsService = new CarsService();

    @Get()
    findAll():string{
        return this.carsService.findAll();
    }

    @Post()
    @UsePipes(ValidationPipe)
    crate(@Body() car:CreateCarDto):Car{
        return this.carsService.create(car);
    }

    @Get(':id')
    findById(@Param('id', ParseUUIDPipe)id :string):Car{
        return this.carsService.findById(id);
    }

    @Delete(':id')
    delete(@Param('id', ParseUUIDPipe)id :string):Car{
        return this.carsService.delete(id);
    }

    @Patch(':id')
    update(@Param('id', ParseUUIDPipe) id:string, @Body() body:UpdateCarDto){
        return this.carsService.update(id,body);
    }

}
