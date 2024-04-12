import "./styles.css";
import { useEffect, useState } from "react";
export default function Random_Color({ url, limit = "5", page = "1" }) {
  function fetchImages(getURL) {
    // try {
    //   // const respo
    // } catch (e) {
    // } finally {
    // }
  }

  useEffect(() => {
    if (url != null) fetchImages(url);
  });

  return <div>dafds</div>;
}
