import { Module } from "@nestjs/common";
import { SendNotification } from "@aplication/use-cases/send-notification";
import { DataBaseModule } from "@infra/database/database.module";
import { NotificationsController } from "./notifications.controller";

@Module({
  imports: [DataBaseModule],
  controllers: [
    NotificationsController
  ],
  providers: [
    SendNotification
  ],
})
export class HttpModule {}