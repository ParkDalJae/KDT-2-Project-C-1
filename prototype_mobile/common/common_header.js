import amEditor from "../module/all_mighty_editor.js";

const {
  multiAndSingleTagMaker,
  positionEditor,
  fontAndLayoutEditor,
  kingGodFlexEditor,
  allMightyStyleEditor,
} = amEditor;

const root = document.getElementById("root");
const header = multiAndSingleTagMaker(root, "div", "header");
const fakeHeader = multiAndSingleTagMaker(root, "div", "fakeHeader");
// const main = multiAndSingleTagMaker(root, 'div', 'main');
// const footer = multiAndSingleTagMaker(root, "div", "footer");
const headerWrap = multiAndSingleTagMaker(header, "div", "header-wrap");
const headerSearch = multiAndSingleTagMaker(header, "form", "header-search");
const headerMenu = multiAndSingleTagMaker(header, "div", "header-menu");
const headerWrapLeft = multiAndSingleTagMaker(
  headerWrap,
  "div",
  "headerwrap-Left"
);
const headerWrapTitle = multiAndSingleTagMaker(
  headerWrap,
  "div",
  "headerwrap-title"
);
const headerWrapLogin = multiAndSingleTagMaker(
  headerWrap,
  "form",
  "headerwrap-Right"
);
const headerWrapLoginButton = multiAndSingleTagMaker(headerWrapLogin, "input", {
  id: "hl-btn",
  type: "submit",
  value: "Login",
});
const headerSearchSelect = multiAndSingleTagMaker(
  headerSearch,
  "select",
  "hs-select"
);
const headerSearchInput = multiAndSingleTagMaker(
  headerSearch,
  "input",
  "hs-input"
);
const headerSearchEnter = multiAndSingleTagMaker(headerSearch, "input", {
  id: "hs-btn",
  type: "submit",
  value: "검색",
});
console.log(root);
// menu
function moduleMaker(Num) {
  const menuName = ["레시피 검색", "레시피 등록", "고객센터", "소개"];
  for (let i = 1; i <= Num; i++) {
    const headerMenuModule = multiAndSingleTagMaker(
      headerMenu,
      "form",
      "headerMenu-module" + i
    );
    const headerMenuModuleTop = multiAndSingleTagMaker(
      headerMenuModule,
      "input",
      { id: "headerMenuModule-top" + i, type: "submit", value: " " }
    );
    const headerMenuModuleBottom = multiAndSingleTagMaker(
      headerMenuModule,
      "div",
      "headerMenuModuleBottom" + i
    );
    const headerMenuModuleCss = {
      width: "60px",
      height: "80px",
      margin: "1%",
      fontSize: "10px",
    };

    const headerMenuModuleTopCss = {
      width: "100%",
      height: "70%",
      borderRadius: "20%",
    };

    const headerMenuModuleBottomCss = {
      width: "100%",
      height: "30%",
    };
    allMightyStyleEditor(headerMenuModule, headerMenuModuleCss);

    allMightyStyleEditor(headerMenuModuleTop, headerMenuModuleTopCss);
    allMightyStyleEditor(
      headerMenuModuleBottom,
      headerMenuModuleBottomCss,
      function (element) {
        element.innerHTML = menuName[i - 1];
      }
    );

    kingGodFlexEditor(headerMenuModuleBottom, "row", "center", "center");
  }
}
moduleMaker(4);

const rootCss = {
  width: "100vw",
  height: "100vh",
};

const headerCss = {
  width: "100%",
  height: "25%",
};

const mainCss = {
  width: "100%",
  height: "65%",
};

const footerCss = {
  width: "100%",
  height: "10%",
};

const headerWrapCss = {
  width: "100%",
  height: "30%",
};

const headerSearchCss = {
  width: "100%",
  height: "30%",
};

const headerMenuCss = {
  width: "100%",
  height: "40%",
};

const headerWrapLeftCss = {
  width: "30%",
  height: "100%",
};

const headerWrapTitleCss = {
  width: "40%",
  height: "100%",
  fontSize: "40px",
};

const headerWrapLoginCss = {
  width: "30%",
  height: "100%",
};

const headerWrapLoginButtonCss = {
  width: "60px",
  height: "60px",
  borderRadius: "50%",
  margin: "5%",
};

const headerSearchSelectCss = {
  width: "30px",
  height: "30px",
};

const headerSearchInputCss = {
  width: "100px",
  height: "30px",
};

const headerSearchEnterCss = {
  width: "40px",
  height: "30px",
};
// console.dir(root.style)

allMightyStyleEditor(root, rootCss);
allMightyStyleEditor(header, headerCss);
allMightyStyleEditor(fakeHeader, headerCss);
// allMightyStyleEditor(main, mainCss);
// allMightyStyleEditor(footer, footerCss);
allMightyStyleEditor(headerWrap, headerWrapCss);
allMightyStyleEditor(headerSearch, headerSearchCss);
allMightyStyleEditor(headerMenu, headerMenuCss);
allMightyStyleEditor(headerWrapLeft, headerWrapLeftCss);
allMightyStyleEditor(headerWrapTitle, headerWrapTitleCss, function (element) {
  element.innerHTML = "요너두";
});
allMightyStyleEditor(headerWrapLogin, headerWrapLoginCss);
allMightyStyleEditor(headerWrapLoginButton, headerWrapLoginButtonCss);
allMightyStyleEditor(headerSearchSelect, headerSearchSelectCss);
allMightyStyleEditor(headerSearchInput, headerSearchInputCss);
allMightyStyleEditor(headerSearchEnter, headerSearchEnterCss);

kingGodFlexEditor(headerWrap, "row", "center", "center");
kingGodFlexEditor(headerWrapTitle, "row", "center", "center");
kingGodFlexEditor(headerWrapLogin, "row", "center", "right");
kingGodFlexEditor(headerSearch, "row", "center", "center");
kingGodFlexEditor(headerMenu, "row", "center", "center");

positionEditor(header, "fixed", 1);
console.dir(root.style);
// positionEditor(main,'absolute','','',function(element){
//   element.top = "25%"
// })
// positionEditor(footer,'absolute','','',function(element){
//   element.top = "90%"
// })
