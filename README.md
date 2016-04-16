#AC Unit Test (Google Chrome版)

AtCoder の問題ページから、ユニットテストを生成する Google Chrome アドオンです。

##ダウンロード

* Firefox 版： [AC Unit Test :: Add-ons for Firefox](https://addons.mozilla.org/ja/firefox/addon/ac-unit-test/ "AC Unit Test :: Add-ons for Firefox")
* Google Chrome 版： [AC Unit Test - Chrome ウェブストア](https://chrome.google.com/webstore/detail/lmahhninbclefepjbcdfbcjnancipfmi/ "AC Unit Test - Chrome ウェブストア")

##対応言語

* Java (JUnit)
* C# (MS Test)

対応言語の切り替えは、拡張機能 → AC Unit Test の「オプション」で行えます。

##使い方

1. AtCoder の問題ページを開く
2. 右クリック → "ユニットテストを生成" をクリック

これで、ユニットテストがクリップボードにコピーされました！
あとは、任意のエディタで「貼り付け」を行ってください。

##（参考）eclipse でのユニットテスト作成＆実行方法

1. （Main.java と同じところで）右クリック → "新規" → "JUnit テスト・ケース" をクリック
2. 以下の設定を行い、"Finish" ボタンをクリック
    * 新規 JUnit 4 テスト
    * パッケージ: (空欄)
    * 名前: MainTest
3. "新規 JUnit テスト・ケース" ダイアログが表示されたら、"次のアクションを実行 (JUnit 4 ライブラリーをビルド・パスに追加)" を選択し、"OK" ボタンをクリック
4. AtCoder の問題ページを開いて、右クリック → "ユニットテストを生成" をクリック
5. MainTest.java 上で右クリック → "実行" → "JUnit テスト" をクリック

## Firefox 版

[YujiSoftware/ac-unit-test: AtCoder の問題ページから、ユニットテストを生成する Firefox アドオン](https://github.com/YujiSoftware/ac-unit-test "YujiSoftware/ac-unit-test: AtCoder の問題ページから、ユニットテストを生成する Firefox アドオン")
