import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'; // 1. Importando o Button
import { GridActionsCellItem } from '@mui/x-data-grid-premium';
import DataGrid from '@zydon/common/components/DataGrid';
import Icon from '@zydon/common/components/Icon';
import WhiteBox from '@zydon/common/components/WhiteBox';
import { fCurrencyBRL } from '@zydon/common/utils/formatNumber';

import useAuth from 'hooks/use-auth';

const Home = () => {
  // 2. Pegamos a função de login e o status de autenticação do hook
  const {
    authData: { name, isAuthenticated }, 
    iniciarLoginZydon 
  } = useAuth();

  // 3. Se NÃO estiver autenticado, mostramos apenas o botão de conexão
  if (!isAuthenticated) {
    return (
      <Stack 
        gap={3} 
        alignItems="center" 
        justifyContent="center" 
        height="100%"
        sx={{ mt: 10 }}
      >
        <Typography variant="h4" component="h1">
          Bem-vindo ao OPS DataView
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Para acessar os dados, é necessário conectar sua conta Zydon.
        </Typography>
        
        <Button 
          variant="contained" 
          color="primary" 
          onClick={iniciarLoginZydon} // Chama a função que cria o state e redireciona
          size="large"
        >
          Conectar com Zydon
        </Button>
      </Stack>
    );
  }

  // 4. Se ESTIVER autenticado, mostra o conteúdo normal (Sua tabela atual)
  return (
    <Stack gap={3}>
      <Typography variant="h4" component="h1" fontWeight={400}>
        Olá <strong>{name}</strong>, tudo bem?
      </Typography>

      <WhiteBox p={0} overflow="hidden">
        <DataGrid
          columns={[
            {
              field: 'name',
              headerName: 'Nome',
              flex: 1,
            },
            {
              field: 'email',
              headerName: 'Email',
              flex: 1,
            },
            {
              field: 'age',
              headerName: 'Idade',
              flex: 1,
            },
            {
              field: 'salary',
              headerName: 'Salário',
              flex: 1,
              renderCell: ({ value }) => fCurrencyBRL(value),
            },
            {
              field: 'actions',
              headerName: 'Ações',
              type: 'actions',
              width: 100,
              getActions: params => [
                <GridActionsCellItem
                  key={`delete-${params.id}`}
                  icon={<Icon icon="DELETE_MARK_BUTTON_02" />}
                  label="Delete"
                />,
                <GridActionsCellItem
                  key={`toggle-admin-${params.id}`}
                  icon={<Icon icon="TOGGLE_ON" />}
                  label="Toggle Admin"
                  showInMenu
                />,
                <GridActionsCellItem
                  key={`duplicate-user-${params.id}`}
                  icon={<Icon icon="COPY_CONTENT" />}
                  label="Duplicate User"
                  showInMenu
                />,
              ],
            },
          ]}
          rows={[
            {
              id: 1,
              name: 'John Doe',
              email: 'john.doe@example.com',
              age: 30,
              salary: 1000,
            },
            {
              id: 2,
              name: 'Jane Doe',
              email: 'jane.doe@example.com',
              age: 25,
              salary: 2000,
            },
          ]}
        />
      </WhiteBox>
    </Stack>
  );
};

export default Home;