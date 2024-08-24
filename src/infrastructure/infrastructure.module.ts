import { Module } from '@nestjs/common';

@Module({
  // imports: [TypeOrmModule.forFeature([Entity])],//TODO: Importar entities utilizadas na camada
  // providers: [Repository] //TODO: Importar repositories e demais providers
})
export class InfrastructureModule {}
