import { Module } from '@nestjs/common';

@Module({
  // imports: [TypeOrmModule.forFeature([Entity])],//TODO: Importar entities
  // providers: [Service, { provide: 'IService', useClass: Service }] //TODO: Importar services,
  // exports: [IService] //TODO: Exportar interface service
})
export class DomainModule {}
