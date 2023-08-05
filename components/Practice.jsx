import React, { useState } from 'react';

function DestructiveExample() {
  // 破壊的なメソッドを使った場合の例
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  const removeLastNumber = () => {
    // 破壊的な配列のメソッドであるpop()を使って、配列の最後の要素を削除する
    numbers.pop();
    // 状態を更新してコンポーネントを再レンダリングする
    setNumbers([...numbers]);
  };

  return (
    <div>
      <h2>Destructive Example</h2>
      <p>Numbers: {numbers.join(', ')}</p>
      <button onClick={removeLastNumber}>Remove Last Number</button>
    </div>
  );
}

function NonDestructiveExample() {
  // 非破壊的なメソッドを使った場合の例
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  const removeLastNumber = () => {
    // 配列の最後の要素を削除した新しい配列を生成する
    const newNumbers = numbers.slice(0, -1);
    // 状態を更新してコンポーネントを再レンダリングする
    setNumbers(newNumbers);
  };

  return (
    <div>
      <h2>Non-Destructive Example</h2>
      <p>Numbers: {numbers.join(', ')}</p>
      <button onClick={removeLastNumber}>Remove Last Number</button>
    </div>
  );
}



export  function Practice() {
    return (
        <div>
          <DestructiveExample />
          <NonDestructiveExample />
        </div>
      );
}
