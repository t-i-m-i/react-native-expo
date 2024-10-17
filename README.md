# React Native Expo

## Get started

1. Install dependencies

```
npm install
```

2. Start the app

```
npx expo start
```

## Dev log

### 1. Install app from the ground up
```
npx create-expo-app@latest --yes --template
```

### 2. Install watchman if absent
```
brew install watchman
```

### 3. Change limits if needed
```
ulimit -n // default 256 is to low
```
```
ulimit -n 65536
```

### 4. Generating TypeScript Types

Docs:
https://supabase.com/docs/guides/api/rest/generating-types
https://github.com/supabase/supabase/blob/master/examples/todo-list/nextjs-todo-list/components/TodoList.tsx

Added to project:
- dotenv devDep, 
- PROJECT_REF .env variable
- generate-supabase-types.js script for @npx supabase gen types@, 
- package.json script @generate-supabase-types@

### 5. Import components and styles using absolute references

- Install dev-dep `babel-plugin-module-resolver`
- Add root and alias to `babel.config.js`
```
plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
          alias: {
            components: './src/components',
            styles: './src/styles',
          },
        },
      ],
    ],
```
- Add baseUrl and paths to `tsconfig.json` for typescript
```
"compilerOptions": {
    "strict": true,
    "baseUrl": "./src",
    "paths": {
      "@/*": [
        "./*"
      ],
      "styles/*": ["styles/*"],
      "components/*": ["components/*"],
    }
  },
```
- now it is possible to use simple absolute paths:
`import gs from "../../styles/globalStyles";` => `import gs from "styles/globalStyles";`