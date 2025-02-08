# React Homework ✨

## 구현 화면 [바로가기](https://bohyemian.github.io/react-homework/)

<details>
  <summary style="font-size: 18px;font-weight: bold">UI 컴포넌트 과제</summary>

### Switch

`input` `checkbox`로 구현하였고, css 선택자 `:checked` 상태로 스타일이 토글될 수 있도록 하였다.  
 input의 label을 제공하기 위해 id와 label 명을 props로 받도록 했다.

### Chip button

button 태그로 구현하여 클릭할 때 클래스를 추가하여 active 상태를 분기하였다.  
 버튼의 텍스트와 초기 상태를 props로 받았다. (각각 children, active 속성)

![크롬](https://github.com/bohyemian/react-homework/blob/7de3874cec795dcd5a39f45adff4827c7c30408d/README/ui.gif)

</details>

<details>
  <summary style="font-size: 18px;font-weight: bold">Coupang 로그인 UI 개선</summary>
  - header의 로그인, 회원가입 메뉴 클릭 시 화면 토글

### 미작업 목록😭

[ ] 쿠팡 회원가입 화면  
[ ] email, password 모두 유효성 검사 통과 시 로그인 버튼 활성화  
[ ] README 파일 작성

</details>

<details open>
  <summary style="font-size: 18px;font-weight: bold">쇼핑 카트 UI 구현</summary>
![cart_component](https://private-user-images.githubusercontent.com/31885579/411198649-c8946b6c-0941-4307-b257-8822d69e7fe5.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzkwMDQ2MzAsIm5iZiI6MTczOTAwNDMzMCwicGF0aCI6Ii8zMTg4NTU3OS80MTExOTg2NDktYzg5NDZiNmMtMDk0MS00MzA3LWIyNTctODgyMmQ2OWU3ZmU1LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAyMDglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMjA4VDA4NDUzMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTBlYzliODY1ZTNhYmUzNjY2MjhmZGY1NWE5M2FjZmZiMzY5YzdjYTM4Mjk3ZWE4OWM2NDk5ZjdhZWM3NWQ3ZDAmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.mnRM6i4xEJpjGpEp6wP54sFAO2FcIkgO96XJJ_XTeC0)
![cart_component_depth](https://private-user-images.githubusercontent.com/31885579/411198658-dc3bd8c2-c850-4983-98f7-63bcf8d1a0b9.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzkwMDQ2MzAsIm5iZiI6MTczOTAwNDMzMCwicGF0aCI6Ii8zMTg4NTU3OS80MTExOTg2NTgtZGMzYmQ4YzItYzg1MC00OTgzLTk4ZjctNjNiY2Y4ZDFhMGI5LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAyMDglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMjA4VDA4NDUzMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWYyMzk2NzMxMjZkZDgxNWU1ODRjYzNlYjA0YzU2ZGY5NWUxNWUyYWNiYTMwZTdjZTczYjBjNDI5YTM5ODI4M2UmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.-0ahk_VNAINjAEb1gVsiBqX58eVAref5xbHrg4ppQVo)
  
</detail>
