import { UserRole } from 'interfaces';
import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';

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
