import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { TrackingEntity } from './entities/tracking.entity';
import { TrackingService } from './tracking.service';

describe('TrackingService', () => {
  let service: TrackingService;

  // TODO: define mock functions
  const mockTrackingRepository = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TrackingService,
        {
          provide: getRepositoryToken(TrackingEntity),
          useValue: mockTrackingRepository,
        },
      ],
    }).compile();

    service = module.get<TrackingService>(TrackingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
