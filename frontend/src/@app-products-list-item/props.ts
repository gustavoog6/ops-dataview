/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserData } from 'types/auth';
import { PluginProps } from 'types/plugin';

export type Props = PluginProps<{
  authData: UserData;
  product: Record<string, any>;
  newOrderId: string;
  paymentMethodId?: string;
  addressId?: string;
  shoppingCartId?: string;
  partnerId?: string; // Parceiro selecionado no pré-pedido
  partner?: string; // Parceiro selecionado pelo usuário
  preOrderFormData?: Record<string, any>;
  checkoutFormData?: Record<string, any>;
  appearance: 'TABLE' | 'LIST' | 'CARD';
}>;
