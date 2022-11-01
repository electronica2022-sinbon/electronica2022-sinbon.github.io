# 信邦參展的產品介紹網站

## 使用

網站進入點在根目錄的 index.html。

根目錄執行 server，預設 8080

```
npm run serve
```

從 http://127.0.0.1:8080 可以進入網站

最適合瀏覽的解析度: FHD (1920x1080)

## 開發指令

修改 css 要使用 sass

轉換 sass -> css 的指令(執行 watch)

```
npm run dev
```

## src 目錄介紹

### 檔案

**markdown-it.js**

markdown 語法轉換成 HTML，是用 markdown-it 引擎

**routes.js**

前端 route 的設定。(不支援參數化、巢狀)

### 資料夾

**app**

- app.js 手作框架
- router.js 前端 router

**assets**

所有的圖片與 JSON 檔案

**components**

切換畫面時的內容，一個畫面版型一個 component，可以用 route 對照使目用的時機。

每個 component 擁有 lifecycle 執行順序

1.  render
1.  bindingEvents
1.  mounted
1.  destroy

**sass**

產生 css 的編輯檔，需要安裝 sass

**video**

所有 case-study 的影片


## 外部資料

產品資料 從 air table 撈回資料，進入產品頁面會打 API，資料回來之後，才會繪製網頁


