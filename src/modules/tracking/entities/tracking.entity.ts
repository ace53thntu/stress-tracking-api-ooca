import { AbstractEntity } from '@/common/entities/abstract.entity';
import { Column, Entity } from 'typeorm';

@Entity({
  name: 'trackings',
})
export class TrackingEntity extends AbstractEntity {
  @Column({
    type: 'smallint',
  })
  stressLevel: number;

  @Column({ nullable: true })
  image?: string;

  constructor(partial: Partial<TrackingEntity>) {
    super();
    Object.assign(this, partial);
  }
}
