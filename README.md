# React Homework ✨ [바로가기](https://bohyemian.github.io/react-homework/)

<details>
  <summary style="font-size: 18px;font-weight: bold">UI 컴포넌트 과제</summary>

## Switch

`input` `checkbox`로 구현하였고, css 선택자 `:checked` 상태로 스타일이 토글될 수 있도록 하였다.  
 input의 label을 제공하기 위해 id와 label 명을 props로 받도록 했다.

## Chip button

button 태그로 구현하여 클릭할 때 클래스를 추가하여 active 상태를 분기하였다.  
 버튼의 텍스트와 초기 상태를 props로 받았다. (각각 children, active 속성)

![크롬](https://github.com/bohyemian/react-homework/blob/main/README/ui.gif?raw=true)

</details>

<details>
  <summary style="font-size: 18px;font-weight: bold">Coupang 로그인 UI 개선</summary>
  - header의 로그인, 회원가입 메뉴 클릭 시 화면 토글

## 미작업 목록😭

[ ] 쿠팡 회원가입 화면  
[ ] email, password 모두 유효성 검사 통과 시 로그인 버튼 활성화  
[ ] README 파일 작성

</details>

<details>
  <summary style="font-size: 18px;font-weight: bold">쇼핑 카트 UI 구현</summary>

## [바로가기](https://bohyemian.github.io/react-homework/?view=cart)

![cart_component](https://github.com/bohyemian/react-homework/blob/main/README/cart_component.png?raw=true)

## 컴포넌트 목록

- Cart _(stateful)_
- ProductItem (stateless)
- Quantity (stateless)

## 컴포넌트 구성

`Cart` > `ProductItem` > `Quantity`

![cart_component_depth](https://github.com/bohyemian/react-homework/blob/main/README/cart_component_depth.png?raw=true)

## data

```javascript
{
  id: 'product1',
  name: '1A 우유 900mL',
  price: 1880,
  cartQuantity: 2,
  stock: 10,
  imgPath: 'assets/images/product1.png'
}
```

`Cart` 컴포넌트에서 장바구니에 담은 상품 목록을 상태값으로 받아온다.  
`ProductItem` 리스트 랜더링을 위한 id, 상품명, 가격, 장바구니 수량, 재고, 이미지 경로.

`ProductItem` 컴포넌트에서 `Quantity` 컴포넌트로 선택한 수량(`defaultQuantity`)을 넘겨 주도록 했다.

### 상태 값 갱신

Quantity의 수량 증가/감소 버튼을 누르면 props로 내려받은 `updateQuantity` 함수에 defaultQuantity 값을 전달하여 상위 컴포넌트의 상태값 cartQuantity를 갱신하도록 하였다.

### 구매 총액 계산

Cart 컴포넌트는 상태 값 price * cartQuantity의 합산 값인 totalPrice를 파생된 상태로 갖는다.

```javascript
const totalPrice = cartProducts.reduce((sum, { price, cartQuantity }) => sum + price * cartQuantity, 0);
```

## 구현 화면

![cart](https://github.com/bohyemian/react-homework/blob/main/README/update.gif?raw=true)

### 리사이즈

![cart](https://github.com/bohyemian/react-homework/blob/main/README/resize.gif?raw=true)

## 마치며..

`Quantity` 컴포넌트에 `index` 값을 props로 전달해주고 상태가 변경되면 `updateQuantity` 함수에 `index` 값을 같이 올려주었는데, 리스트로 랜더링 되지 않는 경우에는 불필요한 값이기 때문에 거슬리는 부분이었다.

```javascript
// Cart Component
const updateQuantity = (q: number, i?: number) => {
```

```javascript
// Quantity Component
function Quantity({idx, max = 999, updateQuantity, defaultQuantity}: QuantityProps) {
  ...
  updateQuantity?.(nextValue, idx);
```

커링 함수로 작성했던 `generateUpdateHandler`가 떠올랐다.  
updateQuantity 함수를 실행하면서 index를 전달하여 클로저를 형성하고, 반환한 함수에서 갱신 된 상태 값만 받아오도록 수정해 주었다.

`QuantityProps` 타입에서도 index를 삭제하고 props에서 내려주고 올려주는 코드도 삭제되어 코드가 깔끔해졌다.

```javascript
// Cart Component
const updateQuantity = (i: number) => (quantity: number) => {
```

```javascript
// Quantity Component
function Quantity({max = 999, updateQuantity, defaultQuantity}: QuantityProps) {
  ...
  updateQuantity?.(nextValue);
```

수업을 들을 때는 왜 궂이 함수를 반환하는지 미처 이해가 되지 않았었는데, 직접 코드를 짜면서 완전히 이해가 되었다. 😌  
역시 직접 고민하고 내 손으로 해봐야 온전히 학습이 되는구나- 다시 한번 느끼게 되었다.

</details>

<details open>
  <summary style="font-size: 18px;font-weight: bold">카드 검색 리스트 UI 구현</summary>

  # [바로가기](https://bohyemian.github.io/react-homework/?view=list)  

  영화 정보 API를 찾다가 [영화진흥위원회](https://www.kobis.or.kr/kobisopenapi/homepg/apiservice/searchServiceInfo.do) 라는 사이트를 발견하였다.

  일별 박스오피스 데이터를 받아와서 영화코드(movieCd)로 다시 fetch하여 영화 상세정보를 가져왔다.  
  일별 박스오피스를 기준으로 영화 상세정보를 가져오기 때문에 박스오피스는 `useRef`로 저장하고  
  영화 상세정보는 데이터를 받아오면 화면이 다시 랜더링 되도록 `useState`로 만들었다.

  영화 목록을 하나의 배열로 합성한 것이 아니라 두개의 배열로 되어 있어서 필터링도 두번 해주어야 했다. 😭

  ## memo
  데이터 요청이 일일 1000번 제공이라 받아 온 정보를 LocalStorage에 저장해 두었다.  
  창을 닫지 않고 하루가 지나면 최신 데이터로 갱신할 수 없는 문제가 있다. 🥲

  ## 요구사항
  ☑️ 사용자에게 입력받아 검색한 키워드로 필터링되는 카드 리스트 UI  
  ☑️ "검색" 버튼을 누르면 브라우저 주소창의 쿼리 스트링 업데이트  
  ☑️  직접 주소창에 URL을 입력 요청한 경우, 필터링된 UI 렌더링  
  ☑️  브라우저 주소창의 이전/다음 탐색 버튼을 눌렀을 때 UI 렌더링  
  🔲 검색 쿼리에 따른 태그 활성/비활성 처리 및 UI 렌더링

  ## 급하게 마치며...
  - 비동기 통신으로 데이터를 가져오는 것에서 부터 시간을 많이 소비했다.  
  당최 promise에서 데이터가 꺼내지지 않아서 결국 GPT 찬스를 썼다. 😞  
  - 잡지 못한 typescript 에러가 너무 많다.  
  - 장르로 필터링 할 수 있도록 구현 해봐야겠다.  
  - 수업시간에 했던 코드가 없었더라면 구현하지 못했을 것 같다. 😭
  - API `KEY`를 .env 파일에 넣어서 변수로 불러왔는데, 네트워크 탭이나 소스에서 버젓이(?) 보이고 있다.  
  `KEY`를 보안처리 할 수 없는 걸까? 🤔
</detail>
