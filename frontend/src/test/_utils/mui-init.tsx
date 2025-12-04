import { PropsWithChildren } from 'react';
import { LicenseInfo } from '@mui/x-license';

LicenseInfo.setLicenseKey('key');

const MUIInit = ({ children }: PropsWithChildren) => children;

export default MUIInit;
