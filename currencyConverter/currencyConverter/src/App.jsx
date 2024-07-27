import { useState, useEffect } from 'react';
import Form from './Form';
import CurrencyInfo from './ApiHandler';
import LottieAnimation from './LottieAnimation';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const { data: currencyInfo, loading, error } = CurrencyInfo({ country: from });

  useEffect(() => {
    console.log('CurrencyInfo data:', currencyInfo);
  }, [currencyInfo]);

  const options = currencyInfo ? Object.keys(currencyInfo) : [];

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    if (currencyInfo && currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to]);
    }
  };

  useEffect(() => {
    convert();
  }, [amount, from, to, currencyInfo]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <><div className='flex'>
      <div className='w-[35%] h-screen'>
        <LottieAnimation/>
      </div>
      <div
        className="w-[65%] h-screen flex flex-wrap justify-center items-center bg-[url('https://images.pexels.com/photos/164636/pexels-photo-164636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center h-screen w-full">
        <div className="w-3/4 border border-gray-60 p-5 backdrop-blur-none bg-white/30 rounded-xl">
          <div className="">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div className="w-full mb-1">
                <Form
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  selectCurrency={from}
                  onAmountChange={(amount) => setAmount(amount)}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-black text-white px-2 py-0.5  hover:bg-white hover:text-black hover:border-gray-400 hover:border-0.1"
                  onClick={swap}
                >
                  Swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <Form
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={to}
                  amountDisable
                />
              </div>
              <button type="submit" className="w-full bg-black text-white px-4 py-3 rounded-lg hover:bg-white hover:text-black">
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
