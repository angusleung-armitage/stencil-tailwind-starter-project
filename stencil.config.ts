import { Config } from '@stencil/core';
import tailwind, { PluginOpts, TailwindConfig } from 'stencil-tailwind-plugin';
import twcfg from './tailwind.config';
// https://stenciljs.com/docs/config

const twConfigurationFn = (filename: string, config: TailwindConfig): TailwindConfig => {
  config = twcfg;
  return config;
};

const opts = {
  ...PluginOpts.DEFAULT,
  debug: true,
  stripComments: true,
  useAutoPrefixer: true,
  tailwindConf: twConfigurationFn,
};

export const config: Config = {
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'www',
      // comment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: 'https://myapp.local/',
    },
  ],
  devServer: {
    reloadStrategy: 'pageReload',
  },
  plugins: [tailwind(opts)],
};
