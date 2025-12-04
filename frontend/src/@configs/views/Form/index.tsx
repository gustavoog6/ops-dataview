import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import LoadignButton from '@mui/lab/LoadingButton';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import MuiLink from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Autocomplete from '@zydon/common/components/form/Autocomplete';
import DatePicker from '@zydon/common/components/form/DatePicker';
import Field from '@zydon/common/components/form/Field';
import FormProvider from '@zydon/common/components/form/Form';
import MaskedInput from '@zydon/common/components/form/MaskedInput';
import Icon from '@zydon/common/components/Icon';

import { FormData } from './types';

const Form = () => {
  const methods = useForm<FormData>({
    defaultValues: {
      nome: '',
      dataNascimento: new Date(),
      cep: '',
    },
  });
  const { handleSubmit } = methods;

  // eslint-disable-next-line no-console
  const onSubmit = (values: FormData) => console.log(values);

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
          to="/formulario"
        >
          <Icon icon="PROFILE" mr={1} />
          Formulário
        </MuiLink>
      </Breadcrumbs>

      <Typography variant="h4" component="h1">
        Formulário com lib externa (react-hook-form)
      </Typography>

      <FormProvider
        methods={methods}
        onSubmit={handleSubmit(onSubmit)}
        gap={2}
        alignItems="flex-end"
      >
        <Field
          name="nome"
          id="nome"
          label="Nome"
          rules={{
            required: {
              value: true,
              message: 'Campo obrigatório',
            },
          }}
        />
        <DatePicker
          name="dataNascimento"
          label="Data de nascimento"
          rules={{
            required: {
              value: true,
              message: 'Campo obrigatório',
            },
          }}
        />
        <MaskedInput
          name="cep"
          id="cep"
          label="CEP"
          mask={[
            {
              mask: '00000-000',
            },
          ]}
          rules={{
            required: {
              value: true,
              message: 'Campo obrigatório',
            },
          }}
        />
        <Autocomplete
          name="opcao"
          id="opcao"
          label="Opções"
          options={[
            {
              label: 'Opção um',
              value: '1',
            },
            {
              label: 'Opção dois',
              value: '2',
            },
            {
              label: 'Opção três',
              value: '3',
            },
          ]}
          fullWidth
        />
        <LoadignButton type="submit" size="large" variant="contained">
          Submit
        </LoadignButton>
      </FormProvider>
    </Stack>
  );
};

export default Form;
