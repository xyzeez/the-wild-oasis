"use client";

import { createContext, useContext, useState } from "react";

const ReservationContext = createContext();

const initialState = { from: undefined, to: undefined };

const ReservationProvider = ({ children, initialRange = initialState }) => {
  const [range, setRange] = useState(initialRange);
  const resetRange = () => setRange(initialRange);

  const handleSelect = (selectedRange) => {
    if (selectedRange === undefined) return;
    setRange(selectedRange);
  };

  return (
    <ReservationContext.Provider
      value={{ range, setRange: handleSelect, resetRange }}
    >
      {children}
    </ReservationContext.Provider>
  );
};

const useReservation = () => {
  const context = useContext(ReservationContext);
  if (context === undefined)
    throw new Error("Context was used outside provider");
  return context;
};

export { ReservationProvider, useReservation };
