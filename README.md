# Base de Conhecimento - Linguagens de Programação

Este repositório contém uma aplicação web interativa que serve como uma base de conhecimento sobre diversas linguagens de programação.

## 🌐 GitHub Pages

Este site está configurado para ser publicado automaticamente no GitHub Pages.

### Como o GitHub Pages está configurado:

1. **Workflow Automatizado**: O arquivo `.github/workflows/deploy.yml` contém uma GitHub Action que automaticamente deploya o site para o GitHub Pages toda vez que há um push na branch `main`.

2. **URL do Site**: Após a configuração, o site estará disponível em:
   ```
   https://leolafa.github.io/alura/
   ```

3. **Configuração Manual Necessária** (apenas uma vez):
   - Vá para as configurações do repositório no GitHub: `Settings` → `Pages`
   - Em "Source", selecione `GitHub Actions` como fonte de deployment
   - O workflow irá automaticamente fazer o deploy do site

### Como funciona:

- Toda vez que você fizer push para a branch `main`, o GitHub Actions automaticamente:
  1. Faz checkout do código
  2. Configura o GitHub Pages
  3. Faz upload dos arquivos
  4. Deploya o site

- Você também pode acionar o deployment manualmente através da aba "Actions" no GitHub, clicando em "Deploy to GitHub Pages" e depois em "Run workflow".

## 📁 Estrutura do Projeto

```
alura/
├── index.html          # Página principal
├── script.js           # Lógica JavaScript e busca
├── data.json           # Dados das linguagens de programação
├── assests/
│   ├── css/           # Estilos CSS
│   └── images/        # Imagens
└── .github/
    └── workflows/
        └── deploy.yml  # GitHub Actions workflow
```

## 🚀 Funcionalidades

- **Busca Interativa**: Pesquise linguagens de programação por nome, ano, paradigma, uso comum ou nível de dificuldade
- **Cards Informativos**: Visualize informações detalhadas sobre cada linguagem
- **Design Responsivo**: Funciona bem em diferentes tamanhos de tela
- **Dados Estruturados**: Informações organizadas em formato JSON

## 💻 Desenvolvimento Local

Para testar o site localmente:

1. Clone o repositório:
   ```bash
   git clone https://github.com/leolafa/alura.git
   cd alura
   ```

2. Abra o arquivo `index.html` em um navegador web, ou use um servidor local:
   ```bash
   # Com Python 3
   python -m http.server 8000
   
   # Com Node.js (http-server)
   npx http-server
   ```

3. Acesse `http://localhost:8000` no navegador

## 📝 Como Adicionar Novas Linguagens

Edite o arquivo `data.json` e adicione um novo objeto com as seguintes propriedades:

```json
{
    "Nome": "Nome da Linguagem",
    "Imagem": "URL da imagem",
    "Descrição": "Descrição breve",
    "Ano": 2024,
    "Paradigma": "Paradigmas de programação",
    "UsoComunum": "Casos de uso principais",
    "NivelDificuldade": "Fácil/Médio/Difícil"
}
```

## 🔗 Links

- [GitHub](https://github.com/leolafa)
- [LinkedIn](https://www.linkedin.com/in/leonardo-lafayette-93a240291/)

## 📄 Licença

Este projeto é de código aberto e está disponível para uso educacional.
