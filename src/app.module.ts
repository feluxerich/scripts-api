import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { ScriptsController } from './scripts/scripts.controller';
import { ScriptsModule } from './scripts/scripts.module';
import { ScriptsService } from './scripts/scripts.service';

@Module({
  imports: [
    ScriptsModule,
    TypeOrmModule.forRoot({
      // TODO: make this config with environment variables
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'postgres',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  providers: [ScriptsService],
  controllers: [AppController, ScriptsController],
})
export class AppModule {}
