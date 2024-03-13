import { Action } from '@common/interfaces/action.interface';

export const PolicyScope = 'Policy';

export const CreatePolicy = 'PolicyCreate';
export const ReadPolicy = 'PolicyRead';
export const UpdatePolicy = 'PolicyUpdate';
export const DeletePolicy = 'PolicyDelete';

export class PolicyAction implements Action {
  Scope = PolicyScope;
  Create = CreatePolicy;
  Read = ReadPolicy;
  Update = UpdatePolicy;
  Delete = DeletePolicy;
}
