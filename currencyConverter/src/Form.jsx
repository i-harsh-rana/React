import React, { useId } from "react";

export default function Form({
  amount,
  label,
  onAmountChange,
  selectCurrency = "USD",
  onCurrencyChange,
  currencyOptions,
  amountDisable = false
}) {
  const id = useId();

  return (
    <>
    <div className={`bg-white p-3 rounded-lg text-sm flex`}>
    <div className="w-1/2">
      <label htmlFor={`${id}-amount`} className="text-black/40 mb-2 inline-block">{label}</label>
      <input
        className="outline-none w-full bg-transparent py-1.5"
        type="number"
        id={`${id}-amount`}
        value={amount}
        placeholder="Amount"
        onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        disabled={amountDisable}
      />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
      <p className="text-black/40 mb-2 w-full">Currency Type</p>
      <select
      className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
        id={`${id}-currency`}
        value={selectCurrency}
        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
      >
        {currencyOptions.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
      </div>
      </div>
    </>
  );
}
