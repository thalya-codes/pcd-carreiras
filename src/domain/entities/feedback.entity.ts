import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, JoinColumn } from 'typeorm';
import { CompanyEntity } from './company.entity';

@Entity()
export class FeedbackEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => CompanyEntity, (company) => company.feedbacks, { nullable: false, cascade: true })
  @JoinColumn({ name: 'company_name' })
  company: CompanyEntity;

  @Column({ type: 'int', nullable: false })
  accessibilityRating: number;

  @Column({ type: 'text', nullable: false})
  comment: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdIn: Date;
}