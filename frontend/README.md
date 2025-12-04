# Zydon B2B

## Configurando projeto

### Instalação dependências
Instale todas as dependencias rodando o comando ```yarn``` no seu terminal

### Configurando variáveis ambiente
Crie um arquvio na raíz do projeto chamado ```.env.development``` e adicione as seguintes variáveis
```
VITE_MUI_PREMIUM_KEY=
VITE_USERNAME=
VITE_PASSWORD=
VITE_API=
VITE_ACCOUNT_API=
```
- **VITE_MUI_PREMIUM_KEY:** Key do MUI Premium
- **VITE_USERNAME** seu usuário
- **VITE_PASSWORD** sua senha
- **VITE_API:** URL da api
- **VITE_ACCOUNT_API** URL da api de account

## Executando projeto localmente
Para executar esse projeto localmente basta executar o camando ```yarn dev``` no seu terminal

## Gerando build
### Build ambiente homologação
Para gerar um build desse projeto no modo **homologação** executar o camando ```yarn build-homologation``` no seu terminal
### Build ambiente produção
Para gerar um build desse projeto no modo **produção** executar o camando ```yarn build-production``` ou ```yarn build``` no seu terminal

## Executando um build
Para visualizar o build desse projeto basta  executar o camando ```yarn preview``` no seu terminal logo depois de gerar um build.

### Para realizar testes com um ambiente mais próximo ao ambiente real, execute o build desse projeto junto com a aplicação host.
- Primeiramente siga o [README.md](https://github.com/zydontecnologia/host-react#readme) da aplicação host
- Depois gere um build e execute o preview desse projeto
- Em seguida acesse a aplicação host. Nela você vai conseguir acessar essa aplicação depois de efetuar login.
