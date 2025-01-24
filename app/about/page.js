"use client"
import React from "react";
import { useState } from "react";
import NavBar from "../components/NavBar";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

const PDFViewer = () => {
    const [currentScroll, setCurrentScroll] = useState(0);
    const [currentWidth, setCurrentWidth] = useState(0);
  return (
<div>
<NavBar
    setCurrentScroll={setCurrentScroll}
    setCurrentWidth={setCurrentWidth}
  />
    <div style={{ height: "100vh", width: "100%" }}>
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
        <Viewer
          fileUrl="https://res.cloudinary.com/dzv98o7ds/image/upload/v1737715769/Biodun_Coker_Compendium_2_-compressed_jyjjqn.pdf"
        />
      </Worker>
    </div>
</div>
  );
};

export default PDFViewer;