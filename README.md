## 短網址產生器

---

#### 主要功能

- 貼入網址輸出短網址
- 自動複製連結按鈕
- 表單驗證機制
- 短網址在本機執行期間皆有效

---

#### 環境建置與需求

- express: ^4.17.1,
- express-handlebars: ^5.3.4,
- method-override: ^3.0.0,
- mongoose: ^6.0.10

- 安裝
  - git clone
    ```
    https://github.com/ohohopen/shorturl.git
    ```
  - cd shorturl
  - $ npm install
  - $ npm i express
  - $ npm i mongoose
  - 匯入最初資料
    ```
    $ npm run seed
    ```
  - 執行程式
    ```
    $ npm run dev
    瀏覽器開啟 http://localhost:3000
    ```
