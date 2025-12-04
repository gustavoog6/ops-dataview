// frontend/src/hooks/use-auth.ts

import { useAuth as useAuthentication } from '@zydon/auth';
import { MODE, BASE_PATH } from 'constants/constants';

// 1. Defina suas constantes aqui (ou importe de constants.ts)
// ATENÇÃO: Use o ID real do seu configuration.yml
const PLUGIN_ID = 'bbb8cbf5-6ee1-4784-8f15-e803970bc361'; 

// A URL de Callback que calculamos anteriormente
const CALLBACK_URL = 'https://admin.zydon.com.br/store/apps/ops-dataview/zydon/callback'; 

const useAuth = () => {
  const authData = useAuthentication(MODE);

  // 2. A função que inicia o login (Redirecionamento)
  const iniciarLoginZydon = () => {
    // A. Gerar um valor aleatório para segurança
    const state = self.crypto.randomUUID(); 
    
    // B. Salvar no navegador para conferir na volta (na tela de Callback)
    sessionStorage.setItem('zydon_oauth_state', state);

    // C. Montar a URL de Autorização
    const authUrl = `https://admin.zydon.com.br/oauth/authorize?client_id=${PLUGIN_ID}&redirect_uri=${CALLBACK_URL}&state=${state}`;

    // D. Redirecionar o usuário
    window.location.href = authUrl;
  };

  // 3. A função que finaliza o login (que discutimos antes)
  const finalizeAuth = async (code: string, stateReceived: string) => {
      // Recupere o state salvo para validar
      const stateStored = sessionStorage.getItem('zydon_oauth_state');
      
      if (!stateStored || stateReceived !== stateStored) {
          throw new Error('Erro de segurança (State inválido).');
      }
      
      sessionStorage.removeItem('zydon_oauth_state'); // Limpa após uso

      // ... Aqui viria a lógica de trocar o code pelo token ...
      // authData.exchangeCodeForToken(...)
  };

  // 4. Retorne as novas funções para que os componentes possam usar
  return { 
    ...authData, 
    iniciarLoginZydon, 
    finalizeAuth 
  };
};

export default useAuth;