import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { JobVacancyEntity } from './job-vacancy.entity';
import { FeedbackEntity } from './feedback.entity';

@Entity('company_entity')
export class CompanyEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar', nullable: true })
  description?: string;

  @Column({ type: 'simple-array', nullable: true })
  @OneToMany(() => JobVacancyEntity, (jobVacancy) => jobVacancy.company_id, {
    eager: true,
  })
  job_vacancies?: string[];

  @Column({ type: 'simple-array', nullable: true })
  //@JoinColumn()
  //@ManyToOne(FeedbackEntity, (feedback) => feedback.company)
  feedbacks?: string[];

  @OneToMany(() => FeedbackEntity, (feedback) => feedback.company_id)
  feedbacksList: FeedbackEntity[];
}
