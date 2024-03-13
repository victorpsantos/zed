import { Action } from '@common/interfaces/action.interface';

export const UserScope = 'User';

export const CreateUser = 'CreateUser';
export const ReadUser = 'ReadUser';
export const UpdateUser = 'UpdateUser';
export const DeleteUser = 'DeleteUser';

export class UserAction implements Action {
  Scope = UserScope;
  Create = CreateUser;
  Read = ReadUser;
  Update = UpdateUser;
  Delete = DeleteUser;
}
