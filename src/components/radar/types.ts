export type RadarplotProps = {
  name: string;
  data: DataItem[];
};

export type DataItem = {
  question: string;
  value: number;
};
