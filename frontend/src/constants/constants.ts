import packageJson from '../../package.json';

export const APP_NAME = packageJson.name;

export const BASE_PATH = `/store/apps/${APP_NAME}`;

export const MODE = import.meta.env.VITE_MODE;
