import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { cn } from "../lib/utils";

type PageHeadingProps = {
  title?: string;
  backPath?: string | number;
  disbaledBackBtn?: boolean;
  className?: string;
};

const PageHeading = ({
  title,
  backPath,
  disbaledBackBtn,
  className,
}: PageHeadingProps) => {
  const navigate = useNavigate();
  return (
    <div className={cn("flex items-center gap-1 ", className)}>
      {!disbaledBackBtn && (
        <button
          className="outline-none px-2"
          onClick={() => {
            if (typeof backPath === "number") {
              navigate(backPath);
            } else if (typeof backPath === "string") {
              navigate(backPath);
            } else {
              navigate(-1);
            }
          }}
        >
          <FaArrowLeftLong size={22} />
        </button>
      )}
      {!!title && <h1 className="text-[25px] font-medium">{title}</h1>}
    </div>
  );
};

export default PageHeading;
