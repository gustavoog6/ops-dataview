import { styled } from '@mui/material/styles';

export const Container = styled('div')({
  position: 'fixed',
  height: 48,
  top: 0,
  bottom: 0,
  right: -95,
  margin: 'auto',
  transform: 'rotate(90deg)',

  button: {
    borderRadius: '0 0 8px 8px',
  },
});
