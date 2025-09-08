export type PopulationValue = {
  year: number;
  value: number;
  rate?: number; // 総人口には rate がないため optional
};

export type PopulationData = {
  label: '総人口' | '年少人口' | '生産年齢人口' | '老年人口';
  data: PopulationValue[];
};

export type PopulationResult = {
  boundaryYear: number;
  data: PopulationData[];
};

export type PopulationResponse = {
  message: string | null;
  result: PopulationResult;
};