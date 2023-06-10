import { useContext, createContext, useState } from 'react';

function App() {
  function ShowNum(props) {
    const numContext = useContext(NumContext);

    // props.num 불러오는 무언가...대신하는거
    return <div>{numContext.num}</div>;
  }

  // Button.jsx
  function Button(props) {
    return (
      <button
        onClick={props.onClick}
        style={{
          width: '50px',
          height: '50px',
        }}
      >
        <ShowNum />
        {props.children}
      </button>
    );
  }
  function Counter() {
    const numContext = useContext(NumContext);
    return (
      <div>
        <span>연봉 {numContext.num}</span>
        <div>
          <span>이름:우경석</span>
        </div>
        <Button onClick={numContext.더하기}>+</Button>
        <Button onClick={numContext.빼기}>-</Button>
      </div>
    );
  }
  function ShowDubble() {
    const numContext = useContext(NumContext);
    return <div>{numContext.num * 2}</div>;
  }

  const NumContext = createContext();

  function NumContextProvider({ children }) {
    const [num, setNum] = useState(0);
    const 더하기 = () => {
      setNum(num + 1);
    };
    const 빼기 = () => {
      setNum(num - 1);
    };
    return <NumContext.Provider value={{ num: num, 더하기: 더하기, 빼기: 빼기 }}>{children}</NumContext.Provider>;
  }

  return (
    <NumContextProvider>
      <h1>숫자 카운터 만들기</h1>
      <Counter />
      <ShowDubble />
    </NumContextProvider>
  );
}

export default App;