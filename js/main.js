let myhand, yourhand;

const handData = {
    0: "gu",
    1: "choki",
    2: "pa"
}

const vsData = [
    [0, 1, 2],
    [2, 0, 1],
    [1, 2, 0]
]

const resultData = [
    "引き分け",
    "ピカチュウの勝ち",
    "イーブイの勝ち"
]

// ボタンを押した時点でゲーム開始
function gameStart(hand) {

    // 自分の出した手を選択
    myhandSelect(hand);

    // 相手の手を選択
    yourhandSelect();

    // 結果
    result();
}

function myhandSelect(hand) {
    myhand = hand;
    
    document.querySelectorAll("#hand .myhand")[0].setAttribute("src", "img/" + handData[myhand] + "jpg")
}

function yourhandSelect() {
    // 乱数で0, 1, 2を生成
    yourhand = Math.floor(Math.random() * 3);
}

// 勝敗
function result() {
    alert(resultData[vsData[myhand][yourhand]]);
}