/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserData } from 'types/auth';
import { PluginProps } from 'types/plugin';

export type Props = PluginProps<{
  pathname: string;
  authData: UserData;
  newOrderId?: string;
  partnerId?: string; // Parceiro selecionado no pré-pedido
  partner?: string; // Parceiro selecionado pelo usuário
  paymentMethodId?: string;
  addressId?: string;
  shoppingCartId?: string;
  preOrderFormData?: Record<string, any>;
  checkoutFormData?: Record<string, any>;
}>;
