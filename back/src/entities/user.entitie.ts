import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Contact } from "./contacts.entitie";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ unique: true, length: 120 })
  email_login: string;

  @Column()
  full_name: string;

  @Column({ type: "varchar", array: true, length: 120 })
  emails: string[];

  @Column()
  password: string;

  @Column("bigint", { array: true })
  phone: number[];

  @CreateDateColumn({ type: "date" })
  createdAt: string | Date;

  @OneToMany(() => Contact, (contact) => contact.user)
  contacts: Contact[];
}

export { User };
