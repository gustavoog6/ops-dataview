import Alert from '@mui/material/Alert';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { fCurrencyBRL } from '@zydon/common/utils/formatNumber';

import usePluginEvents from 'hooks/use-plugin-events';

import { Props } from './props';

const Plugin = ({ product, appearance, ...other }: Props) => {
  const { navigate } = usePluginEvents();

  return (
    <Stack gap={3}>
      <Alert severity="warning">
        🚀 Ponto de partida: aqui você vai implementar a{' '}
        <strong>Item da lista de produtos</strong>.
      </Alert>

      <TextField
        value={JSON.stringify({ product, appearance, ...other }, null, 2)}
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

      {appearance === 'CARD' ? (
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
            <Typography variant="body2" noWrap align="center" fontWeight={700}>
              {product.name}
            </Typography>
          </Stack>
        </Stack>
      ) : (
        <Stack
          key={product.id}
          direction="row"
          border="1px dashed"
          borderColor="grey.300"
          p={2}
          borderRadius={2}
          gap={2}
          bgcolor="white"
        >
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
            width={120}
            onClick={() => navigate(`/novo-pedido/produto/${product.id}`)}
          />

          <Stack>
            <Typography variant="h5" component="div" noWrap fontWeight={700}>
              {product.name}
            </Typography>

            <Typography
              variant="h5"
              component="span"
              noWrap
              my="auto"
              color="primary.main"
              fontWeight={900}
            >
              {fCurrencyBRL(product.price)}
            </Typography>
          </Stack>
        </Stack>
      )}
    </Stack>
  );
};

export default Plugin;
