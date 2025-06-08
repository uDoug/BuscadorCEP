# 🔍 Consulta de CEP com React

Aplicação web simples para consultar informações de endereço a partir de um **CEP** brasileiro, utilizando a API do [ViaCEP](https://viacep.com.br/) e alertas do **SweetAlert2**.

---

## 🚀 Tecnologias utilizadas

- [React](https://reactjs.org/)
- [SweetAlert2](https://sweetalert2.github.io/)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

---

## 📦 Pré-requisitos

Antes de rodar o projeto, você precisa ter:

- [Node.js](https://nodejs.org/) instalado
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/) instalado

---

## 🛠️ Como rodar o projeto

1. **Clone o repositório:**

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```

2. **Acesse a pasta do projeto:**

```bash
cd nome-do-repositorio
```

3. **Instale as dependências:**

```bash
npm install
# ou
yarn
```

4. **Inicie o servidor de desenvolvimento:**

```bash
npm run dev
# ou
yarn dev
```

5. **Abra no navegador:**

Acesse [http://localhost:5173](http://localhost:5173) (caso esteja usando Vite) ou a URL indicada no terminal.

---

## ✨ Funcionalidades

- Valida entrada de CEP (deve ter 8 dígitos)
- Consulta CEP na API pública do ViaCEP
- Exibe logradouro, bairro, localidade e UF
- Feedback de erro e sucesso com SweetAlert2

---


## 📸 Exemplo de uso

> O usuário digita um CEP e clica em "Buscar". O sistema retorna as informações de endereço se o CEP for válido.

---

## 🧾 Autor

Dougllasa Vieira Damascena dos Santos.