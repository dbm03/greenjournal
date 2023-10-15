export const mockStorageData = {
  logs: [
    {
      time: "2023-10-01",
      value: 10,
    },
    {
      time: "2023-10-02",
      value: 9.5,
    },
    {
      time: "2023-10-03",
      value: 9.8,
    },
    {
      time: "2023-10-04",
      value: 10.2,
    },
    {
      time: "2023-10-05",
      value: 10.1,
    },
    {
      time: "2023-10-06",
      value: 9.7,
    },
    {
      time: "2023-10-07",
      value: 9.9,
    },
  ],
  currentMetricTonsPerYear: 10,
  v1: 0,
  v2: 0,
  v3: 0,
  v4: 0,
  currentMetrics: {
    waste: {
      trashPerWeek: "5",
      weightUnit: "pounds",
      recyclesAluminumSteelCans: false,
      recyclesPlastic: false,
      recyclesGlass: false,
      recyclesNewspaper: false,
      recyclesMagazines: false,
    },
    transportation: {
      isRegularVehicleMaintenance: true,
      milesPerWeekVehicle: "200",
      milesPerGallon: "30",
      milesPerWeekPublicTransportation: "50",
      flightsPerYear: "2",
    },
    other: {
      isVegetarian: false,
      lowFlowShowerhead: false,
      isVolunteer: false,
      shoppingHabits: "sometimes",
      isRecycledProducts: false,
      isOrganicProduce: false,
    },
    energy: {
      naturalGas: "100",
      naturalGasUnit: "cubic-feet",
      electricityBill: "200",
      electricityBillUnit: "kilowatt-hours",
      isGreenEnergyHouse: true,
      fuelOil: "0",
      fuelOilUnit: "gallons",
      propane: "0",
      propaneUnit: "gallons",
    },
  },
};

export type localStorageSchema = typeof mockStorageData;
