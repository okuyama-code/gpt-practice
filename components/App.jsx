import React, { useState } from 'react';

function MutableExample() {
  // ミュータブルな操作の例
  const [person, setPerson] = useState({ name: 'John', age: 30 });

  const changeName = () => {
    // ミュータブルな操作で、直接名前を変更する
    person.name = 'Jane';
    setPerson(person);
  };

  return (
    <div>
      <h2>ミュータブルな操作</h2>
      <p>Name: {person.name}, Age: {person.age}</p>
      <button onClick={changeName}>名前を変更</button>
    </div>
  );
}
// 直接オブジェクトのプロパティを変更してもコンポーネントの再レンダリングは起こりません。これは、Reactがコンポーネントの状態の変更を検出するために、新しいオブジェクトを生成する必要があるためです。そのため、オブジェクトのプロパティを変更してもコンポーネントは更新されません。

// 正しくは、ミュータブルな変更を避けてイミュータブルな操作を行うべきです。function ImmutableExample() {}はしっかり表示が変わる

function ImmutableExample() {
  // イミュータブルな操作の例
  const [person, setPerson] = useState({ name: 'John', age: 30 });

  const changeName = () => {
    // スプレッド構文を用いて、新しいオブジェクトを生成し名前を変更する
    const newPerson = { ...person, name: 'Jane' };
    setPerson(newPerson);
  };

  return (
    <div>
      <h2>イミュータブルな操作</h2>
      <p>Name: {person.name}, Age: {person.age}</p>
      <button onClick={changeName}>名前を変更</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <MutableExample />
      <ImmutableExample />
    </div>
  );
}

export default App;
