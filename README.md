Aqui está o arquivo `README.md` com as modificações:

```markdown
# Whitebook Checkout

Whitebook Checkout é uma página de checkout para assinatura de planos. Nele, você pode:

- Escolher o plano desejado.
- Preencher os dados necessários para a assinatura.
- Enviar uma requisição de pagamento.
- Receber feedback em tempo real sobre o sucesso ou falha da transação.

## Como rodar o projeto

Este projeto usa [Next.js](https://nextjs.org).

### Passos para rodar localmente

1. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   ```

2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   # ou
   yarn dev
   # ou
   pnpm dev
   ```

3. Acesse no navegador:
   [http://localhost:3000](http://localhost:3000)

O projeto atualiza automaticamente conforme você edita os arquivos.

---

## Bibliotecas utilizadas

- **@hookform/resolvers**: Integração do `react-hook-form` com bibliotecas de validação como `zod`.
- **@react-input/mask**: Máscara para inputs de formulário.
- **@tanstack/react-query**: Gerenciamento de estado assíncrono e cache de requisições HTTP.
- **axios**: Cliente HTTP para requisições à API.
- **next**: Framework React para aplicações web modernas.
- **react** e **react-dom**: Biblioteca principal para construção da interface.
- **react-hook-form**: Gerenciamento de formulários de forma eficiente.
- **react-icons**: Coleção de ícones para React.
- **react-spinners**: Componentes de loading para UX.
- **react-toastify**: Notificações toast para feedback ao usuário.
- **styled-components**: Estilização com CSS-in-JS.
- **zod**: Biblioteca de validação de schemas.

---

## Testes

Este projeto utiliza [Cypress](https://www.cypress.io/) para garantir a qualidade do código com testes de componentes e testes E2E.

### Como rodar os testes

1. **Instale as dependências de desenvolvimento**:
   ```bash
   npm install --save-dev cypress
   ```

2. **Para rodar os testes E2E**:
   ```bash
   npm run test:e2e
   ```

3. **Para rodar os testes de componente**:
   ```bash
   npm run test:component
   ```

### Casos de Teste

#### **RadioButton Component**
- **Objetivo**: Garantir que os planos sejam renderizados corretamente, que a seleção de planos funcione e que o estado de seleção seja refletido corretamente.
  
  - **Renderização correta dos planos**:
    Verifica se os títulos dos planos são renderizados corretamente.
    ```javascript
    cy.mount(<RadioButton selected={null} plans={mockPlans} handleChange={cy.stub()} />);
    cy.contains("Premium Anual | Parcelado").should("exist");
    cy.contains("Premium Anual | À Vista").should("exist");
    ```

  - **Seleção de plano**:
    Verifica se um plano é selecionado corretamente ao clicar no botão de rádio.
    ```javascript
    cy.get("input[type='radio']").first().click();
    cy.wrap(handleChange).should("have.been.calledWith", "32");
    ```

#### **CheckoutForm Component**
- **Objetivo**: Verificar se o formulário de checkout valida corretamente os campos e submete os dados quando todos os campos forem válidos.

  - **Renderização do formulário**:
    Verifica se os textos de introdução aparecem corretamente.
    ```javascript
    cy.mount(<CheckoutForm onSubmit={cy.stub()} isPending={false} />);
    cy.contains("Estamos quase lá!").should("be.visible");
    cy.contains("Insira seus dados de pagamento abaixo:").should("be.visible");
    ```

  - **Validação de campos vazios**:
    Verifica se a validação ocorre corretamente quando o formulário é enviado com campos obrigatórios não preenchidos.
    ```javascript
    cy.mount(<CheckoutForm onSubmit={cy.stub()} isPending={false} />);
    cy.get("form").submit();
    cy.contains("Número do cartão deve ter 16 dígitos").should("be.visible");
    ```

  - **Envio do formulário com dados válidos**:
    Verifica se o formulário é enviado corretamente quando todos os campos estiverem válidos.
    ```javascript
    cy.mount(<CheckoutForm onSubmit={onSubmitStub} isPending={false} />);
    cy.get('input[name="cardNumber"]').type("4111 1111 1111 1111");
    cy.get('input[name="expiry"]').type("12/25");
    cy.get('input[name="cvv"]').type("123");
    cy.get('input[name="cardName"]').type("João da Silva");
    cy.get('input[name="cpf"]').type("123.456.789-09");
    cy.get("form").submit();
    cy.wrap(onSubmitStub).should("have.been.calledOnce");
    ```

--- 
```

Este arquivo já está pronto para ser utilizado. Basta copiá-lo e salvar com o nome `README.md` no seu projeto.