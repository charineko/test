import { getNewsList } from "./modules/get-news-list.js";

$(function () {
  // ----------------------------------------------
  // お知らせ一覧ページ
  // ----------------------------------------------

  // お知らせ一覧を取得
  getNewsList("./", 5);
});
