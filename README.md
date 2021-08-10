# YoutubePlayer

Youtube Data API v3 이용하여 화면 구현하기

## 1. 코딩 룰

### 1.1 컴포넌트

    - 파일명과 컴포넌트명은 파스칼 형식을 따른다
    - 파일명과 컴포넌트명은 동일하기 작성한다.
    - 파일당 하나의 export default 만 허용한다.

### 1.2 라이브러리

    - 파일명과 모듈명은 카멜케이스 형식을 따른다.
    - 모듈은 named export 원칙을 따른다.

---

## 2. Dependency 라이브러리

    - Axios : 네트워크
    - recoil : 상태관리
    - styled-components : 스타일링
    - react-youtube : 영상처리

---

## 3. 설계 원칙

    - 컴포넌트는 Atomic Design 설계를 기반으로 한다.
    - JSX 태그 자체를 사용하여 화면을 구성하지 않는것을 원칙으로 한다. 반드시 컴포넌트를 생성한다.
    - 라이브러리는 모듈 패턴을 기본으로 한다.
    - 하나의 모듈은 한가지의 동작만 수행하도록 설계한다.
    - 하나의 파일에 여러개의 모듈을 export하지 않는것을 원칙으로 한다.

### 3.1 모듈 설계 상세

#### 3.1.1 Network 모듈

    - Axios 인스턴스를 신규로 생성하고 캐쉬 여부를 설정한다.
    - request public 메소드를 구현한다.
    - get public 메소드를 구현하고 GET 방식 요청을 추상화 한다.
    - 모듈 로드시 "initApi" 메소드가 호출되고 Api 객체를 초기화 한다.
    - initApi는 Require Bolb 패턴을 활용하여 api 폴더의 하위 폴더를 탐색하고 Api 객체를 초기화한다

<pre>
<code>
//만약 api/youtube/index.js 가 존재하고 index.js는 { search(){} } 객체를 반환한다고 했을 경우
Api.youtube.search() //초기화 후 사용방법
</code>
</pre>

#### 3.1.2 Normalize 모듈

    - response 데이터에서 필요한 정보만을 key : value 형태의 값으로 정규화한다..
    - Normalize를 통해서 필요한 정보만을 저장하고 필요시 즉시 가져올수 있다.

#### 3.2.3 useNetwork 훅

    - Network의 상태/수신데이터/에러를 컴포넌트에서 쉽게 사용하기 위한 커스텀 훅
    - recoil을 기반으로 상태를 관리한다.

<pre>
<code>
const { request, response, status } = useNetwork("key", ()=>Api.youtube.search(..))
// request : 네트워크 요청
// response : 수신 데이터
// state : 수신 상태
</code>
</pre>

### 3.2 컴포넌트 설계 상세

#### 3.2.1 Box 컴포넌트

    - block 박스모델을 추상화 한 컴포넌트
    - display flex 를 기본으로 설정한다.
    - position relative를 통해 컨테이너 블록으로 설정한다.
    - 가로/세로 너비를 가지는 컴포넌트는 Box 컴포넌트를 상속 받는다.
    - 기본 prpos는 하기와 같다.
        - w : width
        - h : height
        - m : margin
        - p : padding
        - b : border
        - o : overflow
        - center : 요소 정 중앙 정렬
        - direction : 기본 축 설정
        - css : 커스텀 css 설정

---

## 데모
[Youtube player](https://gracious-mcclintock-6e949b.netlify.app/)
