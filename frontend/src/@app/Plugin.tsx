import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Icon from '@zydon/common/components/Icon';
import Modal from '@zydon/common/components/Modal';
import useToggle from '@zydon/common/hooks/useToggle';

import usePluginEvents from 'hooks/use-plugin-events';

import { Props } from './props';
import { Container } from './styles';

const Plugin = ({ pathname, authData }: Props) => {
  const [modalOpen, toggleModalOpen] = useToggle();
  const { logout, navigate } = usePluginEvents();

  return (
    <>
      <Container>
        <Button
          variant="contained"
          size="large"
          onClick={toggleModalOpen}
          startIcon={<Icon icon="IDEA" />}
        >
          Aqui é o seu plugin global
        </Button>
      </Container>

      <Modal
        open={modalOpen}
        onClose={toggleModalOpen}
        fullWidth
        maxWidth="sm"
        dialogTitle="Modal"
      >
        <Stack gap={1}>
          <TextField
            value={JSON.stringify({ pathname, authData }, null, 2)}
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

          <Divider sx={{ borderStyle: 'dashed' }} />

          <Typography variant="subtitle1" component="div">
            Qualquer conteúdo que vc deseja ter no seu plugin...
          </Typography>

          <Stack direction="row" gap={1} pt={1}>
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
      </Modal>
    </>
  );
};

export default Plugin;
