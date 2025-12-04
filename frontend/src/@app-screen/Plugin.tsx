import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Icon from '@zydon/common/components/Icon';

import usePluginEvents from 'hooks/use-plugin-events';

import { Props } from './props';

const Plugin = ({ pathname, authData, ...other }: Props) => {
  const { logout, navigate } = usePluginEvents();

  return (
    <Stack gap={3}>
      <Alert severity="warning">
        🚀 Ponto de partida: aqui você vai implementar uma{' '}
        <strong>Tela customizada</strong>.
      </Alert>

      <TextField
        value={JSON.stringify({ pathname, authData, ...other }, null, 2)}
        multiline
        fullWidth
        InputProps={{
          style: {
            fontFamily: 'monospace',
            whiteSpace: 'pre',
          },
        }}
        maxRows={8}
        label="Dados que você receberá"
      />

      <Typography variant="overline" component="div" color="text.secondary">
        Exemplo de como você pode usar os dados recebidos
      </Typography>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Stack gap={3}>
        <Icon icon="IDEA" width={64} color="primary.main" />
        <Typography
          variant="h3"
          component="h1"
          fontWeight={900}
          letterSpacing={-1}
        >
          Sua tela customizada
        </Typography>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack gap={1}>
          <Typography variant="overline" component="div" fontSize={14}>
            Informações que você receberá e pode usar
          </Typography>

          <Stack>
            <Typography variant="body1" component="div">
              Rota atual:{' '}
              <Typography component="strong" fontWeight={700}>
                {pathname}
              </Typography>
            </Typography>

            <Typography variant="body1" component="div">
              Nome do usuário:{' '}
              <Typography component="strong" fontWeight={700}>
                {authData?.name || '-'}
              </Typography>
            </Typography>

            <Typography variant="body1" component="div">
              Email do usuário:{' '}
              <Typography component="strong" fontWeight={700}>
                {authData?.email || '-'}
              </Typography>
            </Typography>

            <Typography variant="body1" component="div">
              Perfil:{' '}
              <Typography component="strong" fontWeight={700}>
                {authData?.profile || '-'}
              </Typography>
            </Typography>
          </Stack>
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack gap={1}>
          <Typography variant="overline" component="div" fontSize={14}>
            Exemplo de ações que você pode disparar
          </Typography>

          <Stack direction="row" gap={3} pt={2} maxWidth={600} flexWrap="wrap">
            <Button
              variant="contained"
              size="large"
              sx={{ flex: 1 }}
              onClick={() => navigate('/checkout')}
              disabled={!authData}
            >
              Navegar para checkout
            </Button>

            <Button
              variant="soft"
              size="large"
              color="error"
              sx={{ flex: 1 }}
              onClick={logout}
              disabled={!authData}
            >
              Logout
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Plugin;
