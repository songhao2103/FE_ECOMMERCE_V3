import React, {
  forwardRef,
  memo,
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
} from "react";
import { CgSearch } from "react-icons/cg";

interface SearchInputProps {
  placeholder?: string;
  onChange?: (value: string) => void;
  value?: string;
  onDebouncedChange?: (value: string) => void;
  onKeyDown?: (value: string) => void;
  keyDown?: React.KeyboardEvent<HTMLInputElement>["key"];
  debounceTime?: number;
  autoFocus?: boolean;
  className?: string;
  id?: string;
}

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  (
    {
      placeholder = "Tìm kiếm...",
      onChange,
      value,
      onDebouncedChange,
      onKeyDown,
      keyDown,
      debounceTime = 500,
      autoFocus = true,
      className = "",
      id = "search",
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState<string>(value ?? "");

    useEffect(() => {
      if (value !== undefined && value !== internalValue) {
        setInternalValue(value);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    const timeoutRef = useRef<number>(null);

    useEffect(() => {
      if (!onDebouncedChange || debounceTime <= 0) {
        return;
      }

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = window.setTimeout(() => {
        onDebouncedChange(internalValue);
      }, debounceTime);

      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }, [internalValue, debounceTime, onDebouncedChange]);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      const v = e.target.value;
      setInternalValue(v);
      onChange?.(v);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (keyDown && e.key === keyDown) {
        onKeyDown?.(internalValue);
      }
    };

    return (
      <div className={`flex justify-center border-gray-200 ${className}`}>
        <div className="relative">
          <div className="absolute inset-y-0 flex items-center cursor-pointer start-0 ps-3 hover:text-secondary">
            <CgSearch size={20} />
          </div>
          <input
            ref={ref}
            type="text"
            id={id}
            autoFocus={autoFocus}
            className="block w-[350px] h-10 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50
                focus:outline-none focus:ring-0.5 focus:ring-secondary focus:border-secondary
                dark:bg-gray-700 dark:border-gray-600
                dark:placeholder-gray-400 dark:text-white
                dark:focus:ring-blue-500 dark:focus:border-secondary"
            placeholder={placeholder}
            value={internalValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
    );
  }
);

SearchInput.displayName = "SearchInput";

export default memo(SearchInput);
