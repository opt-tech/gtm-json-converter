# GTM JSON Converter

Google Tag Manager がエクスポートした JSON をエクセルで開ける CSV に変換します

1 行に 1 つのタグ、列は以下を出力します

1. ID (GTM 内部で使われている識別子)
2. タグ名
3. タグ
4. document.write フラグ (カスタム HTML の場合)
5. トリガー

## 使い方

clone してためす場合

```bash
$ cd gtm-json-converter
$ npm i
$ npm start gtm.json # JSON のパスを渡す
```

グローバルインストールする場合

```bash
$ npm i -g @opt-tech/gtm-json-converter
$ gtm-json-converter gtm.json # JSON のパスを渡す
```

カレントディレクトリの `[コンテナ名] エクスポート日時.csv` に保存されます
