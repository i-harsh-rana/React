import React, { useEffect, useState } from "react";

export default function CurrencyInfo({ country }) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/dcf6c0499590c5d8bbf1f7bf/latest/${country}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const jsonInfo = await response.json();
        setData(jsonInfo.conversion_rates);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [country]);

  return { data, loading, error };
}
