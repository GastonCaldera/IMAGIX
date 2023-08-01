import { SelectProps } from "../../type";

export default function Select({ options, value, onChange }: SelectProps) {
  return (
    <select
      className="text-sm lg:text-base block px-2 py-2 pr-8 rounded-sm bg-transparent cursor-pointe outline-none w-32 text-white font-semibold uppercase"
      value={value}
      onChange={onChange}
    >
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
          className="bg-[#474a51] font-semibold uppercase"
        >
          {option.label}
        </option>
      ))}
    </select>
  );
}
