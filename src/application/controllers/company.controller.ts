import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ICompanyService } from 'src/domain/interfaces/company.interface';
import { CompanyDto, CreateCompanyDto } from '../dtos/company.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('company')
@Controller('company')
export class CompanyController {
  constructor(
    @Inject('ICompanyService') private readonly companyService: ICompanyService,
  ) {}
  @Post('create')
  async CreateCompanyDto(
    @Body() createCompanyDto: CreateCompanyDto,
  ): Promise<CompanyDto> {
    return await this.companyService.createCompany(createCompanyDto);
  }

  @Get()
  async getAllCompanies(): Promise<CompanyDto[]> {
    return await this.companyService.findAllCompanies();
  }

  @Get(':id')
  async getOneCompany(@Param() { id }: { id: string }): Promise<CompanyDto> {
    return await this.companyService.findOneCompany(id);
  }
}
