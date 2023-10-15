import { createContext } from "react";

export const TotalMetricTonsContext = createContext({
  totalMetricTons: 0,
  flights: 0,
  setFlights: (value: number) => {},
  setTotalMetricTons: (value: number) => {},
  v1: 0,
  setV1: (value: number) => {},
  v2: 0,
  setV2: (value: number) => {},
  v3: 0,
  setV3: (value: number) => {},
  v4: 0,
  setV4: (value: number) => {},
});
