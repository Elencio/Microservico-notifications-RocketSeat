import { HttpModule } from '@infra/http/controllers/http.module';
import { Module } from '@nestjs/common';
import { DataBaseModule } from '@infra/database/database.module';


@Module({
  imports: [HttpModule, DataBaseModule],
})
export class AppModule {}
