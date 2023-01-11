import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  Res,
} from '@nestjs/common';
import { DogService } from './dog.service';
import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';

@Controller('dog')
export class DogController {
  constructor(private readonly dogService: DogService) { }

  @Post('/create')
  async create(@Req() req, @Res() res, @Body() createDogDto: CreateDogDto) {
    try {
      let data = await this.dogService.create(createDogDto);
      if (data) {
        return res.status(200).json({
          status: 200,
          message: 'Success',
          data: data
        })
      }
      res.status(400).json({
        status: 400,
        message: 'Failure'
      })

    } catch (err) {
      res.status(500).json({
        status: 500,
        message: 'Something went wrong!',
        error: err?.message
      })
    }
  }

  @Get('/list')
  async findAll(@Req() req, @Res() res) {
    try {
      let data = await this.dogService.findAll();
      if (data.length > 0) {
        return res.status(200).json({
          status: 200,
          message: 'Success',
          data: data
        })
      }
      res.status(400).json({
        status: 400,
        message: 'Failure'
      })

    } catch (err) {
      res.status(500).json({
        status: 500,
        message: 'Something went wrong!',
        error: err?.message
      })
    }
  }

  @Get('detail/:id')
  async findOne(@Req() req, @Res() res, @Param('id') id: string) {
    try {
      let data = await this.dogService.findOne(id);
      if (data) {
        return res.status(200).json({
          status: 200,
          message: 'Success',
          data: data
        })
      }
      res.status(400).json({
        status: 400,
        message: 'Failure'
      })

    } catch (err) {
      res.status(500).json({
        status: 500,
        message: 'Something went wrong!',
        error: err?.message
      })
    }
  }

  @Patch('update/:id')
  async update(@Res() res, @Param('id') id: string, @Body() updateDogDto: UpdateDogDto) {
    try {
      let update = await this.dogService.update(id, updateDogDto);
      if (update.acknowledged == true) {
        return res.status(200).json({
          status: 200,
          message: 'Success'
        })
      }
      res.status(400).json({
        status: 400,
        message: 'Failure'
      })
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: 'Something went wrong!',
        error: err?.message
      })
    }
  }

  @Delete(':id')
  async remove(@Res() res, @Param('id') id: string) {
    try {
      let deleteRecord = await this.dogService.remove(id);
      if (deleteRecord.acknowledged == true) {
        return res.status(200).json({
          status: 200,
          message: 'Success'
        })
      }
      res.status(400).json({
        status: 400,
        message: 'Failure'
      })
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: 'Something went wrong!',
        error: err?.message
      })
    }
  }
}
