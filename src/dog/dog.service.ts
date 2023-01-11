import { Injectable } from '@nestjs/common';
import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Dog, DogSchema } from 'src/schema/dog.schema';

@Injectable()
export class DogService {
  constructor(@InjectModel(Dog.name) private dogModel: Model<DogSchema>){}
  create(createDogDto: CreateDogDto) {
    return this.dogModel.create(createDogDto)
  }

  findAll() {
    return this.dogModel.find()
  }

  findOne(id: string) {
    return this.dogModel.findById(id);
  }

  update(id, updateDogDto: UpdateDogDto) {
    return this.dogModel.updateOne({_id: id}, updateDogDto);
  }

  remove(id: string) {
    return this.dogModel.deleteOne({_id: id});
  }
}
