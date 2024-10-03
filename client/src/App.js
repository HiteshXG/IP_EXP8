import React, { useState } from "react";
import "./App.css"; // Import the CSS file

const App = () => {
  const [fileContent, setFileContent] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const handleReadFile = async () => {
    try {
      const response = await fetch("https://ip-exp-8-q0m9msm5x-mao-shi-chigamks-projects.vercel.app/read-file");
      const data = await response.json();
      setFileContent(data.content);
    } catch (error) {
      console.error("Error:", error);
      setFileContent("Error reading file");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                stroke="#3b82f6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 2V8H20"
                stroke="#3b82f6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 13H8"
                stroke="#3b82f6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 17H8"
                stroke="#3b82f6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 9H9H8"
                stroke="#3b82f6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Async File Reader
          </h2>
        </div>
        <div className="card-content">
          <button
            onClick={handleReadFile}
            className={`button ${isHovered ? 'button-hover' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Read File
          </button>
          {fileContent && <div className="file-content">{fileContent}</div>}
        </div>
      </div>
    </div>
  );
};

export default App;
