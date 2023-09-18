export type RadarplotProps = {
  data: RadarplotData;
};

export type RadarplotData = {
  labels: string[];
  datasets: Dataset[];
};

export type Dataset = {
  label: string;
  data: number[];
  fill: true;
  backgroundColor: string;
  borderColor: string;
  pointBackgroundColor: string;
  pointBorderColor: string;
  pointHoverBackgroundColor: string;
  pointHoverBorderColor: string;
};
