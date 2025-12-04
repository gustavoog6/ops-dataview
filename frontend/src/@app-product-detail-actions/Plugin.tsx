import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Icon from '@zydon/common/components/Icon';

import { Props } from './props';

const Plugin = ({ product, ...other }: Props) => {
  return (
    <Stack gap={3}>
      <Alert severity="warning">
        🚀 Ponto de partida: aqui você vai implementar o plugin de{' '}
        <strong>Ações da tela de detalhe do produto</strong>.
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

      <Stack gap={2}>
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
          Conhecer mais o produto: {product.name}
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
  );
};

export default Plugin;
