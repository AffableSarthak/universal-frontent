"use client";
import { useEffect, useRef, useState } from "react";

const TypeAnimation = (props: any) => {
  const { sequence, style, repeat } = props;
  let seq = sequence;
  seq = Array(10).fill(sequence).flat();

  console.log(seq);

  return <div>Hello</div>;
};

export default function OrdinoxHome() {
  return (
    <>
      <TypeAnimation
        sequence={["One", 500, "Two", 500, "Three", 500]}
        style={{ fontSize: "2em" }}
        repeat={Infinity}
      />
    </>
  );
}
