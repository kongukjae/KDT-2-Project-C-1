import all_mighty_editor from "../module/all_mighty_editor.js";
import recipeStepMaker from "../module/recipe_step_maker.js";

const {
  multiAndSingleTagMaker,
  positionEditor,
  fontAndLayoutEditor,
  kingGodFlexEditor,
  allMightyStyleEditor,
} = all_mighty_editor;

//* div#main
const main = multiAndSingleTagMaker(root, "div", "main", 1, (ele) => {
  ele.textContent = "";
});

//* main#form
const mainForm = multiAndSingleTagMaker(main, "form", "main-form");
mainForm.method = "post";
mainForm.action = "result";
// const input = multiAndSingleTagMaker(main, "input", "inputAuto", 1, (ele) => {
//   ele.typeContent = "text";
// });
// input.placeholder = "재료를 입력"; // input의 예시 텍스트

//? 레시피 제목 라벨 + 인풋 래핑
const mainTitleLabelInputWrap = multiAndSingleTagMaker(mainForm, "div");
kingGodFlexEditor(mainTitleLabelInputWrap, "", "", "center");

//* 레시피 제목 라벨
const mainTitleLabel = multiAndSingleTagMaker(
  mainTitleLabelInputWrap,
  "label",
  "main-title-label",
  1,
  (ele) => {
    ele.textContent = "요리 제목";
  }
);

//* 레시피 제목 인풋
const mainTitleInput = multiAndSingleTagMaker(
  mainTitleLabelInputWrap,
  "input",
  "main-title-input",
  1,
  (ele) => {
    ele.placeholder = "요리 제목";
  }
);

//? 레시피 재료래핑 + 레시피 사진래핑 컨테이너
const ingredientsImageContainer = multiAndSingleTagMaker(
  mainForm,
  "div",
  "",
  1,
  (ele) => {
    kingGodFlexEditor(ele, "row", "", "space-around");
    ele.textContent = "";
  }
);

//todo 레시피 재료 form
const registIngredientsWrap = multiAndSingleTagMaker(
  ingredientsImageContainer,
  "form",
  "",
  1,
  (ele) => {
    kingGodFlexEditor(ele, "column");
  }
);

//* 레시피 재료 label
const registIngredientsLabel = multiAndSingleTagMaker(
  registIngredientsWrap,
  "label",
  "main-ingredients-label",
  1,
  (ele) => {
    ele.textContent = "레시피 재료";
  }
);
//* 레시피 재료 Input
const registIngredientsInput = multiAndSingleTagMaker(
  registIngredientsWrap,
  "input",
  "main-ingredients-Input",
  1,
  (ele) => {
    ele.placeholder = "레시피 재료";
  }
);

//* 레시피 재료 Button
const registIngredientsSubmit = multiAndSingleTagMaker(
  registIngredientsWrap,
  "button",
  "main-ingredients-Submit",
  1,
  (ele) => {
    ele.textContent = "추가";
  }
);
//* 레시피 재료 List Div
const registIngredientsList = multiAndSingleTagMaker(
  registIngredientsWrap,
  "div",
  "main-ingredients-div",
  1,
  (ele) => {
    fontAndLayoutEditor(ele, "auto", "100px", "1px solid black");
    ele.textContent = "추가";
  }
);

//todo 레시피 사진 래핑
const registImageWrap = multiAndSingleTagMaker(
  ingredientsImageContainer,
  "div"
);

//* 레시피 사진
const registImage = multiAndSingleTagMaker(
  registImageWrap,
  "label",
  "main-image-label",
  1,
  (ele) => {
    ele.textContent = "레시피 사진";
  }
);

//? 조리순서 container 시작
const registStepContainer = multiAndSingleTagMaker(
  mainForm,
  "div",
  "regist-step-container",
  1,
  (ele) => {
    ele.textContent = "조리 순서";
    kingGodFlexEditor(ele, "column", "center", "center");
  }
);
//* 조리순서 step 자동 생성용 div부분
const registStepInnerContainer = multiAndSingleTagMaker(
  registStepContainer,
  "div",
  "regist-step-inner-container",
  1,
  (ele) => {
    // ele.textContent = "조리 순서 이너 컨테이너";
    kingGodFlexEditor(ele, "column", "center", "center");
  }
);
let stepNum = 1; // 콘솔 테스트용

//todo 조리 순서 자동생성 wrap 시작
recipeStepMaker(registStepInnerContainer); // 기본 1개 생성

const stepSubmitWrap = multiAndSingleTagMaker(registStepContainer, "div", "");

//* step 생성 버튼
const plusBtn = multiAndSingleTagMaker(
  stepSubmitWrap,
  "input",
  "plus-btn",
  1,
  (ele) => {
    ele.type = "submit";
    ele.value = "추가";
  }
);
plusBtn.addEventListener("click", function (event) {
  event.preventDefault();
  if (stepNum !== 0) {
    recipeStepMaker(registStepInnerContainer); //* recipeStepMaker 모듈 호출
    stepNum++; //콘솔 테스트용
    console.log(stepNum); //콘솔 테스트용
  } else if (stepNum === 1) {
    console.log("div는 1보다 작을 수 없습니다.");
  }
});

//* step 제거 버튼
const minusBtn = multiAndSingleTagMaker(
  stepSubmitWrap,
  "input",
  "minus-btn",
  1,
  (ele) => {
    ele.type = "submit";
    ele.value = "제거";
  }
);
minusBtn.addEventListener("click", function (event) {
  event.preventDefault();
  if (stepNum > 1) {
    let tmpDiv = registStepInnerContainer.lastElementChild;
    registStepInnerContainer.removeChild(tmpDiv);
    stepNum--; // 콘솔 테스트용
    console.log(stepNum); // 콘솔 테스트용
  } else if (stepNum === 1) {
    console.log(`stepNum은 ${stepNum}보다 작을 수 없습니다`);
  }
});
//todo 조리 순서 자동생성 wrap 끝
//? 조리순서 container 끝

//* 레시피 등록 버튼
const submitBtn = multiAndSingleTagMaker(
  mainForm,
  "input",
  "input-submit",
  1,
  (ele) => {
    ele.type = "submit";
    ele.value = "레시피 등록";
  }
);

//*
//*