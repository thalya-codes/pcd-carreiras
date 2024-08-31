import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';

@Entity()
export class FeedbackEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // @ManyToOne(() => Company, (company) => company?.feedbacks, { nullable: false })
  // company: Company;

  @Column({ type: 'int', nullable: false })
  score: number;

  @Column({ type: 'text', nullable: false})
  comment: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdIn: Date;
}
