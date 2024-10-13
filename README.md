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

1. Install app from the ground up
```
npx create-expo-app@latest --yes --template
```

2. Install watchman if absent
```
brew install watchman
```

3. Change limits if needed
```
ulimit -n // default 256 is to low
```
```
ulimit -n 65536
```

4. Generating TypeScript Types

Docs:
https://supabase.com/docs/guides/api/rest/generating-types

Added to project:
- dotenv devDep, 
- PROJECT_REF .env variable
- generate-supabase-types.js script for @npx supabase gen types@, 
- package.json script @generate-supabase-types@