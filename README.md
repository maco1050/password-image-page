# password-image-page

パスワードを入力し、正しければ「正解！」と画像を表示するだけのシンプルな Web ページです。
HTML / CSS / JavaScript のみで作られており、GitHub Pages に置くだけで動きます（サーバー・データベース・ビルド不要）。

> ⚠️ **注意**
> この方式は本格的なセキュリティ用途ではなく、簡易的なアクセス制限を目的としています。
> パスワードと画像はブラウザから誰でも見られる場所（`script.js` / `correct.png`）に置かれるため、秘密情報の保護には使わないでください。

## ファイル構成

```
/
├── index.html   … ページ本体（入力画面と正解画面）
├── style.css    … 見た目（スマホ優先・レスポンシブ）
├── script.js    … パスワード判定と、変更可能な設定
├── correct.png  … 正解時に表示する画像
└── README.md    … この説明
```

## 正解画像の置き場所

正解時の画像は **`index.html` と同じフォルダ（リポジトリの一番上）** に **`correct.png`** という名前で置いてください。
同梱の `correct.png` は仮の画像（緑のチェックマーク）なので、好きな画像で上書きすれば差し替わります。

## 設定の変更方法

`script.js` の先頭にある設定を書き換えるだけです。

```js
const CORRECT_PASSWORD = "1234";                 // パスワード
const CORRECT_IMAGE = "correct.png";             // 正解画像のファイル名
const TITLE_TEXT = "パスワードを入力してください"; // タイトル
const SUCCESS_MESSAGE = "正解！";                 // 正解時のメッセージ
const ERROR_MESSAGE = "パスワードが違います";      // 不正解時のメッセージ
```

## 手元での動作確認

`index.html` をブラウザで開くだけです。`1234` を入力して「確認」を押すと正解画面になります。

## GitHub Pages で公開する手順

1. GitHub で新しいリポジトリを作成します（公開設定は Public）。
2. このフォルダのファイル一式をリポジトリに push します。
   ```sh
   git add .
   git commit -m "Add password page"
   git push origin main
   ```
3. GitHub のリポジトリページで **Settings** を開きます。
4. 左メニューの **Pages** を開きます。
5. 「Build and deployment」の **Source** を「Deploy from a branch」にし、**Branch** で `main`（フォルダは `/ (root)`）を選択します。
6. **Save** を押します。
7. 1〜数分待つと、Pages の画面上部に `https://<ユーザー名>.github.io/<リポジトリ名>/` という URL が表示されます。この URL をスマートフォンで開いてください。

### スマートフォンでの使い方

- 発行された URL をスマートフォンのブラウザ（Safari / Chrome など）で開くと、パスワード入力画面が表示されます。
- URL を QR コードにしたり、LINE やメールで送ったりすると、相手もすぐに開けます。
- ホーム画面に追加（Safari の「共有」→「ホーム画面に追加」、Chrome の「︙」→「ホーム画面に追加」）しておくとアプリのように開けます。
- ファイルを更新して push すると、数分後に公開ページにも反映されます（反映されない場合はページを再読み込みしてください）。
