// Definir um lugar melhor para todos esse tipos, ou colocar tudo referente a policy no arquivo policy.type.ts

export type StringOperator = 'StringEquals' | 'StringNotEquals';
export type NumberOperator =
  | 'NumberEquals'
  | 'NumberNotEquals'
  | 'NumberLessThan'
  | 'NumberLessThanEquals'
  | 'NumberGreaterThan'
  | 'NumberGreaterThanEquals';
export type BooleanOperator = 'Bool';

type Key<T extends string, V = any> = {
  [P in T]: Record<P, V> & Partial<Record<Exclude<T, P>, never>> extends infer O
    ? { [Q in keyof O]: O[Q] }
    : never;
}[T];

type StringKey = Key<string, string>;
type NumberKey = Key<string, number>;
type BooleanKey = Key<string, boolean>;

export type Condition =
  | Key<StringOperator, StringKey>
  | Key<NumberOperator, NumberKey>
  | Key<BooleanOperator, BooleanKey>;

export type PolicyConditionType =
  | 'Equals'
  | 'NotEquals'
  | 'LessThan'
  | 'LessThanEquals'
  | 'GreaterThan'
  | 'GreaterThanEquals';
