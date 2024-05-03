# Projeto It Works Front End
A aplicação frontend é construída com React, utilizando Vite como ferramenta de desenvolvimento. Renderiza os dados de uma API JSON, apresentando informações detalhadas sobre os módulos e submódulos de serviços da empresa de forma organizada e acessível aos usuários. Possuindo uma opção de descrição detalhada ao interagir com o serviço específico.

# Versão Demo - Deploy 
[Link do projeto]([https://projeto-it-works-front.vercel.app/])

![Capa Web](src/assets/images/6a20d015-7bd1-4f08-8dd3-eeeb546b16c7.jpeg)


# Como funciona?
Este projeto é uma aplicação front-end desenvolvida em React com Vite, destinada a exibir e gerenciar informações de módulos de serviços. A aplicação apresenta uma tabela dinâmica de soluções com opção de descrição detalhada, permitindo aos usuários priorizar dados de um serviço específicos ao selecioná-lo, proporcionando uma experiência de usuário personalizada. Além disso, a aplicação é responsiva, adaptando-se de forma fluida tanto para dispositivos web quanto móveis, garantindo uma experiência consistente em todas as plataformas.

#### Tela Principal - Tabela de Serviços
- Apresenta os dados de todos os serviços disponíveis nos módulos;
- Caso um card de serviço seja selecionado, a tabela exibe uma descrição específica ao usuário;
- Em caso de falha na busca de dados, é exibido um alerta informando o erro para o usuário;
- Os dados exibidos são: Nome do Serviço e uma lista com os benefícios de contratação do mesmo;

![Menu Web](src/assets/images/homepage.jpeg)


![Menu Mobile](src/assets/images/homemobile.jpeg)

#### Seleção de Serviço - Descrição específica
- Ao Selecionar um serviço é possível ter um foco maior no benefícios que o acompanham;
- Se o usuário se interessar em saber mais, pode clicar no botão presente na tabela e navegar pelo site oficial da It Works;
- Em caso de falha é exibido um alerta informando o erro para o usuário;

![Modal Web](src/assets/images/modal.jpeg)


![Modal Web](src/assets/images/modalmobile.jpeg)


#### Rodapé Interativo - Links de Pesquisa
- Possui os links das redes sociais fixados no rodapé;
- Ao clicar, o usuário navega diretamente para a rede social destino sem interromper o funcionamento da aplicação;
- Em caso de falha é exibido um alerta informando o erro para o usuário;

![mobile1](src/assets/images/rodape.jpeg)

# Motivação 

Minha motivação foi desenvolver uma tabela de dados eficiente que exibe informações dinâmicas dos serviços, permitindo uma busca específica, detalhando os dados do serviço, para melhorar a experiência do usuário. Isso não apenas torna a aplicação mais eficiente, mas também oferece uma interação intuitiva e facilita a localização rápida de informações relevantes, contribuindo para uma experiência de usuário mais satisfatória.
Além de utilizar tecnologias de ponta na aplicação, torná-la responsiva, tratamento de erros, utilizar cores com tons agradáveis, tive um cuidado ao permitir que o usuário possa acessar mais informações relacionadas a empresa e se informando ainda mais sobre os serviços abordados e muito mais.

# Tecnologias Utilizadas
Para este projeto foram utilizadas:

  - React;
  - Vite;
  - Axios;
  - Eslint;
  - Styled Components;
  - Sweet Alerts;
  - React Router;
  - DotEnv;
  - React Icons;
  - React Load Spinner;


# Como rodar em desenvolvimento
Para executar este projeto em desenvolvimento é necessário seguir os passos abaixo:

- Clonar o repositório ;
- Baixar as dependências necessárias com o comando: npm install;
- Para rodar o projeto em desenvolvimento, execute o comando npm run dev.

# Como Obter os dados da API Json Server
Para acessar os dados dinâmicos, realizei o deploy da API que compartilha as informações dos módulos de serviços:

- Crie um arquivo .env na pasta raiz do seu projeto;
- Crie uma variável de ambiente e adicione o link do deploy da API:   VITE_API_URL= (link do deploy)
- Como no exemplo, adicione o seguinte link do local informado: https://json-api-it-works.vercel.app/modulos

---

#### Uma ótima experiência para todos!!! 
