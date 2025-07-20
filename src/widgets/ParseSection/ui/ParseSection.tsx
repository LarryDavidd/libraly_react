import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { useAppDispatch } from "../../../shared/store/hooks";
import { fetchInitialData } from "../../../shared/store/thunks";
import { SimpleInput } from "../../../shared/ui-kits/inputs";
import { SimpleButton } from "../../../shared/ui-kits/buttons";
import { QuestionModel } from "../../../shared/ui-kits/modal";

interface ParseModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: (result: string) => void;
}

export const ParseModal = ({ isOpen, onClose, onSuccess }: ParseModalProps) => {
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      setInputValue("");
      setError(null);
      setResult(null);
    }
  }, [isOpen]);

  const handleInputChange = (value: string) => {
    const numericValue = value.replace(/[^0-9]/g, "");
    setInputValue(numericValue);
  };

  const handleSubmit = async () => {
    if (!inputValue) {
      setError("Please enter a number");
      return;
    }

    const numericValue = parseInt(inputValue, 10);
    if (isNaN(numericValue)) {
      setError("Invalid number");
      return;
    }

    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch(
        import.meta.env.VITE_BASE_URL + "/api/parse",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            pages_num: numericValue,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setResult(data.message);
      dispatch(fetchInitialData());

      if (onSuccess) {
        onSuccess(data.message);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    if (!isLoading) {
      onClose();
    }
  };

  return (
    <QuestionModel isOpen={isOpen} onClose={handleClose} isLoading={isLoading}>
      <section className={styles.numberSection}>
        <h3>Enter number of parse page</h3>
        <div className={styles.numberSection__controls}>
          <SimpleInput
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter a number..."
            type="number"
            disabled={isLoading}
          />
          <SimpleButton
            text={isLoading ? "Processing..." : "Parse"}
            onClick={handleSubmit}
            disabled={!inputValue || isLoading}
          />
        </div>

        {error && (
          <div className={styles.numberSection__error}>Error: {error}</div>
        )}

        {result && <div className={styles.numberSection__result}>{result}</div>}
      </section>
    </QuestionModel>
  );
};
