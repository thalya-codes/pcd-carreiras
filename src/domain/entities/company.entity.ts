import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { FeedbackEntity } from './feedback.entity';

@Entity()
export class CompanyEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar', nullable: true })
  description?: string;

  @Column({ type: 'simple-array', nullable: true })
  //@JoinColumn()
  //@ManyToOne(JobVacancyEntity, (jobVacancy) => jobVacancy.company)
  job_vacancies?: string[];

  @Column({ type: 'simple-array', nullable: true })
  //@JoinColumn()
  //@ManyToOne(FeedbackEntity, (feedback) => feedback.company)
  feedbacks?: string[];

  @OneToMany(() => FeedbackEntity, feedback => feedback.company_id)
  feedbacksList: FeedbackEntity[]; 
}
