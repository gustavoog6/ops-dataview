import Alert from '@mui/material/Alert';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import usePluginEvents from 'hooks/use-plugin-events';
import { products } from 'mocks/data';

import { Props } from './props';

const Plugin = ({ newOrderId, ...other }: Props) => {
  const { navigate } = usePluginEvents();

  return (
    <Stack gap={3}>
      <Alert severity="warning">
        🚀 Ponto de partida: aqui você vai implementar a{' '}
        <strong>Lista de produtos</strong>.
      </Alert>

      <TextField
        value={JSON.stringify({ newOrderId, ...other }, null, 2)}
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

      <Stack gap={2}>
        <Typography
          variant="h3"
          component="h1"
          fontWeight={900}
          letterSpacing={0.25}
          color="primary.main"
        >
          Lista de Produtos customizada - Modelo de pedido: {newOrderId}
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
                onClick={() => navigate(`/novo-pedido/produto/${product.id}`)}
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
