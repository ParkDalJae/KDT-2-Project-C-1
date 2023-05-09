import all_mighty_editor from "../module/all_mighty_editor.js";
import pagingRenderContent from '../module/paging_render_content.js'
import pagingButton from '../module/paging_render_button.js'

const { multiAndSingleTagMaker, kingGodFlexEditor, fontAndLayoutEditor, allMightyStyleEditor } = all_mighty_editor;

let page = {
  total : 1151, //전체 게시글 갯수
  pageContentCount : 4, //한페이지에 보여질 게시글 갯수
  currPage : 1, //현재페이지
  pageNumCount : 5, //중간 페이징 버튼 갯수
  boxInnerText :  `레시피 이름 : 꼬리곰탕 \n 필요 재료 : 꼬리, 곰, 물\n 필요 도구 :칼, 냄비, 도마\n 작성자 : 김첨지\n 추천수 : 108\n`, //박스 안쪽 텍스트
  //레시피 리스트 이미지 스타일
  recipeListImgPage : {
  width: "30%",
  height: "100%",
  margin: "2%",
},
  //레시피 리스트 박스 스타일
  recipeListBoxStyle : {
  display: "flex",
  flexDirection: "row",
  width: "70%",
  height: "25%",
  padding: "2%",
  backgroundColor: "#DAB988",
},
}

// //전체 페이지 갯수(밑에 숫자 부분)
// const totalPageCount = Math.ceil(total / pageContentCount);

// //화면에 보여질 페이지 그룹 함수
// function currPageGroup(currPage, pageNumCount = 5) {
//   return Math.ceil(currPage / pageNumCount);
// }

//root 자식
const numberListWrap = document.getElementById('number-list-wrap')
const recipeListWrap = document.getElementById('recipe-list-wrap')




//게시글을 포함시킨 renderContent
// const renderContent =  (page, parent, innerText) => {
//   while (parent.hasChildNodes()) {
//     parent.removeChild(parent.lastChild);

//   }

//     for (
//       let i = total - (page-1)*pageContentCount;
//       i >= 1 && i > total - page*pageContentCount;
//       i --
    // ) {
//     }
    
// };

// //박스 안쪽 텍스트
// const 

// //레시피 리스트 이미지 스타일
// const recipeListImapage.ge = {
//   width: "30%",
//   height: "100%",
//   margin: "2%",
// };

// //레시피 리스트 박스 스타일
// const recipeListBoxStyle = {
//   display: "flex",
//   flexDirection: "row",
//   width: "70%",
//   height: "25%",
//   padding: "2%",
//   backgroundColor: "#DAB988",
// };


pagingRenderContent(recipeListWrap,page,i => {
  const recipeListBox = multiAndSingleTagMaker(recipeListWrap,'div',`recipe-list-box-${i}`,1,element => {
    allMightyStyleEditor(element, page.recipeListBoxStyle)
  })
  multiAndSingleTagMaker(recipeListBox,'img',{id : `recipe-list-image-${i}`,src :"https://pelicana.co.kr/resources/images/menu/original_menu01_200529.png" },1,element => {
allMightyStyleEditor(element, page.recipeListImgPage)
})
multiAndSingleTagMaker(
  recipeListBox,
  "div",
  `recipe-list-text-${i}`,
  1,
  (element) => {
    element.innerText = i + '\n' + page.boxInnerText ;
    
  })
})
pagingButton(numberListWrap,page,recipeListWrap)
// const renderButtons = () => {
//   const buttonList = multiAndSingleTagMaker(numberListWrap, "ul", "button-list",1,element => {
//     element.style.listStyleType = 'none'
//     kingGodFlexEditor(element, "","center","space-evenly")
//     fontAndLayoutEditor(element, "100%",'100%')
//   });
  
//   //맨앞 버튼
//   const startNumber = multiAndSingleTagMaker(buttonList, "li", "start-number");
//   startNumber.innerHTML = "<<맨앞";
//   startNumber.addEventListener("click", () => {
//     currPage = 1;
//     if (currPageGroup(currPage) === 1) {
//       startNumber.style.visibility = "hidden";
//     } else {
//       startNumber.style.visibility = "visible";
//       currPage = 1;
//     }
//     renderContent(currPage, recipeListWrap, boxInnerText);
//     renderButtons();
//   });

