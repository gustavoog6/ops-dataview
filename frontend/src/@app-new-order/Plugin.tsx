import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Icon from '@zydon/common/components/Icon';
import Label from '@zydon/common/components/Label';

import usePluginEvents from 'hooks/use-plugin-events';
import { categories, products } from 'mocks/data';

import { Props } from './props';

const getGreeting = () => {
  const hour = new Date().getHours();

  if (hour < 12) return 'Bom dia';
  if (hour < 18) return 'Boa tarde';
  return 'Boa noite';
};

const Plugin = ({ authData, newOrderId, ...other }: Props) => {
  const greeting = getGreeting();
  const { navigate } = usePluginEvents();

  return (
    <Stack gap={3}>
      <Alert severity="warning">
        🚀 Ponto de partida: aqui você vai implementar o plugin da{' '}
        <strong>Tela de novo pedido</strong>.
      </Alert>

      <TextField
        value={JSON.stringify({ authData, newOrderId, ...other }, null, 2)}
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

      <Stack>
        <Typography variant="h4" component="h1" fontWeight="400">
          {greeting},{' '}
          <Typography component="strong" fontSize="inherit" fontWeight="900">
            {authData.name}
          </Typography>
          !
        </Typography>

        <Typography color="text.secondary" variant="body1">
          Vamos às compras?
        </Typography>
      </Stack>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Stack gap={1}>
        <Typography variant="overline" component="div" fontSize={14}>
          Informações que você receberá e pode usar
        </Typography>

        <Stack>
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
        <Typography
          variant="overline"
          component={Stack}
          direction="row"
          alignItems="center"
          gap={0.5}
        >
          Modelo de pedido:
          <Label variant="inverted">{newOrderId}</Label>
        </Typography>
      </Stack>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Stack gap={1}>
        <Typography
          variant="overline"
          component={Stack}
          direction="row"
          alignItems="center"
          gap={1}
        >
          Categorias <Label variant="inverted">{categories.length}</Label>
        </Typography>

        <Stack direction="row" gap={2} flexWrap="wrap">
          {categories.map(category => (
            <Button
              key={category.id}
              variant="contained"
              startIcon={<Icon icon="DASHBOARD_SQUARE_01" />}
              endIcon={<Icon icon="CHEVRON_RIGHT" />}
              onClick={() => navigate(`/novo-pedido/categoria/${category.id}`)}
            >
              {category.name}
            </Button>
          ))}
        </Stack>
      </Stack>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Stack gap={1}>
        <Typography
          variant="overline"
          component={Stack}
          direction="row"
          alignItems="center"
          gap={1}
        >
          Produtos <Label variant="inverted">{products.length}</Label>
        </Typography>

        <Stack
          direction="row"
          gap={2}
          display="grid"
          gridTemplateColumns="repeat(auto-fill,minmax(140px,1fr))"
        >
          {products.map(product => (
            <Stack key={product.id}>
              <Stack
                component="img"
                src={product.main_image}
                alt={product.name}
                sx={{
                  aspectRatio: '1/1',
                  borderRadius: 1.5,
                  transition: 'transform 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              />

              <Stack
                bgcolor="primary.main"
                color="primary.contrastText"
                width="85%"
                m="-19px auto 0"
                p={1}
                borderRadius={1}
                zIndex={999}
                overflow="hidden"
              >
                <Typography
                  variant="body2"
                  noWrap
                  align="center"
                  fontWeight={700}
                >
                  {product.name}
                </Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Plugin;
