import { UserData } from 'types/auth';
import { PluginProps } from 'types/plugin';

export type Props = PluginProps<{
  pathname: string;
  authData: UserData;
}>;
