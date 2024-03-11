import { mergeObjectType } from './helpers/config.helper';
import { Config, Default, Production } from './interfaces/config.interface';

export const config = async (): Promise<Config> => {
  const { config } = <{ config: Default }>(
    await import(`${__dirname}/environments/default`)
  );

  const { config: environment } = <{ config: Production }>(
    await import(
      `${__dirname}/environments/${process.env.NODE_ENV || 'development'}`
    )
  );

  return mergeObjectType(config, environment);
};
