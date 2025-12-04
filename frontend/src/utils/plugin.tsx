import { buildPlugin as buildPluginUtil } from '@zydon/plugin/utils/plugin';

import packageJson from '../../package.json';

export function buildPlugin<P>(
  Component: React.ComponentType<P>,
  name: string,
) {
  const appName = packageJson.name;

  return buildPluginUtil(Component, appName, name);
}
