import * as Joi from 'joi';

export const configSchema = Joi.object({
  environment: Joi.string()
    .valid('development', 'production')
    .default('production'),
  db: Joi.object({
    type: Joi.string()
      .valid('mysql', 'mariadb', 'postgres', 'sqlite')
      .required(),
    host: Joi.string().optional(),
    port: Joi.number().optional(),
    username: Joi.string().optional(),
    password: Joi.string().optional(),
    database: Joi.string(),
    autoLoadEntities: Joi.boolean().default(true),
    synchronize: Joi.boolean().default(true),
    logging: Joi.boolean().default(true),
    entities: Joi.array<string[]>().default([
      `${__dirname}/../**/*.entity{.ts,.js}`,
    ]),
    migrations: Joi.array<string[]>().default([
      `${__dirname}/../../migration/**/*.{js,ts}`,
    ]),
    subscribers: Joi.array<string[]>().default([
      `${__dirname}/../../subscriber/**/*.{js,ts}`,
    ]),
  }),
  cache: Joi.object({}),
});
