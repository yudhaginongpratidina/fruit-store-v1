# FRUIT STORE V1  - REDESIGN FRUIT STORE

Fruit store v1 adalaha program toko buah dengan fitur

- CRUD Category
- CRUD Buah
- Login dan Register
- Update Password
- Add to Cart

Program ini merupakan re design dari program fruit dari tugas saya msib - membuat dan mengkonsumsi API (https://github.com/yudhaginongpratidina/fruit-stores.git)

## SETUP PROJECT :

```bash
https://github.com/yudhaginongpratidina/fruit-store-v1.git
cd fruit-store-v1
```

### A. BACKEND

```bash
cd backend
npm install
```

Setup .env

```env
APPICATION_PORT=4000
DATABASE_URL="jenis_database://username:password@host:port_database/nama_database"
```

```env
APPICATION_PORT=4000
DATABASE_URL="mysql://root:@localhost:3306/toko_buah"
```

### B. FRONTEND

```bash
cd frontend
npm i
```

## C. RUN

- Open VS Code
- Open Folder front end
- Open Terminal
- Run

```bash
npm run dev
```

- Open VS Code (New Window)
- Open Folder backend
- Open Terminal
- Run

```bash
npm run dev
```

## TECH STACK

BACKEND

```json
"dependencies": {
    "@prisma/client": "^5.20.0",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.21.1"
},
"devDependencies": {
    "nodemon": "^3.1.7",
    "prisma": "^5.20.0"
}
```

FRONTEND

```json
"dependencies": {
"axios": "^1.7.7",
"react": "^18.3.1",
"react-dom": "^18.3.1",
"react-icons": "^5.3.0",
"react-router-dom": "^6.26.2",
"zustand": "^5.0.0-rc.2"
},
"devDependencies": {
"@eslint/js": "^9.11.1",
"@playwright/test": "^1.48.0",
"@types/node": "^22.7.5",
"@types/react": "^18.3.10",
"@types/react-dom": "^18.3.0",
"@vitejs/plugin-react-swc": "^3.5.0",
"autoprefixer": "^10.4.20",
"eslint": "^9.11.1",
"eslint-plugin-react": "^7.37.0",
"eslint-plugin-react-hooks": "^5.1.0-rc.0",
"eslint-plugin-react-refresh": "^0.4.12",
"globals": "^15.9.0",
"postcss": "^8.4.47",
"tailwindcss": "^3.4.13",
"vite": "^5.4.8"
}
```





