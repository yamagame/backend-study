# WebAPI

- API (Applicaiton Programming Interface)

  アプリケーションを作るときに使うデータの出入り口のこと。

- WebAPI

  インターネントにあるサービスを利用するためのAPI

## Webアプリケーションの構成

```mermaid
graph LR;
  Client["クライアント (Webブラウザ)"] --> Server["サーバー (Webサーバー)"]
  Server --> Client
```

## ネットワーク技術

### OSI参照モデル

| レイヤ | 名称                 | 概要                                   |
| ------ | -------------------- | -------------------------------------- |
| 7      | アプリケーション層   | 具体的な通信サービスを行うための定義   |
| 6      | プレゼンテーション層 | データの表現形式を定義する             |
| 5      | セッション層         | 通信の手順を定義する                   |
| 4      | トランスポート層     | 端末同士の通信方法を定義する           |
| 3      | ネットワーク層       | 通信経路の選択を行う                   |
| 2      | データリンク層       | 通信機器の接続を定義                   |
| 1      | 物理層               | 物理的な接続、電波、電気、ケーブルなど |

### インターネット プロトコル スイート

| レイヤ | 名称               | 概要                                                             |
| ------ | ------------------ | ---------------------------------------------------------------- |
| 4      | アプリケーション層 | DNS、TLS/SSL、HTTP、POP3、SMTP、SNMP、SSH、TELNET、FTP、IMAPなど |
| 3      | トランスポート層   | TCP、UDP、SCTPなど                                               |
| 2      | インターネット層   | IPv4、IPv6、ARP                                                  |
| 1      | リンク層           | イーサネット、Wi-Fi、PPP、FDDIなど                               |

### IP(インターネットプロトコル)

ネットワーク層/インターネット層のプロトコル

- IPv4
  - IPアドレス
  - サブネットマスク
  - ユニキャスト、マルチキャスト、ブロードキャスト
- IPv6
  - IPアドレス
  - ユニキャスト、マルチキャスト、エニーキャスト

### TCP/IP と UDP/IP

トランスポート層のプロトコル

- TCP (Transmission Control Protocol / トランスミッションコントロールプロトコル)
  - ハンドシェイク : 必要
  - 再送やタイムアウトの制御 : あり
  - データの順序性の制御 : あり
  - データサイズの制限 : なし
- UDP (User Datagram Protocol / ユーザーデータグラムプロトコル)
  - ハンドシェイク : 不要
  - 再送やタイムアウトの制御 : なし
  - データの順序性の制御 : なし
  - データサイズの制限 : あり

### ネットワークエンジニアの資格

