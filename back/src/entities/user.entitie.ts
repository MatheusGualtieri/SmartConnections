import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  full_name: string;

  @Column({ type: "varchar", unique: true, array: true, length: 120 })
  email: string[];

  @Column()
  password: string;

  @Column("int", { array: true })
  phone: number[];

  @CreateDateColumn({ type: "date" })
  createdAt: string | Date;
}

export { User };
