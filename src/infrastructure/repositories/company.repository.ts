import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCompanyDto, CompanyDto } from 'src/application/dtos/company.dto';
import { CompanyEntity } from 'src/domain/entities/company.entity';
import { ICompanyRepository } from 'src/domain/interfaces/company.interface';

@Injectable()
export class CompanyRepository implements ICompanyRepository {
  constructor(
    @InjectRepository(CompanyEntity)
    private readonly companyRepository: Repository<CompanyEntity>,
  ) {}

  async create(createCompanyDto: CreateCompanyDto): Promise<CompanyDto> {
    const entity = this.companyRepository.create(createCompanyDto);
    return await this.companyRepository.save(entity);
  }

  async findOne(id: string): Promise<CompanyDto> {
    return await this.companyRepository.findOne({ where: { id } });
  }

  async findAll(): Promise<CompanyDto[]> {
    return await this.companyRepository.find();
  }
}
