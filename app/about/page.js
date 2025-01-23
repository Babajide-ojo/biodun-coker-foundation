import React from "react";

const PDFViewer = () => {
  return (
    <div style={{ height: "100vh" }}>
      <iframe
        src="https://res.cloudinary.com/dyb8cgrxm/image/upload/v1737673898/p3z0gxs4wnnwhpngtfbn.pdf"
        title="PDF Viewer"
        style={{ width: "100%", height: "100%", border: "none" }}
      />
    </div>
  );
};

export default PDFViewer;
