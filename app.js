"use strict";
//クイズ、選択肢、解答のデータ配列
const quiz = [
  {
    question:
      "フォートナイトで、一撃あたりのダメージが一番高いのはどれ(ヘッドショット含む)？",
    answers: [
      "金ロケットランチャー",
      "金ポンプショットガン",
      "青ボルトアクションスナイパーライフル",
      "紫チャージショットガン",
    ],
    correct: "青ボルトアクションスナイパーライフル",
  },
  {
    question: "フォートナイトで、オーラスキンが初登場したのはどのシーズン？",
    answers: [
      "シーズン６",
      "シーズン９",
      "シーズン８",
      "チャプター２シーズン１",
    ],
    correct: "シーズン８",
  },
  {
    question:
      "フォートナイトで、エネルギーライフルのマガジンサイズは次のうちどれ？",
    answers: ["１５発", "１８発", "２０発", "２２発"],
    correct: "１５発",
  },
];

const quizLength = quiz.length; //クイズセットの数
let quizIndex = 0; //カウンター用、何問目のクイズか
let score = 0; //正解数

const $button = document.getElementsByTagName("button"); //ボタンの取得
const buttonLength = $button.length; //ボタン（選択肢）数

//
const setupQuiz = () => {
  document.getElementById("js-question").textContent = quiz[quizIndex].question;

  let buttonIndex = 0;

  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
};

setupQuiz();

const clickHandler = (e) => {
  if (e.target.textContent === quiz[quizIndex].correct) {
    window.alert("正解！");
    score++;
  } else {
    window.alert("残念…");
  }

  quizIndex++;

  if (quizIndex < quizLength) {
    setupQuiz();
  } else {
    if (score === quizLength) {
      window.alert("終了！全問正解！あなたはフォートナイト博士です！");
    } else {
      window.alert(
        "終了！あなたの正解数は" + score + "/" + quizLength + "です！"
      );
    }
  }
};

let handleIndex = 0;

while (handleIndex < buttonLength) {
  $button[handleIndex].addEventListener("click", (e) => {
    clickHandler(e);
  });
  handleIndex++;
}