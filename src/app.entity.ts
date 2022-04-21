import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'Animal' })
export class AnimalEntity {
  @PrimaryGeneratedColumn()
  ID: number;

  @CreateDateColumn()
  CreatedDate: Date;

  @UpdateDateColumn()
  UpdatedDate: Date;

  @Column()
  Name: string;
}
