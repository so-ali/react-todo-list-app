import type { IErrorMessageProps } from "./ErrorMessage.types";
import Button from "../atoms/Button";
import { RefreshCw } from "lucide-react";

export default function ErrorMessage({ message, onRetry }: IErrorMessageProps) {
  return (
    <div className="flex text-sm justify-between mb-3 py-3 px-5 border border-red-200 bg-red-100 text-red-600 rounded-2xl">
      {message}
      {onRetry && (
        <Button
          title="Retry"
          onClick={() => {
            onRetry();
          }}
          variant="transparent"
        >
          <RefreshCw size={14} />
        </Button>
      )}
    </div>
  );
}
