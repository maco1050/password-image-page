// ============================================================
// 設定（ここを書き換えるだけで内容を変更できます）
// ============================================================

// 正しいパスワード
const CORRECT_PASSWORD = "1234";

// 正解時に表示する画像のファイル名（index.html と同じ場所に置く）
const CORRECT_IMAGE = "correct.png";

// 入力画面のタイトル
const TITLE_TEXT = "パスワードを入力してください";

// 正解時のメッセージ
const SUCCESS_MESSAGE = "正解！";

// 不正解時のメッセージ
const ERROR_MESSAGE = "パスワードが違います";

// ============================================================
// 処理（通常は変更不要です）
// ============================================================

const form = document.getElementById("password-form");
const input = document.getElementById("password-input");
const errorMessage = document.getElementById("error-message");
const success = document.getElementById("success");

document.getElementById("title").textContent = TITLE_TEXT;

form.addEventListener("submit", (event) => {
  event.preventDefault(); // ページの再読み込みを防ぐ

  if (input.value === CORRECT_PASSWORD) {
    // 正解：入力画面を隠して、メッセージと画像を表示
    document.getElementById("success-message").textContent = SUCCESS_MESSAGE;
    document.getElementById("success-image").src = CORRECT_IMAGE;
    form.hidden = true;
    success.hidden = false;
    input.blur(); // スマホのキーボードを閉じる
  } else {
    // 不正解：エラーを表示し、入力欄を空にして再入力できるようにする
    errorMessage.textContent = ERROR_MESSAGE;
    input.value = "";
    input.focus();
  }
});

// 再入力を始めたらエラーメッセージを消す
input.addEventListener("input", () => {
  errorMessage.textContent = "";
});
