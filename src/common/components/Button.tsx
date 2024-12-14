import React from "react";

interface ButtonProps {
  value: string;
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  value,
  onClick,
  loading = false,
  disabled = false,
  className = "",
}) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      disabled={loading || disabled}
      className={`${
        loading || disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className} flex items-center gap-4 bg-[#95CE32] w-full justify-center rounded-md py-2 font-bold text-lg text-white`}
    >
      {value}
      {loading && (
        <div
          className="inline-block h-5 w-5 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-[#00A4E1] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      )}
    </button>
  );
};

export default Button;
