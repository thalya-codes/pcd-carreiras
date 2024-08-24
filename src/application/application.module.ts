import { Module } from '@nestjs/common';

@Module({
  // imports: [TypeOrmModule.forFeature([Entity])],//TODO: Importar entities
  // controllers: [Controller] //TODO: Importar controllers,
  // exports: [Repository,{ provide: 'IRepository', useClass: Repository }] //TODO: Exportar repositories e demais elementos da camada que serão utilizados em outras camadas
})
export class ApplicationModule {}
