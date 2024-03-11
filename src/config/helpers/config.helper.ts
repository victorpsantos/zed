import { ObjectType } from '../interfaces/config.interface';

function isObjectType<T>(value: T): value is T & ObjectType {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

export function mergeObjectType<T extends ObjectType, U extends ObjectType>(
  target: T,
  source: U,
): T & U {
  for (const key of Object.keys(source)) {
    const targetValue = target[key];
    const sourceValue = source[key];
    if (isObjectType(targetValue) && isObjectType(sourceValue)) {
      Object.assign(sourceValue, mergeObjectType(targetValue, sourceValue));
    }
  }

  return { ...target, ...source };
}
