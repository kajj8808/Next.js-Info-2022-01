# Next Js Intro

# React.js(17 버전) 랑 Next.js 다른점

- 1. Next.js 는 한 div안에 js 를 보내는 React( user client 에서 렌더링 ) 와 달리 보내기전 미리 렌더링(pre-rendering) 을 해서 div h1 Hi! /div 이런식(html)으로 유저에게 전달해줌! 이로인해 얻는 효과는 유저가 react.js 가 로딩되지 않았더라도 콘텐츠를 볼수있게됨. 로딩되면 react.js랑 연결됨!

- 2. Link React 에서는 Link 를 바로쓰고 style 을 적용시킬수 있지만 여기서는 Link a /a /Link 이런식으로 해야 className, style 이런걸 사용할수있음. Next.js 에서는 Link 는 오직 href를 위한것. [react-router-dom x | next/link o]

- 3. Router 도 Next.js 에서 제공해줌. useRouter.

- 4. Next js 에서 style 를 사용할때. 1. anom.module.css 를 만들어 module 을 import 해서 className에 넣은방법 2. styled jsx style jsx{`nomal css`} /style(모듈들이 독립되있어서 a 이런식으로 style을 지정해줘도 다른 곳에서 a 해도 각각다르게 적용됨. )
     golbal style 적용하고싶으면 \_app.js(Next js 는 다른것에 렌더링되기전에 먼저 App을 봄) 안에서 style jsx global 이렇게

- 5. Router 를 내가 설정해줄필요가없음!. pages 에 파일을만들기만해도 알아서 알아서 페이지가 만들어짐.

- 6. Dynamic URL(변수를 포함하는) 이다. 라고 알려주는 유일한방법이. [id(변수명)].js 로 만드는것.

## Next.js 에서 제공해주는것들.

- Link
- Router [useRouter]
- Head [ react helmet (페이지 표시하는 이름) ] next/head
- Image

## 간단한 용어정리

#### Hydration - react.js 를 프론트 엔드 안에서 실행하는것.

### pre-generate - 사전생성.

### Rehydration - 이라는 단계

#### App Componentns - 일종의 컴포넌트 blueprint NextJS가 모든 페이지를 렌더링할수있게하는.

### permanent - 영구적

## Next.js 는..

- redirect 를 사용할수있음. next.config.js 에서 수정가능. permanent 잊지말기. array로 return

- rewrites 는 redirect 를 하는데 url 은 변하지않음.

- serverside(백엔드.) 에서 뭘할려면 getServerSideProps

## \_app

여기서 글로벌 style 선언하고 할수있음.
여기서는 style.module.css 이런식으로 모듈을 불러오지않아도됨, 바로 ../styles.css 이렇게가능
App {Component ,pageProps}{
return( <Component {...pageProps} /> )
}
