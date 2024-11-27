import React, { useState } from "react";
import { DialogContent } from "../ui/dialog";

import { Button } from "../ui/Button";
import { TfiReload } from "react-icons/tfi";
import { CiCircleList, CiSearch } from "react-icons/ci";
import { Input } from "../ui/Input";
import { BsTags } from "react-icons/bs";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { DialogTitle } from "@radix-ui/react-dialog";
import { EquipmentCard } from "./EquipmentCard";

const item = {
  times: 5,
  amount: 12435.56,
};

const ShopDialogContent = () => {
  const [selected, setSelected] = useState<number[]>([]);
  const itemsArray = Array.from({ length: 40 });

  const handleSelection = (idx: number) => {
    setSelected((prev) =>
      prev.filter((item) => item !== idx).length === prev.length
        ? [...prev, idx]
        : prev.filter((item) => item !== idx)
    );
  };
  return (
    <DialogContent className="w-fit border-none flex flex-col lg:flex-row">
      <VisuallyHidden>
        <DialogTitle>ShopDialogContent</DialogTitle>
      </VisuallyHidden>
      <div className="flex flex-col bg-[#1A1A19] border border-[#272625] rounded-2xl">
        <div className="flex items-center justify-center py-[14px] border-b border-b-[#272625]">
          <h2 className="leading-[19.2px] font-fredoka">Shop</h2>
        </div>
        <div className="flex justify-center items-center mt-3 px-[30px] md:px-[125px]">
          <div className="flex gap-[50px] justify-between w-full md:max-w-[862px]">
            <div className="py-[10.5px] hidden md:flex items-center gap-3 ">
              <TfiReload fontSize={24} />
              <CiCircleList fontSize={24} />
            </div>
            <div
              className={`bg-[#181716] border border-[#1E1D1B] w-full 2xl:w-[632px] flex items-center gap-3 pl-3 rounded-lg`}
            >
              <CiSearch fontSize={24} />
              <Input
                type="search"
                placeholder="Search rewards inventory"
                className="outline-none border-none focus:border-none"
              />
            </div>
            <div className=" hidden md:flex items-center justify-center">
              <BsTags fontSize={24} />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 xl:grid-cols-10 gap-3 p-3">
          {itemsArray.map((_, idx) => (
            <EquipmentCard
              key={idx}
              idx={idx}
              handleSelection={handleSelection}
              selected={selected.findIndex((item) => item === idx) !== -1}
              item={item}
            />
          ))}
        </div>
      </div>
      <div className=" p-[14px] flex flex-col pt-4 rounded-xl bg-[#21201F] border border-[#292828] w-full sm:w-[330px] gap-[19px] h-fit">
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-lg leading-[21.6px]">Available: $5,284.22</h2>
          <h2 className="text-lg leading-[21.6px] text-[#9C9C9C]">
            Selected:
            <span className="text-white">{selected.length}</span>
          </h2>
        </div>
        <Button variant={"secondary"}>Buy now</Button>
      </div>
    </DialogContent>
  );
};

export default ShopDialogContent;
