const root = document.getElementById("root");
const body = document.body;
//header
const header = tagMakeCall(root, "div", "", function (element) {
  element.setAttribute("id", "header");
});
const headerDiv = tagMakeCall(header, "div", "", function (element) {
  element.setAttribute("id", "headerDiv");
});
const logo = tagMakeCall(headerDiv, "div", "로고", function (element) {
  element.setAttribute("id", "logo");
});
const menu = tagMakeCall(headerDiv, "div", "", function (element) {
  element.setAttribute("id", "menu");
});
tagMakeCall(menu, "div", "레시피검색");
tagMakeCall(menu, "div", "레시피등록");
tagMakeCall(menu, "div", "커뮤니티");
tagMakeCall(menu, "div", "고객센터");
tagMakeCall(menu, "div", "소개");

const search = tagMakeCall(headerDiv, "div", "", function (element) {
  element.setAttribute("id", "search");
});
//search-select
const searchSelect = tagMakeCall(search, "select", "", function (element) {
  element.setAttribute("id", "search-select");
});
const selectOption = tagMakeCall(
  searchSelect,
  "option",
  "레시피",
  function (element) {
    element.setAttribute("value", "recipe");
  }
);
//search-input
const searchInput = tagMakeCall(search, "input", "", function (element) {
  element.setAttribute("id", "search-input");
});
//search-button
const searchButton = tagMakeCall(search, "button", "검색", function (element) {
  element.setAttribute("id", "search-button");
});
//main
const main = tagMakeCall(root, "div", "", function (element) {
  element.setAttribute("id", "main");
});