import { UserData } from 'types/auth';
import { PluginProps } from 'types/plugin';

export type Props = PluginProps<{
  pathname: string;
  authData?: UserData; // Um plugin global pode não ter authData caso o usuário não esteja logado
}>;
