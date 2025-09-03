import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import ButtonCustom from "../button/ButtonCustom";

interface IBoxFiltersProps<T> {
  options: T[];
  title: string;
  defaultOptions?: T[];
  renderOption?: (option: T) => ReactNode;
  onSubmit: (options: T[]) => void;
  getEqualOption: (option1: T, option2: T) => boolean;
}

type OptionLocal<T> = T & {
  isSelected: boolean;
  idLocal: number;
  isNewSelect: boolean;
};

function BoxFilters<T>({
  options,
  renderOption,
  defaultOptions = [],
  getEqualOption,
  title,
  onSubmit,
}: IBoxFiltersProps<T>) {
  const [optionsLocal, setOptionsLocal] = useState<OptionLocal<T>[]>([]);
  const [open, setOpen] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let defaultOptionClone = [...defaultOptions];

    const newOptions = options.map((option, index) => {
      if (defaultOptionClone.length > 0) {
        const defaultOption = defaultOptionClone.find((od) =>
          getEqualOption(option, od)
        );

        if (defaultOption) {
          defaultOptionClone = defaultOptionClone.filter(
            (op) => !getEqualOption(op, option)
          );
          return {
            ...defaultOption,
            idLocal: index + 1,
            isSelected: true,
            isNewSelect: true,
          };
        }
      }

      return {
        ...option,
        isSelected: false,
        idLocal: index + 1,
        isNewSelect: false,
      };
    });

    setOptionsLocal(newOptions);
  }, [options]);

  // Đóng khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) {
        setOpen(false);
        setOptionsLocal((prev) =>
          prev.map((item) => ({ ...item, isNewSelect: item.isSelected }))
        );
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isActiveTitle = useMemo(() => {
    if (open) return true;
    return optionsLocal.some((item) => item.isSelected);
  }, [optionsLocal, open]);

  const handleSelectOption = (idLocal: number) => {
    setOptionsLocal((prev) => {
      return prev.map((item) =>
        item.idLocal == idLocal
          ? { ...item, isNewSelect: !item.isNewSelect }
          : item
      );
    });
  };

  const handleClear = () => {
    setOptionsLocal(optionsLocal.map((op) => ({ ...op, isNewSelect: false })));
  };

  const handleSubmit = () => {
    const newList: T[] = optionsLocal.map(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ({ isSelected, idLocal, ...rest }) => rest as T
    );
    onSubmit(newList);
    setOptionsLocal((prev) =>
      prev.map((item) => ({ ...item, isSelected: item.isNewSelect }))
    );
    setOpen(false);
  };

  return (
    <div ref={boxRef} className="relative inline-block">
      {/* Title */}
      <div
        className={clsx(
          "flex items-center px-3 h-10 transition-colors rounded cursor-pointer gap-x-2 w-fit",
          {
            "bg-secondary-muted border-secondary border": isActiveTitle,
            "hover:bg-foreground-muted bg-surface-muted": !isActiveTitle,
          }
        )}
        onClick={() => setOpen((prev) => !prev)}
      >
        <p className={clsx("", { "text-secondary": isActiveTitle })}>{title}</p>
        {/* Animate arrow */}
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className={clsx("", { "text-secondary": isActiveTitle })}
        >
          <IoIosArrowDown />
        </motion.div>
      </div>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -5, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -5, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute left-0 z-50 mt-2 bg-white border rounded shadow-lg w-screen p-2 max-w-[450px]"
          >
            <div className="flex flex-wrap gap-2">
              {optionsLocal.map((o, i) => {
                const Option = renderOption ? renderOption(o) : String(o);
                return (
                  <div
                    key={i}
                    className={clsx(
                      "px-3 py-2 cursor-pointer border rounded-full",
                      {
                        "border-primary bg-primary-muted": o.isNewSelect,
                        "hover:bg-gray-50": !o.isNewSelect,
                      }
                    )}
                    onClick={() => handleSelectOption(o.idLocal)}
                  >
                    {Option}
                  </div>
                );
              })}
            </div>
            <div className="flex items-center justify-center mt-4 gap-x-2">
              <ButtonCustom
                type="close"
                label="Clear"
                size="sm"
                onClick={handleClear}
              />
              <ButtonCustom label="Submit" size="sm" onClick={handleSubmit} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default BoxFilters;
