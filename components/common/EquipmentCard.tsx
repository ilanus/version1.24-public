import Pepe from "@/public/assets/images/pepe.png";
import Image from "next/image";
import { displayNumbers } from "@/utils/usableFunc";
import Inventory from "@/public/assets/svg/inventory.svg";

type Props = {
  idx: number;
  handleSelection: (idx: number) => void;
  selected: boolean;
  item: {
    times: number;
    amount: number;
  };
};

export const EquipmentCard = ({
  idx,
  handleSelection,
  selected,
  item,
}: Props) => {
  return (
    <div
      onClick={() => handleSelection(idx)}
      key={idx}
      className={`py-[6.5px] relative px-[19px] bg-[#21201F] border border-[#292828] overflow-hidden rounded-xl ${
        selected ? "opacity-100 borderEffect" : "opacity-50"
      }`}
    >
      {selected && <Inventory className="absolute top-0 left-0" />}
      <h2 className="text-sm text-[#9C9C9C] leading-[16.8px]">x{item.times}</h2>
      <div className="flex flex-col gap-[6px]">
        <Image
          src={Pepe}
          alt="pepe"
          height={62}
          className="object-cover"
          width={66}
        />
        <h2
          className={`text-sm font-normal leading-[16.8px] ${
            selected ? "text-white" : "text-[#9C9C9C]"
          }`}
        >
          ${displayNumbers(item.amount)}
        </h2>
      </div>
    </div>
  );
};
