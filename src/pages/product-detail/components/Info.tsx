import React, { useCallback, useEffect, useState } from "react";
import { fakeProducts } from "../constance";
import type { IImageOfProduct } from "../../../https/apis/products/type";

import { imageDefault } from "../../../constances/files";
import Ratings from "../../../components/ratings/Ratings";
import clsx from "clsx";
import ToggleQuantity from "../../../components/button/ToggleQuantity";
import type { IValueSelected } from "../type";
import ButtonCustom from "../../../components/button/ButtonCustom";
import { GoHeart } from "react-icons/go";

const Info = () => {
  const [imageList, setImageList] = useState<IImageOfProduct[]>([]);
  const [imageSelected, setImageSelected] = useState<IImageOfProduct | null>(
    null
  );

  const [valueSelected, setValueSelected] = useState<IValueSelected | null>(
    null
  );

  useEffect(() => {
    if (!fakeProducts) return;
    setImageList(fakeProducts.images || []);

    const selected = fakeProducts.images?.find((item) => item.quantity) || null;

    if (!selected) return;

    setImageSelected(selected);
    setValueSelected({
      currentQuantity: 1,
      maxQuantity: selected?.quantity || 0,
      colorCode: selected?.colorCode || "",
      imageId: selected?.id,
    });
  }, [fakeProducts]);

  const handleChangeQuantity = useCallback((quantity: number) => {
    setValueSelected((prev) => {
      if (!prev) return null;
      return { ...prev, currentQuantity: quantity };
    });
  }, []);

  return (
    <div className="flex gap-x-3">
      <div className="flex flex-col gap-y-2 w-[15%] ">
        {imageList.map((item) => (
          <div
            key={item.id}
            className="w-full transition border hover:border-secondary"
          >
            <img src={item.url} alt="" className="object-cover " />
          </div>
        ))}
      </div>
      <div className="w-[45%] bg-red-400 flex items-center justify-center">
        <img
          src={imageSelected?.url || imageDefault}
          alt=""
          className="object-fill w-[70%]"
        />
      </div>

      <div>
        <p className="title-h3">{fakeProducts.productName}</p>

        <div className="flex items-center gap-x-2">
          <Ratings rating={4} />
          <p className="text-foreground-muted">(120 review)</p>
        </div>

        <p>{fakeProducts.description}</p>

        <div className="h-[2px] bg-foreground-muted"></div>

        <div className="flex items-center gap-x-3">
          <p>Colours:</p>
          <div className="flex items-center gap-x-1">
            {imageList
              .filter((item) => Boolean(item.colorCode))
              .map((item) => {
                const active = item.id === imageSelected?.id;
                return (
                  <div
                    key={item.id}
                    className={clsx(
                      "border-surface border-2 rounded-full w-6 h-6 flex items-center justify-center box-border"
                    )}
                    style={{
                      backgroundColor: item.colorCode,
                      borderColor: active
                        ? "var(--color-foreground)"
                        : item.colorCode,
                    }}
                  >
                    <div
                      className={clsx(
                        "h-5 w-5 rounded-full border-2 box-border"
                      )}
                      style={{
                        backgroundColor: item.colorCode,
                        borderColor: active
                          ? "var(--color-surface)"
                          : item.colorCode,
                      }}
                    />
                  </div>
                );
              })}
          </div>
        </div>

        <div className="flex items-center gap-x-4">
          <ToggleQuantity
            currentQuantity={valueSelected?.currentQuantity || 0}
            maxQuantity={valueSelected?.maxQuantity}
            onChange={handleChangeQuantity}
          />
          <ButtonCustom label="Buy Now" hideIcon size="sm" />

          <div className="flex items-center justify-center w-8 h-8 transition border-2 rounded-md cursor-pointer border-foreground-muted text-foreground-muted hover:bg-secondary hover:border-secondary group">
            <GoHeart size={20} className="group-hover:text-surface" />
          </div>
        </div>
        <div>
          <div>
            <div></div>
            <div>
              <p></p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
