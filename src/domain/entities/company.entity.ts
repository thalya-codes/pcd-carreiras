import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CompanyEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  //@JoinColumn()
  //@ManyToOne(JobVacancyEntity, (jobVacancy) => jobVacancy.company)
  job_vacancies: string[];

  @Column()
  //@JoinColumn()
  //@ManyToOne(FeedbackEntity, (feedback) => feedback.company)
  feedbacks: string[];
}
