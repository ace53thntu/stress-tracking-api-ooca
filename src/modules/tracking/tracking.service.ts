import { BaseService } from '@/common/services/base.service';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TrackingEntity } from './entities/tracking.entity';

@Injectable()
export class TrackingService extends BaseService<
  TrackingEntity,
  Repository<TrackingEntity>
> {
  constructor(
    @InjectRepository(TrackingEntity)
    private trackingRepository: Repository<TrackingEntity>
  ) {
    super(trackingRepository);
  }
}
