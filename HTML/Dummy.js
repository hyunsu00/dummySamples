"use strict";

function closure() {
  var cnt = 0;

  return function increaseCnt() {
    cnt++;
    console.log(cnt);
  };
}
var increaseCnt = closure();

increaseCnt();
increaseCnt();
increaseCnt();
