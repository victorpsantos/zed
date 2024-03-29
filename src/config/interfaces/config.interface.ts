import { config as base } from '../environments/default';
import { config as production } from '../environments/production';

export type ObjectType = Record<string, unknown>;
export type Default = typeof base;
export type Production = typeof production;
export type Config = Default & Production;
