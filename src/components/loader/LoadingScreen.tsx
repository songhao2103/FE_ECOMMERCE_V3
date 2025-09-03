import React from "react";
import "./style.css";

const LoadingScreen: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white text-black">
      <div className="flex flex-col items-center space-y-4">
        <div className="loader" />
      </div>
    </div>
  );
};

export default LoadingScreen;
