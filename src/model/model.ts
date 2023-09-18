export interface IAnswer {
  questionId: number;
  answer: number;
}

export interface ISample {
  slug: string;
  name: string;
  ridesMtb: boolean;
  partyId: number;
  answers: IAnswer[];
  statement: string;
}

export interface IQuestion {
  id: number;
  text: string;
  label: string;
  answers: IAnswerOption[];
}

export interface IAnswerOption {
  value: number;
  text: string;
}

export interface IParty {
  id: number;
  name: string;
  color: string;
}

export interface IKanton {
  name: string;
  parties: IParty[];
  questions: IQuestion[];
  samples: ISample[];
}
