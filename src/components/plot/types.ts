export type DataItem = {
  slug: string;
  name: string;
  party: string;
  x: number;
  y: number;
  color: string;
  size: number;
  annotation?: "top" | "right" | "left" | "bottom";
};

export type ScatterplotProps = {
  width: number;
  height: number;
  data: DataItem[];
};

// Information needed to build the tooltip
export type InteractionData = DataItem & {
  xPos: number;
  yPos: number;
};