- [CCNA](https://www.cisco.com/c/dam/global/ja_jp/training-events/training-certifications/exam-topics/200-301-CCNA.pdf)
- [CCNP](https://www.cisco.com/c/dam/global/ja_jp/training-events/training-certifications/exam-topics/350-401-ENCOR.pdf)

- [パケットトレーサー](https://www.netacad.com/ja/courses/packet-tracer)

## 主なデータ形式

- JSON

  ```json
  {
    "year": 2022,
    "month" : "april",
  }
  ```

- [YAML](https://yaml.org/spec/1.2.2/)

  ```yaml
  request:
    year: 2022
    month: april
  ```

  - [アンカー](https://yaml.org/spec/1.2.2/#692-node-anchors)
  - [タグ](https://yaml.org/spec/1.2.2/#691-node-tags)

- XML

  ```xml
  <xml>
    <year>2022</year>
    <month>april</month>
  </xml>
  ```

  - [HTMLの方向性とXMLの位置付け～HTML5の概要と注目機能～](http://x-plus.utj.co.jp/xml-exp/32-tokushu.html)
  - [DTDとはいったい何でしょうか？](https://www.homepage-tukurikata.com/html/dtd.html)

# HTTP

## Developer Tools

- [Chrome DevTools を使用して低コントラストのテキストを検出して修正する](https://developers.google.com/codelabs/devtools-cvd)
- [Network features reference](https://developer.chrome.com/docs/devtools/network/reference/)

## クライアントAPI

- [XMLHttpRequest](https://developer.mozilla.org/ja/docs/Web/API/XMLHttpRequest)
- [Fetch API](https://developer.mozilla.org/ja/docs/Web/API/Fetch_API)
- [WebSocket API](https://developer.mozilla.org/ja/docs/Web/API/WebSockets_API)
- [WebRTC API](https://developer.mozilla.org/ja/docs/Web/API/WebRTC_API)

## HTTPリクエストを利用した通信技術

- [REST](https://aws.amazon.com/jp/what-is/restful-api/)
- RPC ([gRPC](https://grpc.io/))
- [SOAP](https://www.redhat.com/ja/topics/integration/whats-the-difference-between-soap-rest)
- [JSONP](https://ja.wikipedia.org/wiki/JSONP)
- [GraphQL](https://graphql.org/)

参考：[SOAP と REST の違いは何ですか？](https://www.xlsoft.com/jp/blog/blog/2021/06/23/smartbear-19976/)

## URL/URIの構造

```text
https://user:password@www.example.com:123/forum/questions/?tag=networking&order=newest#top
```

- [http/httpsスキームの構文例](https://ja.wikipedia.org/wiki/Uniform_Resource_Identifier#http/https%E3%82%B9%E3%82%AD%E3%83%BC%E3%83%A0%E3%81%AE%E6%A7%8B%E6%96%87%E4%BE%8B)

## HTTP レスポンスステータスコード

1. [情報レスポンス (100–199)](https://developer.mozilla.org/ja/docs/Web/HTTP/Status#%E6%83%85%E5%A0%B1%E3%83%AC%E3%82%B9%E3%83%9D%E3%83%B3%E3%82%B9)
2. [成功レスポンス (200–299)](https://developer.mozilla.org/ja/docs/Web/HTTP/Status#%E6%88%90%E5%8A%9F%E3%83%AC%E3%82%B9%E3%83%9D%E3%83%B3%E3%82%B9)
3. [リダイレクトメッセージ (300–399)](https://developer.mozilla.org/ja/docs/Web/HTTP/Status#%E3%83%AA%E3%83%80%E3%82%A4%E3%83%AC%E3%82%AF%E3%83%88%E3%83%A1%E3%83%83%E3%82%BB%E3%83%BC%E3%82%B8)
4. [クライアントエラーレスポンス (400–499)](https://developer.mozilla.org/ja/docs/Web/HTTP/Status#%E3%82%AF%E3%83%A9%E3%82%A4%E3%82%A2%E3%83%B3%E3%83%88%E3%82%A8%E3%83%A9%E3%83%BC%E3%83%AC%E3%82%B9%E3%83%9D%E3%83%B3%E3%82%B9)
5. [サーバーエラーレスポンス (500–599)](https://developer.mozilla.org/ja/docs/Web/HTTP/Status#%E3%82%B5%E3%83%BC%E3%83%90%E3%83%BC%E3%82%A8%E3%83%A9%E3%83%BC%E3%83%AC%E3%82%B9%E3%83%9D%E3%83%B3%E3%82%B9)

## HTTP ヘッダー

- [Cookie](https://developer.mozilla.org/ja/docs/Web/HTTP/Headers/Cookie)
- [Access-Control-Allow-Origin](https://developer.mozilla.org/ja/docs/Web/HTTP/Headers/Access-Control-Allow-Origin)
- [Content-Type](https://developer.mozilla.org/ja/docs/Web/HTTP/Headers/Content-Type)
- [X-Forwarded-For](https://developer.mozilla.org/ja/docs/Web/HTTP/Headers/X-Forwarded-For)
- [Location](https://developer.mozilla.org/ja/docs/Web/HTTP/Headers/Location)
- [Host](https://developer.mozilla.org/ja/docs/Web/HTTP/Headers/Host)
- [Referer](https://developer.mozilla.org/ja/docs/Web/HTTP/Headers/Referer)
- [User-Agent](https://developer.mozilla.org/ja/docs/Web/HTTP/Headers/User-Agent)

## HTTP/2

少しでもネットワークの負荷を減らしたい思惑で、HTTPにストリームの仕組みを取り入れたもの。

- [普及が進む「HTTP/2」の仕組みとメリットとは](https://knowledge.sakura.ad.jp/7734/)

## HTTP/3

ベースは Google が開発した QUIC。HTTP/2の問題を解決するためにUDPベースで開発されたもの。

- [Wikipedia HTTP/3](https://ja.wikipedia.org/wiki/HTTP/3)
- [HTTP/2のTCPレベルのHoLブロッキングとQUIC](https://dorapon2000.hatenablog.com/entry/2021/04/11/180740)

# OpenAPI
## サンプルREST API

- [郵便番号検索API](http://zipcloud.ibsnet.co.jp/doc/api)

  ```bash
  curl https://zipcloud.ibsnet.co.jp/api/search?zipcode=7830060
  ```

  参考：[郵便局：郵便番号データ](https://www.post.japanpost.jp/zipcode/dl/readme.html)

- [GitHub REST API](https://docs.github.com/ja/rest)

## OpenAPI (Swagger)

- [OpenAPI](https://www.openapis.org/)
- [Google Cloud - Cloud Endpoints | OpenAPI の概要](https://cloud.google.com/endpoints/docs/openapi/openapi-overview?hl=ja)

```yaml
swagger: "2.0"
info:
  title: Airport Codes
  description: Get the name of an airport from its three-letter IATA code.
  version: 1.0.0
host: YOUR-PROJECT-ID.appspot.com
schemes:
  - "http"
  - "https"
paths:
  /airportName:
    get:
      description: "Get the airport name for a given IATA code."
      operationId: "airportName"
      parameters:
        -
          name: iataCode
          in: query
          required: true
          type: string
      responses:
        200:
          description: "Success."
          schema:
            type: string
        400:
          description: "The IATA code is invalid or missing."
```

- [Google Cloud - Cloud Endpoints | Cloud Endpoints for OpenAPI](https://cloud.google.com/endpoints/docs/openapi?hl=ja)

### サーバーサイドのコード例

```typescript
import express, { Request, Response } from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/hello", (req: Request, res: Response) => {
  res.send({
    message: "Hello World",
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Start example server`);
  console.log(`http://localhost:${PORT}`);
});
```

```yaml
swagger: "2.0"
info:
  title: Hello World API
  description: say Hello World!
  version: 1.0.0
host: localhost:3000
schemes:
  - "http"
paths:
  /hello:
    get:
      description: "response Hello World message."
      responses:
        200:
          description: "Success."
          schema:
            type: object
            properties:
              message:
                type: string
                example: Hello World
```

# WebSocket

- [WebSocket](https://developer.mozilla.org/ja/docs/Web/API/WebSockets_API)

## サンプルコード

```typescript
// サーバー側
import { Server } from "ws";
const PORT = Number(process.env.PORT || 4000);
const ws = new Server({ port: PORT });

ws.on("connection", (client) => {
  client.on("message", (message) => {
    console.log("Received: " + message);
    client.send(message.toString() + " from server");
  });
});
```

```html
<!-- クライアント側 -->
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>
  <body>
    <button id="btn">Hello</button>
    <input type="text" id="hello-text" />

    <script>
      const sock = new WebSocket("ws://127.0.0.1:4000");

      const text = document.getElementById("hello-text");
      let hello = "Hello!";
      text.value = hello;
      text.addEventListener("change", function (e) {
        hello = e.target.value;
      });

      sock.addEventListener("open", (e) => {
        console.log("接続が開かれたときに呼び出されるイベント");
      });

      sock.addEventListener("message", (e) => {
        console.log("サーバーからメッセージを受信したときに呼び出されるイベント : " + e.data);
      });

      sock.addEventListener("close", (e) => {
        console.log("接続が閉じられたときに呼び出されるイベント");
      });

      sock.addEventListener("error", (e) => {
        console.log("エラーが発生したときに呼び出されるイベント");
      });

      btn.addEventListener("click", (e) => {
        sock.send(hello);
      });
    </script>
  </body>
</html>
```

参考:[WebSocket(ブラウザAPI)とws(Node.js) の基本、自分用のまとめ](https://qiita.com/okumurakengo/items/c497fba7f16b41146d77)

# GraphQL

## 特徴

- 必要な情報だけ取り出せる
- 一度のリクエストで複数の情報を取り出せる
- 型定義ができる

## サンプルコード

- [サンプルコード](https://graphql.org/graphql-js/running-an-express-graphql-server/)

```typescript
// サーバー
import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello: String
    world: String
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
  hello: () => {
    return "Hello!";
  },
  world: () => {
    return "World!";
  },
};

const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
app.listen(4000);
console.log("Running a GraphQL API server at http://localhost:4000/graphql");
```

```typescript
// クライアント
import { GraphQLClient } from "graphql-request";

const endpoint = "http://localhost:4000/graphql";
const query = `{ hello, world }`;

const client = new GraphQLClient(endpoint);
client.request(query).then((data: any) => console.log(data));
```

```bash
# 実行例
$ npx ts-node GraphQLServer/client.ts
{ hello: 'Hello!', world: 'World!' }
```
