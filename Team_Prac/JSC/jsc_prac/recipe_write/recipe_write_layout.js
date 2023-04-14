function loopMaker(parentName, tagName, Num) {
  for (let i = 0; i < Num; i++) {
    const element = document.createElement(tagName);
    parentName.appendChild(element);
  }
}

/* //main
const main = tagMakeCall(root, "div", "", function (element) {
  element.setAttribute("id", "main");
}); */

//main css 문제 때문에 wrap으로 하나 덮음
const mainWrapp = tagMakeCall(main, "div", "", function (element) {
  element.setAttribute("id", "main-wrapp");
});
//제일위 상단 recipe main image
const recipeImage = tagMakeCall(mainWrapp, "div", "", function (element) {
  element.setAttribute("id", "recipe-image");
});

const recipeImageMain = tagMakeCall(recipeImage, "img", "", function (element) {
  element.setAttribute(
    "src",
    "https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-and-olives_140725-1200.jpg"
  );
});
//가운데 레시피 이름
const recipeName = tagMakeCall(mainWrapp, "div", "", function (element) {
  element.setAttribute("id", "recipe-name");
});
loopMaker(recipeName, "div", 2);
recipeName.children[0].textContent = "레시피의 이름";
loopMaker(recipeName.children[1], "div", 4);
recipeName.children[1].children[0].textContent = "재료 : ";
recipeName.children[1].children[1].innerHTML =
  "고블린의 심장 100g, </br> 고양이의 털 50가닥";
recipeName.children[1].children[3].innerHTML =
  "고블린의 심장 100g, </br> 고양이의 털 50가닥";

//아래쪽 조리 방법
const recipeCooking = tagMakeCall(mainWrapp, "div", "", function (element) {
  element.setAttribute("id", "recipe-cooking");
});
tagMakeCall(recipeCooking, "div", "");
recipeCooking.children[0].innerHTML = "조리도구 : +12강 전설의검, 마녀냄비";

//상세 조리방법
const recipeCookingMethod = tagMakeCall(
  recipeCooking,
  "div",
  "",
  function (element) {
    element.setAttribute("id", "recipe-cooking-method");
  }
);
loopMaker(recipeCookingMethod, "div", 5);
for (
  let reciCookMe = 0;
  reciCookMe < recipeCookingMethod.children.length;
  reciCookMe++
) {
  loopMaker(recipeCookingMethod.children[reciCookMe], "div", 2);
}
//상세 조리방법 text
recipeCookingMethod.children[0].children[0].innerHTML = "1. 안";
recipeCookingMethod.children[1].children[0].innerHTML = "2. 녕";
recipeCookingMethod.children[2].children[0].innerHTML = "3. 하";
recipeCookingMethod.children[3].children[0].innerHTML = "4. 세";
recipeCookingMethod.children[4].children[0].innerHTML = "5. 요";

//상세 조리방법 이미지
const recipeCookingMethod_1 = tagMakeCall(
  recipeCookingMethod.children[0],
  "img",
  "",
  function (element) {
    element.setAttribute(
      "src",
      "https://barunchicken.com/wp-content/uploads/2022/07/%EA%B3%A8%EB%93%9C%EC%B9%98%ED%82%A8-2-1076x807.jpg"
    );
  }
);
const recipeCookingMethod_2 = tagMakeCall(
  recipeCookingMethod.children[1],
  "img",
  "",
  function (element) {
    element.setAttribute(
      "src",
      "https://m.cj.co.kr/images/theKitchen/PHON/0000001522/0000005247/0000001522.jpg"
    );
  }
);
const recipeCookingMethod_3 = tagMakeCall(
  recipeCookingMethod.children[2],
  "img",
  "",
  function (element) {
    element.setAttribute(
      "src",
      "https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-and-olives_140725-1200.jpg"
    );
  }
);
const recipeCookingMethod_4 = tagMakeCall(
  recipeCookingMethod.children[3],
  "img",
  "",
  function (element) {
    element.setAttribute(
      "src",
      "https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-and-olives_140725-1200.jpg"
    );
  }
);
const recipeCookingMethod_5 = tagMakeCall(
  recipeCookingMethod.children[4],
  "img",
  "",
  function (element) {
    element.setAttribute(
      "src",
      "https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-and-olives_140725-1200.jpg"
    );
  }
);
