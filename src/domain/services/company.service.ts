import { Inject, Injectable } from '@nestjs/common';
import {
  ICompanyRepository,
  ICompanyService,
} from '../interfaces/company.interface';
import { CreateCompanyDto, CompanyDto } from 'src/application/dtos/company.dto';

@Injectable()
export class CompanyService implements ICompanyService {
  constructor(
    @Inject('ICompanyRepository')
    private readonly companyRepository: ICompanyRepository,
  ) {}

  async createCompany(createCompanyDto: CreateCompanyDto): Promise<CompanyDto> {
    try {
      return await this.companyRepository.create(createCompanyDto);
    } catch (error) {
      console.error({ error });
    }
  }

  //TODO: Adicionar filtro
  async findAllCompanies(): Promise<CompanyDto[]> {
    try {
      return await this.companyRepository.findAll();
    } catch (error) {
      console.error({ error });
    }
  }

  async findOneCompany(id: string): Promise<CompanyDto> {
    try {
      return this.companyRepository.findOne(id);
    } catch (error) {
      console.error({ error });
    }
  }
}
