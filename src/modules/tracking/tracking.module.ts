import { Module } from '@nestjs/common';
import { TrackingService } from './tracking.service';
import { TrackingController } from './tracking.controller';
import { TrackingEntity } from './entities/tracking.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TrackingEntity])],
  controllers: [TrackingController],
  providers: [TrackingService],
})
export class TrackingModule {}
