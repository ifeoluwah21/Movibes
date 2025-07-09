import React from "react";
import logo_path from "../../assets/screen-loading.svg";

const LogoSpinner: React.FC = () => {
  return (
    <figure className="relative min-h-[85vh]">
      <img
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin"
        src={logo_path}
        alt={"Loading"}
      />
    </figure>
  );
};

export default LogoSpinner;
