"use client";
import { memo, useMemo, useState } from "react";

const MemoHome = () => {
  const [displayArrOfString, setDis] = useState([
    "enter",
    "shift",
    "esc",
    "ctrl",
    "home",
    "pgup",
    "ins",
    "backspace",
    "delete",
    "tab",
    "caps lock",
  ]);
  const [text, setText] = useState("");

  return (
    <>
      <TransformList displayArrOfString={displayArrOfString} text={text} />
      <button
        disabled={text === ""}
        onClick={() => setDis((prev) => [...prev, `${text}`])}
      >
        ADD Something
      </button>
      <div>
        <input
          type="text"
          className="text-black"
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </>
  );
};

const TransformList = ({
  displayArrOfString,
  text,
}: {
  displayArrOfString: string[];
  text: string;
}) => {
  const noRender = JSON.stringify(displayArrOfString);
  const render = displayArrOfString;
  const transformedArr = useMemo(() => {
    console.log("transforming ..."); // this will print only when data has changed
    const toUpperCaseArr = displayArrOfString.map((das) => das.toUpperCase());
    const sortedArr = toUpperCaseArr.sort();
    return sortedArr;
  }, [render]);

  return (
    <>
      <div>
        {transformedArr.map((ta) => (
          <Item key={ta} value={ta} />
        ))}
      </div>
      <div>{text}</div>
    </>
  );
};

const Item = memo(({ value }: { value: string }) => {
  return <div>{value}</div>;
});

const Items = ({ value }: { value: string }) => {
  return <div>{value}</div>;
};

export default MemoHome;
