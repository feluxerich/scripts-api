import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Script {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  filename: string;

  @Column()
  content: string;

  @Column({ name: 'created_at', type: 'timestamp', default: () => 'now()' })
  createdAt: number;

  @Column({ nullable: true, length: 128 })
  description: string;
}
