import { Empty } from "antd";
import { RotatingLines } from "react-loader-spinner";
import { cn } from "../lib/utils";

interface LoaderWrapperCompProps {
  isLoading: boolean;
  isError?: { message?: string } | boolean;
  className?: string;
  loader?: React.ReactNode;
  dataEmpty?: boolean;
  children: React.ReactNode;
}

const LoaderWraperComp = ({
  isLoading,
  isError,
  className,
  loader,
  dataEmpty = false,
  children,
}: LoaderWrapperCompProps) => {
  // Simplify conditional rendering for better readability
  if (isLoading || isError || dataEmpty) {
    let content;

    if (isLoading) {
      content = loader || (
        <RotatingLines
          visible={true}
          strokeWidth="5"
          animationDuration={"0.75"}
          ariaLabel="rotating-lines-loading"
          width={"60"}
          strokeColor="#222f6b"
        />
      );
    } else if (isError) {
      content = (
        <h1 className="text-red-400">
          {typeof isError === "object" &&
          isError !== null &&
          "message" in isError
            ? isError.message || "Something went wrong!"
            : "Something went wrong!"}
        </h1>
      );
    } else if (dataEmpty) {
      content = <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
    }

    return (
      <div
        className={cn(
          `h-[50vh] w-full flex flex-col justify-center items-center`,
          className
        )}
      >
        {content}
      </div>
    );
  }

  return children;
};

export default LoaderWraperComp;
