import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FeedbackEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'int' })
  accessibilityRating: number;

  @Column({ type: 'text' })
  comment: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdIn: Date;

  @Column({ type: 'varchar' })
  company_name: string;
}
