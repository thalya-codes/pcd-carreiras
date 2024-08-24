import { CompanyDto, CreateCompanyDto } from 'src/application/dtos/company.dto';

export interface ICompanyRepository {
  create(createCompanyDto: CreateCompanyDto): Promise<CompanyDto>;
  findOne(id: string): Promise<CompanyDto>;
  findAll(): Promise<CompanyDto[]>;
}

export interface ICompanyService {
  createCompany(createCompanyDto: CreateCompanyDto): Promise<CompanyDto>;
  findOneCompany(id: string): Promise<CompanyDto>;
  findAllCompanies(): Promise<CompanyDto[]>;
}
