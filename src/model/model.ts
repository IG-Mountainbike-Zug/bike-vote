export interface IAnswer {
    questionId: number;
    answer: number;
}

export interface ISample {
    name: string;
    partyId: number;
    answers: IAnswer[];
    statement: string;
}

export interface IQuestion {
    id: number;
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
