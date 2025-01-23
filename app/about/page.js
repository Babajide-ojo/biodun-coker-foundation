"use client"
import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

const PDFViewer = () => {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
        <Viewer
          fileUrl="https://res.cloudinary.com/dyb8cgrxm/image/upload/v1737673898/p3z0gxs4wnnwhpngtfbn.pdf"
        />
      </Worker>
    </div>
  );
};

export default PDFViewer;