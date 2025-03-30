import React from 'react';
import { Container, Text } from 'rsuite';

const _componentSnippet = { // 컴포넌트에서 이용중인 변수 : 멤버변수처럼 이용중
   text: null
};

/**
 * 컴포넌트 코드조각(Snippet)입니다.
 * 이게 리액트의 전체적인 기본구조여서
 * 복사해서 쓰셔도 되고, 참고해서 만드셔도 됩니다.
 * 
 * @param {*} text 화면에 보여질 텍스트
 */
const ComponentSnippet = ({ text } /* = props:속성 */) => {
   /* 이렇게 연결지어야지만, 컴포넌트안에서만 쓰겠다고 연결을 짓습니다. */
   const self = _componentSnippet; // this라는 이름을 쓸수 없어서, self로 지음.
   /* 그래서, 왠만해서는 self.으로 변수를 다뤄주시는게 좋습니다. */

   /* 컴포넌트의 멤버변수처럼 연결 : 매개변수 생성자처럼 */
   self.text = text;

   /*
    *   Hook영역 : useState, useNavigate, useLocation...
    */


   /*
    *   Hook영역 : useEffect(이걸 쓰는순간, 직접만든 훅이라고 React에서 말합니다.)
    */

   return ( // 여기에 적용할 변수들은 왠만해서는 'self.변수' 으로 쓰는게,
      // 다른곳에서 _componentSnippet를 import해서 변경이된 'self.변수'를 사용할수 있습니다.
      <Container>
         <Text>{self.text}</Text>
      </Container>
   );
};

ComponentSnippet.defaultProps = {
   // props가 설정이 안되어있으면, 기본(default)으로 들어갑니다.
   text: "이렇게 하면, 컴포넌트 끼리의 변수전달이 가능합니다."
};

// 이렇게 해놓으면, 다른곳(import)에서 불러올수있습니다. ex) import { _componentSnippet } from "./../components/ComponentSnippet"
export { _componentSnippet /* ModalForm에서 사용중인 변수 */ }; // 주석처리하면, 다른곳(import)에서 접근을 할수 없습니다.
export default ComponentSnippet;