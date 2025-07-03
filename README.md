# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Environment Variables and .env Files

This project uses environment variables to manage configuration values that may vary between environments (development, staging, production).

### Using .env Files

- Create a `.env` file in the root of the project to store your environment variables.
- For Vite + React projects, environment variables must be prefixed with `VITE_` to be exposed to the client-side code.
- Example variables:
  ```
  VITE_API_URL=https://api.example.com
  VITE_GOOGLE_CLIENT_ID=your-google-client-id
  ```

### Best Practices

- **Do not commit your `.env` file with sensitive information to GitHub or any public repository.**
- Instead, commit a `.env.example` file (like the one provided) with placeholder values to document required environment variables.
- Add `.env` to your `.gitignore` file to prevent accidental commits.
- Document the purpose of each environment variable in the README or related documentation.
- If needed, set your `.env` file permissions to read-only locally to prevent accidental changes.

### Adding `.env` to `.gitignore`

Make sure your `.gitignore` file includes the following line:

```
.env
```

This will prevent the `.env` file from being tracked by Git.

### Using Environment Variables in Code

In your React components or JavaScript files, access environment variables like this:

```js
const apiUrl = import.meta.env.VITE_API_URL;
```

Refer to the [Vite Environment Variables Guide](https://vitejs.dev/guide/env-and-mode.html) for more details.
