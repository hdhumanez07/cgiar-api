# Pasos para ejecutar la REST API

- Clonar el repositorio https://github.com/hdhumanez07/cgiar-api.git
- Ubicarse en la raiz del proyecto
- Ejecutar docker compose up --build

## Config. backend

Para ejecutar en desarrollo debe tener instalado pnpm.

Para desarrollo

```bash
  pnpm i
  pnpm install
  pnpm run dev
```

Tambien tienes otros scripts adicionales para hacer debugging y hacer pre-commit con husky para impedir hacer push a ramas si tienen errores de linter con eslint. lo que obliga a desarrolladores a seguir las reglas de eslint.

```bash
  pnpm run debug
  pnpm run prepare
```

Para producción

```bash
  pnpm install
  pnpm run build
  pnpm start
```

## Config. Frontend

En construción :(

## Authors

- [@hdhumanez07](https://www.github.com/hdhumanez07)
