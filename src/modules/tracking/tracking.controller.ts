import { Controller, Get } from '@nestjs/common';
import { TrackingService } from './tracking.service';
import { TrackingEntity } from './entities/tracking.entity';

@Controller('tracking')
export class TrackingController {
  constructor(private readonly trackingService: TrackingService) {}

  // @Post()
  // create(@Body() createTrackingDto: CreateTrackingDto) {
  //   return this.trackingService.create(createTrackingDto);
  // }

  @Get()
  findAll(): Promise<TrackingEntity[]> {
    return this.trackingService.index();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.trackingService.findOne(+id);
  // }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateTrackingDto: UpdateTrackingDto
  // ) {
  //   return this.trackingService.update(+id, updateTrackingDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.trackingService.remove(+id);
  // }
}
