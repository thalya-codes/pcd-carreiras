import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
