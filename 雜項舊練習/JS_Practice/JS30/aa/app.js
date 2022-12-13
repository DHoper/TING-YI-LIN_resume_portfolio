var circleMenu = function circleMenu() {
  var menu = document.querySelector("#circle-menu-list");

  // var currentNum = 1;
  let sqeArray = [4, 5, 0, 1, 2, 3]; // 設置一個比較用的數組,以index[2]作為準心指標

  if (menu == null || undefined) {
    return;
  }
  (function prepareMenu() {
    menu.onclick = function (event) {
      console.clear();

      let currentDeg = menu.style.transform;  //取得menu當前角度,經下列處理後取得一number值
      (currentDeg == "") && (currentDeg = "rotate(0deg)");
      let RegExp = /-*[\d]+/g;
      currentDeg = parseInt(currentDeg.match(RegExp)[0]);
      console.log("當前角度",currentDeg); //log0//

      if (event.target.nodeName == "UL" || event.target.nodeName == "LI") {
        return;
      }

      var targetNum = parseInt(event.target.parentNode.getAttribute("data-rotateNum"));
      let targetIndex = sqeArray.indexOf(targetNum);  //設置一個代表點擊目標在sqe數組索引位置的變數
      let rotateDeg = 0;
      console.log(targetIndex);  //log1//

      //
      rotateDeg = (2 - targetIndex) * 60;  //以點擊目標sqe索引位置與準心指標sqe[2]的正負差值作為待轉角度之基數
      console.log("待轉角度", rotateDeg);  //log4//
      if ((targetIndex - 2) > 0) {
        sqeArray = sqeArray.concat(sqeArray.splice(0, (targetIndex - 2)));  //若目標為準心後3位，則按此邏輯重新排序sqe數組
        console.log("順時針");    //log2//
      } else if ((targetIndex - 2) <= 0) {
        console.log("逆時針");   //log3//
        sqeArray = sqeArray.splice((targetIndex - 2), (2 - targetIndex)).concat(sqeArray); //若為準心前兩位([0],[1])，則...
      }
      console.log("新sqe",sqeArray);  //log4//

      let finalDeg = currentDeg + rotateDeg;
      console.log("完成角度", finalDeg);  //log5//

      menu.style.transform = "rotate(" + finalDeg + "deg)";
    
    };
  })();
};

circleMenu();
