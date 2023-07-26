export type DataItem = {
  name: string;
  x: number;
  y: number;
  color: string;
  categoryy: "RED" | "GREEN" | "YELLOW" | "BLUE";
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
