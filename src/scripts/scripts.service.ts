import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateScriptDto } from './dto/create-script.dto';
import { UpdateScriptDto } from './dto/update-script.dto';
import { Script } from './entities/script.entity';

@Injectable()
export class ScriptsService {
  constructor(
    @InjectRepository(Script)
    private scriptRepository: Repository<Script>,
  ) {}

  async create(createScriptDto: CreateScriptDto) {
    const script = new Script();
    script.content = createScriptDto.content;
    script.filename = createScriptDto.filename;
    script.description = createScriptDto.description;

    return await this.scriptRepository.save(script);
  }

  async findAll(): Promise<Script[]> {
    return await this.scriptRepository.find();
  }

  async findOne(id: string): Promise<Script> {
    return await this.scriptRepository.findOneByOrFail({ id: id });
  }

  async update(id: string, updateScriptDto: UpdateScriptDto) {
    return await this.scriptRepository.update({ id }, updateScriptDto);
  }

  async remove(id: string): Promise<void> {
    await this.scriptRepository.delete({ id });
  }
}
