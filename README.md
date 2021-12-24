# card-app

본 Repository는 그동안 학습한 것을 통해

어떻게 React스럽게 코딩해야하는가? 에 대한 것을 생각하며 작성하는 공간입니다.

## Tech Stacks

1. react
2. react-router-dom
3. sass

## Code Fomatter

1. eslint + prettier

## Component Structure

![image](https://user-images.githubusercontent.com/23470125/147326107-09a7938d-16cb-4e93-a88f-0b3b4ea9e632.png)

1. Get cardData.json from CardsContainer.js

2. CardsContainer.js renders each Card.js by map function.

3. Each Card.js gets its content data from cardContentData.json and renders.

4. A user can input his string content to cards.

## 구현 사항

1. bottom-up 구조 :: Parent component에는 static value를 넣지 않았습니다.

2. 각 카드는 mockup data에서 얻어와 각기 독립적인 Component로 취급합니다.

3. 각 카드는 input box를 가지며 User가 string data를 입력해 content에 추가할 수 있습니다.

4. Card의 content 영역은 제한적인 height를 가지며, overflow 속성을 통해 추가되어 숨겨진 영역은 스크롤하여 확인가능합니다.

5. Card의 input state에 따라 등록 버튼의 활성화 여부가 결정됩니다.

6. CardsContainer.js에서 innerWidth<=710인 여부에 따라 BrowserReduce state를 토글하고, 해당 state를 전달받은 각 Card는 조건 충족시 레이아웃을 해당 width에 맞게 CSS로 조정됩니다.

## 주의한 포인트

1. id 대신 className을 사용하기

2. state naming을 '동사'로 시작하기

3. '절차'가 아닌 '선언'을 생각할 것.

4. 불가피하다고 생각이 들지만, 비효율적인 동작인 것 같으면 stackoverflow를 뒤져보자
