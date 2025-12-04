import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Icon from '@zydon/common/components/Icon';

import usePluginEvents from 'hooks/use-plugin-events';

import { Props } from './props';

const Plugin = ({ product, ...other }: Props) => {
  const { navigate } = usePluginEvents();

  return (
    <Stack gap={1}>
      <Alert severity="warning">
        🚀 Ponto de partida: aqui você vai implementar o plugin da{' '}
        <strong>Tela de detalhe do produto</strong>.
      </Alert>

      <TextField
        value={JSON.stringify({ product, ...other }, null, 2)}
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

      <Stack width={1} maxWidth={400} alignItems="flex-start" mx="auto">
        <IconButton onClick={() => navigate('/novo-pedido')}>
          <Icon icon="CHEVRON_LEFT" />
        </IconButton>

        <Typography
          variant="overline"
          component="div"
          color="primary.main"
          align="center"
          width={1}
        >
          Detalhes do produto
        </Typography>

        <Typography
          variant="h3"
          component="h1"
          fontWeight={900}
          mb={2}
          align="center"
          width={1}
        >
          {product.name}
        </Typography>

        <Stack key={product.id} gap={2} width={1}>
          <Stack
            component="img"
            src={product.images[0]?.resource_file_url}
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
            m="-32px auto 12px"
            p={1}
            borderRadius={1}
            zIndex={999}
            overflow="hidden"
          >
            <Typography variant="body2" noWrap align="center" fontWeight={700}>
              {product.name}
            </Typography>
          </Stack>

          <Button
            component="a"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/@zydonoficial"
            size="large"
            startIcon={<Icon icon="YOUTUBE" />}
            variant="soft"
            color="error"
          >
            Conhecer mais o produto
          </Button>

          <Button
            component="a"
            target="_blank"
            rel="noopener noreferrer"
            href="https://api.whatsapp.com/send/?phone=5534933006691&text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+a+Zydon.&type=phone_number&app_absent=0"
            size="large"
            startIcon={<Icon icon="WHATSAPP" />}
            variant="soft"
            color="success"
          >
            Quero comprar
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Plugin;
