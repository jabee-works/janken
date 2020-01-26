/**
 * ジャンケンに関わるデータをオブジェクト化
 */
class Janken {
    // データ関係
    constructor() {
        this.myhand = 0;
        this.yourhand = 0;

        // ジャンケンの手と数値の関連付け
        this.handData = {
            0: "gu",
            1: "choki",
            2: "pa"
        };

        // 勝敗データ
        this.vsData = [
            [0, 1, 2],
            [2, 0, 1],
            [1, 2, 0]
        ]
        
        // 結果用
        this.resultData = [
            "引き分け",
            "ピカチュウの勝ち",
            "イーブイの勝ち"
        ]
    }

    get vsresult() {
        return this.resultData[this.vsData[this.myhand][this.yourhand]];
    }

    // 画像変更用
    handImgChange(selector, hand) {
        document.querySelectorAll(selector)[0].setAttribute("src", "img/" + this.handData[hand] + ".jpg");
    }

    // ピカチュウ側の選択
    pikaHandSelect(hand) {
        this.myhand = hand;
        this.handImgChange("#hand .myhand img", this.myhand);
    }

    // イーブイ側の選択
    evHandSelect() {
        // 乱数で0, 1, 2を生成
        this.yourhand = Math.floor(Math.random() * 3);
        this.handImgChange("#hand .yourhand img", this.yourhand);
    }

    // 結果表示
    result() {
        const vsresult = this.vsresult;
        const timeout = setTimeout(function() {
            alert(vsresult);
        }, 500);
    }
}

// ボタンを押した時点でゲーム開始
function gameStart(hand) {

    const janken = new Janken();

    // 自分の出した手を選択
    janken.pikaHandSelect(hand);

    // 相手の手を選択
    janken.evHandSelect();

    // 結果
    janken.result();
}