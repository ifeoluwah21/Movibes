import React from "react";
import { ClipLoader } from "react-spinners";

const Loading: React.FC = () => {
  return (
    <div className="text-center">
      <ClipLoader
        loading={true}
        cssOverride={{
          borderColor: "#3dd2cc",
          margin: "0 auto",
        }}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loading;
