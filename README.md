# React practice

야매로 써 오던 React를 기초부터 다시 배워 두고 잊어버렸을 때 참고할 수 있도록 기록으로 남기기로 했다.

인프런의 [React & Express 를 이용한 웹 어플리케이션 개발하기](https://www.inflearn.com/course/react-%EA%B0%95%EC%A2%8C-velopert/)를 참고했다.
강좌에 쓰이는 라이브러리나 기능들이 deprecate 된 게 많아 만드는 앱만 참고해야 했다.
기존에 알던 지식을 동원해서 손쉽게 세팅이 가능했다. 변경된 내용들은 다음과 같다.

## Environment settings

### create-react-app

복잡한 세팅 필요 없이 `create-react-app` 하나면 프로젝트 세팅이 끝난다.

### ESLint

ESLint 규칙에 `semi: ["error", "never"]`와 `quotes: ["error", "single"]`을 추가했다.

취향껏 세미콜론을 쓰지 않도록 강제했는데[^1],
이 규칙의 문제는 `create-react-app`이 기본적으로 세미콜론 달린 코드를 만들어 준다는 점이다.
하지만 다행히도 코드 내의 세미콜론을 전부 제거하는 것만으로 해결되는 것 같다.

참고로 [StandardJS](https://github.com/standard/standard)에서도 세미콜론을 쓰지 않도록 규정한다.
물론 세미콜론을 넣어야 하는 [구글 스타일 가이드](https://google.github.io/styleguide/jsguide.html)도 있다.

### Webpack config

`module.loaders` 세팅이 `module.rules`로 바뀌고 문법도 달라졌다.
하지만 여기서는 `create-react-app`을 쓰기 때문에 신경쓸 필요는 없다.

### prop-types

`React.PropTypes`가 deprecate 되고 `prop-types` 패키지로 분리되었다. 설치하고 import해서 쓰면 된다.

### Fragments

강좌에서 여러 요소를 리턴하는 것이 불가능하다고 이야기하는 것과 달리
여러 요소를 한꺼번에 리턴할 수 있는 기능인 `React.Fragment`가 추가되었다. 

### Immutability Helper

`react-addons-update`에서 `immutability-helper`로 패키지가 옮겨갔다.

## Code

강좌에서 쉬운 설명을 위해서인지 버그가 있는 코드가 좀 있다. 다음과 같이 해결했다.

-   검색으로 필터된 연락처를 선택하면 해당 연락처의 원래 인덱스가 아니라 필터된 인덱스 기준으로 연락처 정보를 보여준다.
    -   연락처의 원래의 인덱스를 저장해 뒀다가 컴포넌트의 key로 넘겨줘서 해결
-   연락처 수정 모드에서 다른 연락처를 선택해도 텍스트 필드의 정보가 바뀌지 않는다.
    -   Edit 버튼을 누를 때만 state를 업데이트해서 그렇다.
        `componentWillReceiveProps`를 이용해서 props가 변경될 때 state를 업데이트하면 된다.
        컴포넌트가 처음 mount될 때는 `componentWillReceiveProps`가 실행되지 않지만
        처음에 선택된 연락처가 없으므로 괜찮다.
-   연락처를 선택하지 않아도 수정 버튼이 토글되며 에러를 내뿜는다.
    -   `ContactDetails`에서 `isSelected` prop이 `true`일 때만 토글이 되도록 한다.
