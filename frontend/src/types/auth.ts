export enum Profile {
  SELLER = 'SELLER',
  PARTNER = 'PARTNER',
}

export enum AccessRequestStatus {
  APPROVED = 'APPROVED',
  DENIED = 'DENIED',
  PENDING = 'PENDING',
  PARTNER_NOT_IDENTIFIED = 'PARTNER_NOT_IDENTIFIED',
  WAITING_CONFIRMATION_EMAIL = 'WAITING_CONFIRMATION_EMAIL',
  EMAIL_CONFIRMED = 'EMAIL_CONFIRMED',
  PARTNER_EMAIL_NOT_IDENTIFIED = 'PARTNER_EMAIL_NOT_IDENTIFIED',
  ABANDONMENT = 'ABANDONMENT',
}

export interface UserData {
  id: string;
  name: string;
  email: string;
  fiscalRegistrationNumber?: string;
  profile: Profile;
  accessToken: string;
  refreshToken: string;
  expiration: Date;
  organizationId: string;
  sellerId?: string;
  emailConfirmed: boolean;
  accessRequestStatus?: AccessRequestStatus;
  isAccessRequest?: boolean;
  userId: string;
  userActive: boolean;
  changePasswordNextAccess: boolean;
  context: {
    partnerId?: string;
    newOrderId?: string;
    paymentMethodId?: string;
  };
}
