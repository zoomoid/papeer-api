import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Release, ReleaseDocument } from './schemas/release.schema';
import { CreateReleaseDto } from './dto/create-release.dto';
import { UpdateReleaseDto } from './dto/update-release.dto';

@Injectable()
export class ReleaseService {
  constructor(
    @InjectModel(Release.name) private releaseModel: Model<ReleaseDocument>,
  ) {}

  async create(createReleaseDto: CreateReleaseDto): Promise<Release> {
    const createdRelease = new this.releaseModel(createReleaseDto);
    return createdRelease.save();
  }

  async findAll(): Promise<Release[]> {
    return this.releaseModel.find().exec();
  }

  async findOne(id: string): Promise<Release> {
    return this.releaseModel.findById(id).exec();
  }

  update(id: string, updateReleaseDto: UpdateReleaseDto): Promise<Release> {
    const updatedRelease = this.releaseModel
      .findByIdAndUpdate(id, updateReleaseDto)
      .exec();
    return updatedRelease;
  }

  async remove(id: string): Promise<Release> {
    const deletedCustomer = this.releaseModel.findByIdAndRemove(id).exec();
    return deletedCustomer;
  }
}
