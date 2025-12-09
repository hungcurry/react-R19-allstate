## React版本
```jsx
使用v19 + Routerv7
專案是使用購物車範例
三種全域管理檔案
1. useContext + useReducer
2. Redux
3. Zustand
```

## React 影響檔案
```jsx
App.tsx
Navbar.tsx
ProductCard.tsx
Cart.tsx
CartItem.tsx
```

## 啟動開發伺服器

```sh
npm run dev
```

## 資料夾結構

```
src/
├─ main.tsx            # App 入口
├─ App.tsx             # 應用主體 + 路由
├─ index.css           # 全域樣式
│
├─ contexts/           # 所有 Context Provider
│  ├─ pure/            # 純 useContext
│  │  ├─ ThemeContext.tsx
│  │  ├─ UserContext.tsx
│  │  └─ LanguageContext.tsx
│  │
│  ├─ complex/         # useContext + useReducer
│  │  ├─ CartContext.tsx
│  │  └─ CountContext.tsx
│  │
│  └─ index.ts         # 可選：統一 export
│
├─ reducers/           # 純 reducer
│  ├─ cartReducer.ts
│  └─ countReducer.ts
│
├─ stores/             # Zustand / Redux Toolkit
│  ├─ useCartStore.ts
│  └─ userStore.ts
│
├─ components/         # 共用元件
│  ├─ Navbar.tsx
│  ├─ Header.tsx
│  ├─ ProductCard.tsx
│  └─ CartItem.tsx
│
├─ pages/              # 頁面元件
│  ├─ ProductList.tsx
│  └─ Cart.tsx
│
├─ types/              # 型別定義
│  └─ index.ts
│
└─ data/               # 靜態資料（mock data）
   └─ products.ts
```

## 用途說明

- `components/`：可重用 UI 元件
- [`context/`](src/context/CartContext.tsx )：React Context 狀態管理
- `data/`：靜態產品資料
- `pages/`：各頁面主體
- `types/`：TypeScript 型別

---

## 常用指令

| 指令             | 說明                   |
|------------------|------------------------|
| npm run dev      | 啟動本地開發伺服器     |
| npm run build    | 建置專案               |
| npm run preview  | 預覽建置產物           |
| npm run lint     | 程式碼靜態檢查         |

---
