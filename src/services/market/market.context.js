import { createContext, useEffect, useState } from "react";
import {
  marketDataRequest,
  transformedMarketDataRequest,
} from "./market.service";

export const MarketContext = createContext();

export const MarketContextProvider = ({ children }) => {
  const [market, setMarket] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getMarketData = () => {
    setIsLoading(true);

    try {
      setTimeout(() => {
        marketDataRequest()
          .then(transformedMarketDataRequest)
          .then((data) => {
            setMarket(data);
            setError(null);
            setIsLoading(false);
          }, 2000);
      });
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMarketData();
  }, []);

  const value = {
    market,
    error,
    isLoading,
  };
  return (
    <MarketContext.Provider value={value}>{children}</MarketContext.Provider>
  );
};
