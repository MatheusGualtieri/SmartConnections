import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./user.entitie";

@Entity("contacts")
class Contact {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  full_name: string;

  @Column({ type: "varchar", array: true, length: 120 })
  emails: string[];

  @Column()
  password: string;

  @Column("int", { array: true })
  phone: number[];

  @CreateDateColumn({ type: "date" })
  createdAt: string | Date;

  @ManyToOne(() => User, (user) => user.contacts)
  user: User;
}

export { Contact };
