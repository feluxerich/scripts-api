import { Module } from '@nestjs/common';
import { ScriptsService } from './scripts.service';
import { ScriptsController } from './scripts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Script } from './entities/script.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Script])],
  providers: [ScriptsService],
  controllers: [ScriptsController],
  exports: [TypeOrmModule],
})
export class ScriptsModule {}