//   //이전 버튼
//   const beforeNumber = multiAndSingleTagMaker(
//     buttonList,
//     "li",
//     "before-number"
//   );
//   beforeNumber.innerHTML = "<이전";
//   beforeNumber.addEventListener("click", () => {
//     currPage = currPage - pageNumCount < 1 ? 1 : currPage - pageNumCount;
//     if (currPageGroup(currPage) === 1) {
//       beforeNumber.style.visibility = "hidden";
//     } else {
//       beforeNumber.style.visibility = "visible";
//       currPage = currPageGroup(currPage) * pageNumCount - (pageNumCount - 1);
//     }
//     renderContent(currPage, recipeListWrap, boxInnerText);
//     renderButtons();
//   });

//   // 중간 페이지 버튼 처리
//   let startPage = currPageGroup(currPage) * pageNumCount - (pageNumCount - 1);
//   let endPage = currPageGroup(currPage) * pageNumCount;

//   if (startPage < 1) {
//     startPage = 1;
//     endPage = currPageGroup(currPage) * pageNumCount - 1;
//   }
//   if (endPage > total) {
//     endPage = total;
//     startPage = endPage - pageNumCount + 1;
//     if (startPage < 1) {
//       startPage = 1;
//     }
//   }

//   //중간 페이지 버튼 반복문
//   for (let i = startPage; i <= endPage && i <= totalPageCount; i++) {
//     //페이지 숫자 버튼 CSS포함시킴
//     const pageButton = multiAndSingleTagMaker(buttonList, "li", i,1,element => {
//       fontAndLayoutEditor(element,'8%','')
//       kingGodFlexEditor(element,'','center','center')
//     });
//     pageButton.innerHTML = i;
//     if (i === currPage) {
//       pageButton.style.fontWeight = "bold" ;
//       pageButton.style.backgroundColor = "#9A6E44";
//       pageButton.style.color = "white";
//     } else {
//       pageButton.addEventListener("click", () => {
//         currPage = i;
//         renderContent(currPage, recipeListWrap, boxInnerText);
//         renderButtons();
//       });
//       pageButton.style.fontWeight = "normal";
//       pageButton.style.backgroundColor = "";
//       pageButton.style.color = "black";
//     }
//     buttonList.appendChild(pageButton);
//   }

//   //다음 버튼
//   const nextNumber = multiAndSingleTagMaker(buttonList, "li", "next-number");
//   nextNumber.innerHTML = "다음>";
//   nextNumber.addEventListener("click", () => {
//     currPage = currPage + pageNumCount > total ? total : currPage;
//     if (currPageGroup(currPage) === currPageGroup(totalPageCount)) {
//       nextNumber.style.visibility = "hidden";
//     } else {
//       nextNumber.style.visibility = "visible";
//       currPage = currPageGroup(currPage) * pageNumCount + 1;
//     }
//     renderContent(currPage, recipeListWrap, boxInnerText);
//     renderButtons();
//   });

//   //맨뒤 버튼
//   const endNumber = multiAndSingleTagMaker(buttonList, "li", "end-number");
//   endNumber.innerHTML = "맨뒤>>";
//   endNumber.addEventListener("click", () => {
//     currPage = total;
//     if (currPageGroup(currPage) === currPageGroup(totalPageCount)) {
//       endNumber.style.visibility = "hidden";
//     } else {
//       endNumber.style.visibility = "visible";
//       currPage = totalPageCount;
//     }
//     renderContent(currPage, recipeListWrap, boxInnerText);
//     renderButtons();
//   });

//   //기존 버튼 삭제 로직
//   while (numberListWrap.hasChildNodes()) {
//     numberListWrap.removeChild(numberListWrap.lastChild);
//   }
//   numberListWrap.appendChild(buttonList);
// };


// renderContent(currPage, recipeListWrap, boxInnerText);
// renderButtons();
