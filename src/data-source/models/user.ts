import { Entity, ObjectId, ObjectIdColumn, Column } from 'typeorm';
import { UserRole } from 'entities';

@Entity()
export class UserModel {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column({ unique: true, type: 'text' })
  email: string;

  @Column({ unique: false, type: 'text' })
  password: string;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.USER, array: false })
  role: UserRole;
}
