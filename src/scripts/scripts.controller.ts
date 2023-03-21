import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  Req,
} from '@nestjs/common';
import { ScriptsService } from './scripts.service';
import { CreateScriptDto } from './dto/create-script.dto';
import { UpdateScriptDto } from './dto/update-script.dto';
import { ApiBody } from '@nestjs/swagger';
import { Request } from 'express';

@Controller('scripts')
export class ScriptsController {
  constructor(private readonly scriptsService: ScriptsService) {}

  @Post()
  @ApiBody({ type: CreateScriptDto })
  create(@Body() createScriptDto: CreateScriptDto) {
    return this.scriptsService.create(createScriptDto);
  }

  @Get()
  findAll() {
    return this.scriptsService.findAll();
  }

  @Get(':id')
  async findOne(
    @Param('id', ParseUUIDPipe) id: string,
    @Req() request: Request,
  ) {
    const script = this.scriptsService.findOne(id);
    if (request.headers['user-agent']?.toLowerCase().match('^(curl|wget)'))
      return (await script).content;
    return script;
  }

  @Patch(':id')
  @ApiBody({ type: UpdateScriptDto })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateScriptDto: UpdateScriptDto,
  ) {
    return this.scriptsService.update(id, updateScriptDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.scriptsService.remove(id);
  }
}
