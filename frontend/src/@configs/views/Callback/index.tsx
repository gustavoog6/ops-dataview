import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// Importe o hook de autenticação que você já tem no seu projeto
// A navegação de volta para a Home será em relação ao seu BASE_PATH
import useAuth from '../../../hooks/use-auth'; 
import { BASE_PATH } from 'constants/constants'; 

// Este é o componente que recebe a resposta do Zydon
const Callback = () => {
  // O hook useAuth deve retornar uma função para finalizar o OAuth (troca de code por token)
  const auth = useAuth(); 
  const navigate = useNavigate();
  const location = useLocation(); 

  useEffect(() => {
    // 1. Capturar os parâmetros da URL
    const urlParams = new URLSearchParams(location.search);
    const code = urlParams.get('code');
    const state = urlParams.get('state');

    if (code && state) {
      console.log('Code recebido:', code);
      console.log('State recebido:', state);
      
      // 2. Chama a função de finalização de autenticação
      // Esta função (que você precisará adicionar ao use-auth.ts) 
      // fará a requisição para o Zydon para obter o Access Token
      // e salvará as informações de sessão.
      auth.finalizeAuth(code, state)
        .then(() => {
          // 3. Sucesso: Redireciona o usuário para a Home
          console.log('Autenticação finalizada com sucesso. Redirecionando...');
          navigate(BASE_PATH, { replace: true });
        })
        .catch((error) => {
          // 4. Erro: Exibe ou loga o erro e redireciona para um estado de falha
          console.error('Falha ao finalizar autenticação com Zydon:', error);
          // Você pode redirecionar para uma página de erro específica, se houver
          navigate(`${BASE_PATH}erro-auth`, { replace: true }); 
        });
        
    } else if (urlParams.get('error')) {
      // O Zydon retornou um erro (ex: usuário negou a autorização)
      console.error('Erro de autorização Zydon:', urlParams.get('error_description'));
      // Redireciona para um estado de falha
      navigate(`${BASE_PATH}erro-auth`, { replace: true }); 
      
    } else {
      // Caso não venha nem code/state nem erro (comportamento inesperado)
      console.warn('URL de callback acessada sem parâmetros válidos.');
      navigate(BASE_PATH, { replace: true }); 
    }
  }, [location.search, auth, navigate]); // Dependências do useEffect

  // Exibe uma tela de carregamento enquanto o processo de troca de token ocorre
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>Processando Conexão com Zydon...</h1>
      <p>Aguarde, por favor.</p>
    </div>
  );
};

export default Callback;