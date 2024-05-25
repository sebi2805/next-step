"use client";
import { useEffect, useState } from "react";
import HomePage from "../components/home";

export default function Home() {
  const [didMount, setDidMount] = useState(0);
  useEffect(() => {
    setDidMount(1);
  }, []);
  return didMount ? <HomePage /> : <></>;
}
