# VoluntáriosConnect Frontend

Frontend da aplicação VoluntáriosConnect - plataforma para conectar voluntários com causas sociais e organizações que precisam de ajuda.

## 🚀 Tecnologias Utilizadas

- **Angular 20**
- **TypeScript 5.8.2**
- **Angular Material 20**
- **Taiga UI 4.41.0**
- **PrimeFlex 4.0.0**
- **NGX Mask 19.0.7**
- **RxJS 7.8.0**
- **SCSS/Less**

## 📋 Pré-requisitos

Antes de executar a aplicação, certifique-se de ter instalado:

- [Node.js 18+](https://nodejs.org/)
- [npm 9+](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Angular CLI 20+](https://angular.io/cli)

## 🛠️ Instalação

### 1. Instalar o Angular CLI globalmente
```bash
npm install -g @angular/cli
```

### 2. Clonar o repositório
```bash
git clone <url-do-repositorio>
cd voluntariaid-frontend
```

### 3. Instalar as dependências
```bash
npm install
```

Ou usando yarn:
```bash
yarn install
```

## 🏃‍♂️ Como Executar

### Ambiente de Desenvolvimento
```bash
npm start
```

Ou usando Angular CLI:
```bash
ng serve
```

A aplicação estará disponível em: **http://localhost:4200**

### Build de Produção
```bash
npm run build
```

Os arquivos de build serão gerados na pasta `dist/`

### Executar Testes
```bash
npm test
```

### Build em Modo Watch
```bash
npm run watch
```

## 🎨 Bibliotecas de UI

O projeto utiliza uma combinação de bibliotecas de UI modernas:

### Angular Material
- **Tema**: Azure Blue
- **Componentes**: Botões, Cards, Formulários, Navegação
- **Documentação**: https://material.angular.io/

### Taiga UI
- **Versão**: 4.41.0
- **Módulos incluídos**:
  - Core (componentes básicos)
  - Kit (componentes avançados)
  - Layout (componentes de layout)
  - Charts (gráficos)
  - Commerce (componentes de comércio)
  - Mobile (componentes mobile)
  - Table (tabelas avançadas)
- **Documentação**: https://taiga-ui.dev/

### PrimeFlex
- **Versão**: 4.0.0
- **Utilitários CSS** para layout responsivo
- **Documentação**: https://primeflex.org/

### NGX Mask
- **Versão**: 19.0.7
- **Máscaras** para inputs (CPF, telefone, etc.)
- **Documentação**: https://jsdaddy.github.io/ngx-mask-page/

## 📁 Estrutura do Projeto

```
voluntariaid-frontend/
├── src/
│   ├── app/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── models/
│   │   └── shared/
│   ├── assets/
│   ├── environments/
│   └── styles.scss
├── public/
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

## 🌐 Configuração de Ambiente

### Arquivo de Ambiente - Development
`src/environments/environment.development.ts`
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api'
};
```

### Arquivo de Ambiente - Production
`src/environments/environment.ts`
```typescript
export const environment = {
  production: true,
  apiUrl: 'https://api.voluntariosconnect.com'
};
```

## 🔧 Scripts Disponíveis

| Script | Comando | Descrição |
|--------|---------|-----------|
| `start` | `ng serve` | Inicia servidor de desenvolvimento |
| `build` | `ng build` | Build de produção |
| `watch` | `ng build --watch --configuration development` | Build contínuo para desenvolvimento |
| `test` | `ng test` | Executa testes unitários |

## 📱 Funcionalidades Principais

- **Cadastro de Voluntários**: Interface para registro de novos voluntários
- **Busca de Oportunidades**: Sistema de busca e filtros para oportunidades
- **Perfil do Usuário**: Gerenciamento de perfil e histórico
- **Dashboard**: Painel com estatísticas e atividades
- **Notificações**: Sistema de notificações em tempo real
- **Responsividade**: Interface adaptável para mobile e desktop

## 🎯 Recursos de UI/UX

- **Design System**: Componentes consistentes com Angular Material + Taiga UI
- **Tema Personalizado**: Azure Blue theme
- **Máscaras de Input**: Formatação automática para CPF, telefone, etc.
- **Layout Responsivo**: PrimeFlex para grid system
- **Animações**: Transições suaves entre páginas
- **Acessibilidade**: Componentes acessíveis por padrão

## 🔍 Comandos Úteis

### Gerar Componentes
```bash
ng generate component components/nome-do-componente
ng generate service services/nome-do-servico
ng generate interface models/nome-do-modelo
```

### Análise de Bundle
```bash
ng build --stats-json
npx webpack-bundle-analyzer dist/stats.json
```

### Lint e Formatação
```bash
ng lint
ng format
```

## 🌍 Suporte a Navegadores

- **Chrome**: Versão 90+
- **Firefox**: Versão 88+
- **Safari**: Versão 14+
- **Edge**: Versão 90+

## 📊 Performance

### Configurações de Build
- **Budgets configurados**:
  - Bundle inicial: máximo 1MB
  - Estilos de componentes: máximo 8kB
- **Otimizações**: Tree-shaking, minificação, compressão
- **Lazy Loading**: Carregamento sob demanda de módulos

## 🚨 Solução de Problemas

### Erro de Dependências
```bash
npm install --legacy-peer-deps
```

### Limpar Cache
```bash
npm start -- --clear-cache
```

### Problemas com Node Modules
```bash
rm -rf node_modules package-lock.json
npm install
```

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

### Padrões de Código
- **Angular Style Guide**: Siga as convenções oficiais do Angular
- **Componentes**: Use OnPush change detection quando possível
- **Services**: Implemente error handling adequado
- **Testes**: Mantenha cobertura de testes acima de 80%

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

**Conectando pessoas que querem ajudar com causas que precisam de apoio** 💙
