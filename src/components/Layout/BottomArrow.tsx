// src/components/Layout/BottomArrow.tsx
import React from "react";
import { ArrowDown } from "lucide-react";

interface Props {
  onClick: () => void;
}

const BottomArrow: React.FC<Props> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute bottom-6 right-6 bg-[#2F2F2F] p-3 rounded-full shadow-lg hover:bg-[#00AEEF] transition-colors z-20"
    >
      <ArrowDown className="text-white" />
    </button>
  );
};

export default BottomArrow;
