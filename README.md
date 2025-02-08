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

![cart_component](https://private-user-images.githubusercontent.com/31885579/411208791-db087cc6-2d85-4029-b6db-e6b766200a8f.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzkwMTMyNDEsIm5iZiI6MTczOTAxMjk0MSwicGF0aCI6Ii8zMTg4NTU3OS80MTEyMDg3OTEtZGIwODdjYzYtMmQ4NS00MDI5LWI2ZGItZTZiNzY2MjAwYThmLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAyMDglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMjA4VDExMDkwMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTVhZTBlMDdmODgyM2YzMzBlMGNjZWZlNzM1MTQwN2YxNjE4ODNkOTY1OGI1MDcwNDgyYTQ4ZTEzYTUwMDBkNTImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.FhFFH9qN9daJP1jQOjovcP0dqzwbqFy-yuos4edEKBg)

## 컴포넌트 목록

- Cart _(stateful)_
- ProductItem (stateless)
- Quantity _(stateful)_

## 컴포넌트 구성

`Cart` > `ProductItem` > `Quantity`

![cart_component_depth](https://private-user-images.githubusercontent.com/31885579/411205092-2ce61a0c-e51e-4cc5-904f-aa6df4800642.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzkwMTMyNDEsIm5iZiI6MTczOTAxMjk0MSwicGF0aCI6Ii8zMTg4NTU3OS80MTEyMDUwOTItMmNlNjFhMGMtZTUxZS00Y2M1LTkwNGYtYWE2ZGY0ODAwNjQyLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAyMDglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMjA4VDExMDkwMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTc4YTJjYTQ1MDg5MjAxNjk5NWQ0ZTQ4YjhjMzQ2ODIxMmI0MTU3YmE1ODkyZjc1MmJjNGI4NDg0NzA4NzRkODAmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.pOacOrAn-1XE8b7uwEehaGJsCCeFpMoJU_vrUs0gq1s)

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

`ProductItem` 컴포넌트에서 `Quantity` 컴포넌트로 선택한 수량(`defaultQuantity`)을 넘겨주되 재사용성을 위해 옵셔널하게 받도록 했다.

### 상태 값 갱신

Cart에서 내려받은 `cartQuantity` 값을 Quantity 컴포넌트에서 상태변수 `quantity`로 설정하고,  
Quantity의 수량 증가/감소 버튼을 누르면 props로 내려받은 `updateQuantity` 함수에 quantity 값을 전달하여  
다시 상위 컴포넌트의 상태값 cartQuantity를 갱신하도록 하였다.

### 구매 총액 계산

Cart 컴포넌트는 상태 값 price \* cartQuantity의 합산 값인 priceSum을 파생된 상태로 갖는다.

</detail>
