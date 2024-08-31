import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CompanyEntity } from './company.entity';

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
  company_id: string;

  @ManyToOne(() => CompanyEntity, company => company.feedbacksList, { eager: true })
  company: CompanyEntity;  
}
