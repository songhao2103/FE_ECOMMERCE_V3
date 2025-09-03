import clsx from "clsx";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
interface IPaginationProps {
  currentPage: number;
  totalPage: number;
  onChange: (page: number) => void;
}

const Pagination: React.FC<IPaginationProps> = ({
  currentPage,
  totalPage,
  onChange,
}) => {
  const [pagesList, setPagesList] = useState<number[]>([]);

  const arrayPages = useMemo<number[]>(() => {
    const arrayPages: number[] = [];
    for (let i = 0; i < totalPage; i++) {
      arrayPages.push(i + 1);
    }
    return arrayPages;
  }, [totalPage]);

  const handleSetPages = useCallback(
    (page: number) => {
      if (totalPage <= 9) {
        setPagesList(arrayPages);
        return;
      }
      const first = arrayPages.slice(0, 2);

      let startMid = 0;
      let endMid = 0;

      if (page - 2 <= 2) {
        startMid = 2;
      } else if (page >= totalPage - 3) {
        startMid = totalPage - 7;
      } else {
        startMid = page - 3;
      }

      if (page - 2 <= 2) {
        endMid = 7;
      } else if (page >= totalPage - 3) {
        endMid = totalPage - 2;
      } else {
        endMid = page + 2;
      }

      const middlePages = arrayPages.slice(startMid, endMid);

      const endPages = arrayPages.slice(totalPage - 2, totalPage);

      setPagesList([...first, ...middlePages, ...endPages]);
    },
    [arrayPages]
  );

  useEffect(() => {
    handleSetPages(currentPage);
  }, [handleSetPages, currentPage]);

  const handleSelectPage = (page: number) => {
    handleSetPages(page);
    onChange(page);
  };

  const handleAdvanceOrBack = (type: 1 | -1) => {
    if (type === 1 && currentPage === totalPage) return;
    if (type === -1 && currentPage === 1) return;
    handleSelectPage(currentPage + type);
  };

  return (
    <div className="flex items-center">
      <div
        className={clsx(
          "opacity-50 hover:opacity-100 w-10 h-10 rounded-full border flex items-center justify-center transition-color-soft",
          {
            "cursor-no-drop hover:border-none": currentPage === 1,
            "cursor-pointer hover:border-foreground-muted ": currentPage !== 1,
          }
        )}
        onClick={() => handleAdvanceOrBack(-1)}
      >
        <IoIosArrowBack />
      </div>
      {pagesList.map((page, index) => {
        if (index < 2 || index > pagesList.length - 3)
          return (
            <PageItem
              key={page}
              content={page}
              onClick={() => handleSelectPage(page)}
              active={currentPage === page}
            />
          );

        if (page - 1 > pagesList[index - 1] || page + 1 < pagesList[index + 1])
          return (
            <PageItem
              key={page}
              content={"..."}
              onClick={() => handleSelectPage(page)}
              active={currentPage === page}
            />
          );

        return (
          <PageItem
            key={page}
            content={page}
            onClick={() => handleSelectPage(page)}
            active={currentPage === page}
          />
        );
      })}

      <div
        className={clsx(
          " opacity-50 hover:opacity-100 w-10 h-10 rounded-full border flex items-center justify-center transition-color-soft",
          {
            "cursor-no-drop hover:border-none":
              currentPage === pagesList.length,
            "cursor-pointer hover:border-foreground-muted ":
              currentPage !== pagesList.length,
          }
        )}
        onClick={() => handleAdvanceOrBack(1)}
      >
        <IoIosArrowForward />
      </div>
    </div>
  );
};

export default Pagination;

interface IPageItemProps {
  onClick: () => void;
  content: string | number;
  active: boolean;
}

const PageItem: React.FC<IPageItemProps> = ({ onClick, content, active }) => {
  return (
    <div
      className={clsx(
        "w-10 h-10 rounded-full border flex items-center justify-center cursor-pointer transition-color-soft",
        {
          "bg-secondary-muted text-secondary hover:border-secondary": active,
          "hover:border-foreground-muted opacity-50 hover:opacity-100": !active,
        }
      )}
      onClick={() => {
        if (content !== "...") {
          onClick();
        }
        return;
      }}
    >
      {content}
    </div>
  );
};
