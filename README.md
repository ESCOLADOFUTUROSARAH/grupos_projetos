# Gestão de Grupos e Projetos

Este é um projeto para a gestão de grupos de trabalho e projetos, desenvolvido utilizando HTML, CSS e JavaScript. O projeto permite criar grupos, adicionar participantes e associar projetos a grupos. A interface é simples e permite fácil navegação entre diferentes páginas do sistema.

## Estrutura do Projeto

- **index.html**: Página inicial onde é possível criar novos grupos, adicionar participantes aos grupos existentes e criar projetos associados a um grupo.
- **dashboard.html**: Página de resumo que mostra todos os grupos e projetos criados, com links para visualização dos detalhes.
- **grupo.html**: Página que mostra detalhes dos grupos, incluindo uma lista de participantes.
- **projeto.html**: Página que mostra detalhes dos projetos, incluindo o grupo associado.
- **css/styles.css**: Estilo para todas as páginas do projeto.
- **js/script.js**: Script principal para a manipulação de dados de grupos e projetos (adicionar grupos, participantes, e projetos).
- **js/dashboard.js**: Script responsável por carregar os grupos e projetos na página do dashboard.
- **js/grupo.js**: Script para exibir os detalhes de um grupo específico.
- **js/projeto.js**: Script para exibir os detalhes de um projeto específico.

## Funcionalidades

1. **Criar Grupo**: Permite criar um novo grupo com um nome único.
2. **Adicionar Participante**: Permite adicionar um participante a um grupo existente.
3. **Criar Projeto**: Permite criar um projeto associado a um grupo específico.
4. **Visualizar Grupos e Projetos**: Mostra uma lista de grupos e projetos criados, permitindo navegar até os detalhes de cada um.

## Tecnologias Utilizadas

- **HTML**: Estrutura das páginas web.
- **CSS**: Estilização das páginas para uma interface amigável.
- **JavaScript**: Lógica do projeto, manipulação do DOM e armazenamento local.

## Como Utilizar

1. **Clone o repositório**
   ```sh
   git clone https://github.com/seu-usuario/gestao-grupos-projetos.git
   ```

2. **Abra o arquivo `index.html` no seu navegador**
   - Todas as funcionalidades podem ser acessadas a partir da página inicial.

3. **Navegação pelo Sistema**
   - A partir da página inicial, crie grupos, adicione participantes e projetos.
   - Navegue até a página do **Dashboard** para visualizar uma lista de todos os grupos e projetos criados.

## Estrutura de Código

### HTML
Os arquivos HTML são responsáveis pela estrutura do projeto e contêm as seguintes seções principais:
- **Header**: Título da página e links de navegação.
- **Main Content**: Seções para criar grupos, adicionar participantes e criar projetos.

### CSS
O arquivo `styles.css` fornece a estilização do projeto, garantindo uma aparência moderna e responsiva. Entre as funcionalidades, incluem-se:
- **Estilo Geral**: Configuração de fontes, cores e layout de página.
- **Mensagens de Feedback**: Estilização para mensagens de sucesso e erro, exibidas para o usuário em operações como criação de grupo ou projeto.

### JavaScript
Os scripts JavaScript são responsáveis pela lógica de manipulação dos grupos, participantes e projetos. Utiliza-se `localStorage` para armazenar dados no navegador, permitindo que as informações sejam mantidas entre sessões.
- **Funções principais**: `adicionarGrupo()`, `adicionarParticipante()`, `adicionarProjeto()`, `atualizarListaGrupos()`, e outras funções auxiliares.

## Estilos de Mensagens

O CSS define estilos para mensagens de feedback que são exibidas durante a interação do usuário, tais como:
- **.mensagem.sucesso**: Mensagem de cor verde exibida quando uma ação é concluída com sucesso.
- **.mensagem.erro**: Mensagem de cor vermelha exibida quando ocorre um erro, como ao tentar criar um grupo com um nome já existente.

## Melhorias Futuras
- Implementar um backend para persistência de dados usando um banco de dados, de forma que as informações sejam salvas permanentemente.
- Adicionar validações mais complexas, como verificar duplicidade de nomes de participantes dentro do mesmo grupo.
- Criar testes automatizados para garantir a robustez das funcionalidades.

## Como Contribuir
1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova feature'`)
4. Faça o push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença
Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
