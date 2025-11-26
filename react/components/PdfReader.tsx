import React, { useState, useEffect } from "react";
import { Pdf } from "../typings/pdfReader";
import { useCssHandles } from "vtex.css-handles";
import "../styles/style.css";

const PdfReader = ({ url, width, height }: Pdf) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const style = [
    "container__pdf",
    "title__pdf",
    "object__pdf"
  ]

  const handle = useCssHandles(style);

  return (
    mounted && (
      <div>
        <h2 className={handle.title__pdf}>Pdf Render</h2>
        <div className={handle.container__pdf}>
          <object 
            className={handle.object__pdf}
            data={url} 
            type="application/pdf"
            width={width}
            height={height}
            >
            <iframe 
              title="PDF"
              src={url}
              width={width}
              height={height}
             >
              <p>El navegador no soporta el PDF</p>
            </iframe>
          </object>
        </div>
      </div>
    ) 
  )
}

export default PdfReader;