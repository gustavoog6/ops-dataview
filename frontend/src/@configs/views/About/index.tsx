import { Link } from 'react-router';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import MuiLink from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Icon from '@zydon/common/components/Icon';
import IconButton from '@zydon/common/components/IconButton';
import Label from '@zydon/common/components/Label';
import Modal from '@zydon/common/components/Modal';
import useToggle from '@zydon/common/hooks/useToggle';

const About = () => {
  const [modalDetailsOpen, toggleDetailsOpen] = useToggle();

  return (
    <Stack gap={3}>
      <Breadcrumbs aria-label="breadcrumb">
        <MuiLink
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          component={Link}
          to="/"
        >
          <Icon icon="HOME_START_04" mr={1} />
          Home
        </MuiLink>

        <MuiLink
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          component={Link}
          to="/sobre"
        >
          <Icon icon="INFO_CIRCLE" mr={1} />
          Sobre
        </MuiLink>
      </Breadcrumbs>

      <Stack direction="row" alignItems="center" gap={1}>
        <Typography variant="h4" component="h1">
          Sobre
        </Typography>

        <IconButton
          icon="INFO_CIRCLE"
          label="Sobre"
          onClick={toggleDetailsOpen}
          color="primary.main"
        />
      </Stack>

      <Modal
        open={modalDetailsOpen}
        onClose={toggleDetailsOpen}
        dialogTitle="Sobre"
        fullWidth
        maxWidth="xs"
      >
        <Typography
          variant="subtitle2"
          component={Stack}
          direction="row"
          alignItems="center"
          gap={0.5}
        >
          Versão:
          <Label variant="soft" color="secondary">
            1.0.0
          </Label>
        </Typography>
      </Modal>
    </Stack>
  );
};

export default About;
