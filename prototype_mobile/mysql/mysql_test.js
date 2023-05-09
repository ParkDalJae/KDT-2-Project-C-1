import http from "http";
import Url from "url";
import fs from "fs";
import mysql from "mysql";
import qs from "querystring";
import serverReadFileModule from "../module/server_readfile.js";
import reqOnData from "../module/server_post.js";
import dbSet from "./mysql_connect.js";

//mysql 연동

/* 

  mysql database 이름 
  create table add_recipe{
  id int NOT NULL AUTO_INCREMENT;
  title varchar(255) NOT NULL;
  ingredients varchar(255) NOT NULL;
  content varchar(255) NOT NULL;
  primary key(id)}
*/

//GET으로 받아올 때 작성한 것으로 POST는 뒤로 미루었습니다.

const server = http.createServer((req, res) => {
  const urlParse = Url.parse(req.url);
  const urlPathName = urlParse.pathname;
  const urlMethod = req.method;

  // console.log(urlPathName)
  // console.log(urlMethod)

  //페이지별 폴더 제작 후 페이지별로 html, js파일 case에 넣기 주석으로 구분해주시면 감사하겠습니다.
  //html파일에 script type='module'로 추가시 밑에 common파일 추가한것 참고
  //나머지 페이지는 레시피리스트처럼 action에 적을 것 예상하고 추가하면 됩니다.
  if (urlMethod === "GET") {
    switch (urlPathName) {
      case "/":
        serverReadFileModule(res, "mysql.html", "text/html", 200);
        break;

      // case "/mysql_layout.js":
      //   serverReadFileModule(res, "mysql_layout.js", "text/javascript", 200);
      //   break;

      // case "/db.json":
      //   serverReadFileModule(res, "db.json", "application/json", 200);
      //   break;

      case "/print":
        serverReadFileModule(res, "mysql_h.html", "text/html", 200);
        break;
      //메인 페이지
      case '/main.html':
        serverReadFileModule(res, '../main/main.html', 'text/html', 200)
        break
      case '/main.js':
        serverReadFileModule(res, '../main/main.js', 'text/javascript', 200)
        break

      //레시피 리스트
      case '/recipe_list':
        serverReadFileModule(res, 'recipe_list/recipe_list.html', 'text/html', 200)
        break
      case '/recipe_list.js':
        serverReadFileModule(res, 'recipe_list/recipe_list.js', 'text/javascript', 200)
        break

      //common 파일
      case '/common/common_header.js':
        serverReadFileModule(res, 'common/common_header.js', 'text/javascript', 200)
        break

      //favicon에러처리
      case "/favicon.ico":
        (err) => {
          if (err) {
            throw err;
          }
        };
        break;

      //all_mighty_editor
      case "/module/all_mighty_editor.js":
        serverReadFileModule(
          res,
          "../module/all_mighty_editor.js",
          "text/javascript",
          200
        );
        break;

      //404 페이지 처리
      default:
        serverReadFileModule(res, "404.html", "text/html", 404);
        console.log(urlPathName);
        break;
    } //if 문 내 switch 끝
  } else if (urlMethod === "POST" && urlPathName === '/print') {
    req.on("data", (chunk) => {
      reqOnData(chunk, 'insert into b (name, type, taek) values (?,?,?)', (dbSet) => {
        dbSet.query("SELECT * FROM  b", function (results) {
          fs.writeFileSync("db.json", JSON.stringify(results, null, 2));
        });
      });
    });
    req.on("end", function () {
      res.writeHead(302, { location: "/main.html" })
      res.end();
    });
  } //createServer 내 if 문 끝
}); //server 함수 끝

server.listen(2080, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("2080포트가 정상작동합니다.");
  }
}); // listen 끝