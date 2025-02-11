# React Homework ✨ [바로가기](https://bohyemian.github.io/react-homework/)

<details>
  <summary style="font-size: 18px;font-weight: bold">UI 컴포넌트 과제</summary>

## Switch

`input` `checkbox`로 구현하였고, css 선택자 `:checked` 상태로 스타일이 토글될 수 있도록 하였다.  
 input의 label을 제공하기 위해 id와 label 명을 props로 받도록 했다.

## Chip button

button 태그로 구현하여 클릭할 때 클래스를 추가하여 active 상태를 분기하였다.  
 버튼의 텍스트와 초기 상태를 props로 받았다. (각각 children, active 속성)

![크롬](https://github.com/bohyemian/react-homework/blob/7de3874cec795dcd5a39f45adff4827c7c30408d/README/ui.gif)

</details>

<details>
  <summary style="font-size: 18px;font-weight: bold">Coupang 로그인 UI 개선</summary>
  - header의 로그인, 회원가입 메뉴 클릭 시 화면 토글

## 미작업 목록😭

[ ] 쿠팡 회원가입 화면  
[ ] email, password 모두 유효성 검사 통과 시 로그인 버튼 활성화  
[ ] README 파일 작성

</details>

<details open>
  <summary style="font-size: 18px;font-weight: bold">쇼핑 카트 UI 구현</summary>

## [바로가기](https://bohyemian.github.io/react-homework/?view=cart)

![cart_component](https://private-user-images.githubusercontent.com/31885579/411922930-47e0f5a6-dce7-410f-b91a-e3de8dcb1449.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzkyNjk1ODIsIm5iZiI6MTczOTI2OTI4MiwicGF0aCI6Ii8zMTg4NTU3OS80MTE5MjI5MzAtNDdlMGY1YTYtZGNlNy00MTBmLWI5MWEtZTNkZThkY2IxNDQ5LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAyMTElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMjExVDEwMjEyMlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWFhODc2MzI2MWMxMmZjMTZhZjE4NmU2ZWVlNTAwNTZlMTVhN2QwYzYzZmJlMGEwZWU3MWRiNmNiZDBmNWY2ZTcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.WBJXjWdrNT9UOyUOcSWsyer9nzgJsE6ckuhK0IQtD48)

## 컴포넌트 목록

- Cart _(stateful)_
- ProductItem (stateless)
- Quantity (stateless)

## 컴포넌트 구성

`Cart` > `ProductItem` > `Quantity`

![cart_component_depth](https://private-user-images.githubusercontent.com/31885579/411205092-2ce61a0c-e51e-4cc5-904f-aa6df4800642.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzkyNjk1ODIsIm5iZiI6MTczOTI2OTI4MiwicGF0aCI6Ii8zMTg4NTU3OS80MTEyMDUwOTItMmNlNjFhMGMtZTUxZS00Y2M1LTkwNGYtYWE2ZGY0ODAwNjQyLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAyMTElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMjExVDEwMjEyMlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPThhNGI1N2I0OTVjMGM4ZGI1NGZmZmNiZWY3ZjQ2ODQ0ZDE2MmRhNjdmZDgyZDkzMTA5YTY3MWIwOTI3YTU5YTYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.t86l8tsQ_bT0TFkJhQzDQu6Ha3mssQkEYW1gRoWRGLM)

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

![cart](https://private-user-images.githubusercontent.com/31885579/411229555-70600bd7-10d0-41e2-841f-cda0f644d220.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzkyNjk1ODIsIm5iZiI6MTczOTI2OTI4MiwicGF0aCI6Ii8zMTg4NTU3OS80MTEyMjk1NTUtNzA2MDBiZDctMTBkMC00MWUyLTg0MWYtY2RhMGY2NDRkMjIwLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAyMTElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMjExVDEwMjEyMlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTM2NmQyOWYxY2E0ZTVjMDdlNDUzZmMyZGFhMWNkZWExZjE2NDE1MWEwYWZhYWY2OWIyNjk2NTY1MDEyODlkNDYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.2sY00p3KXyFiypdXJmUzzSHqyDNkjh3IW-FdlNGR92Y)

### 리사이즈

![cart](https://private-user-images.githubusercontent.com/31885579/411231609-40aae6c0-adfb-4fbb-a72c-e833588253f0.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzkyNjk1ODIsIm5iZiI6MTczOTI2OTI4MiwicGF0aCI6Ii8zMTg4NTU3OS80MTEyMzE2MDktNDBhYWU2YzAtYWRmYi00ZmJiLWE3MmMtZTgzMzU4ODI1M2YwLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAyMTElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMjExVDEwMjEyMlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTNhNGZlMTE1NTg4MGMyYmQwMTM2MDgxODc0ZmIyOWJkMWViYjc2M2VhMjcwZTQyZjcyY2FiM2M1OWE4MGY2NzkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.mBVCkkepCvfsK9WfNUpxBXu6e5jJVx-fPpD6vY_c_lY)

## 마치며..

`Quantity` 컴포넌트에 `index` 값을 props로 전달해주고 상태가 변경되면 구독하는 함수에 `index` 값을 같이 올려주었는데, 리스트로 랜더링 되지 않는 경우에는 불필요한 값이기 때문에 거슬리는 부분이었다.

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
</detail>
