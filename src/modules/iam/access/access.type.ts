import { AccessAbility } from "./access.interface";

export type AccessRule = (accessAbility: AccessAbility, ...args: any[]) => boolean;
