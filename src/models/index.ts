export enum AnswerButtonStatus {
  inactive = 'inactive',
  selected = 'selected',
  correct = 'correct',
  wrong = 'wrong',
}

export enum ScoreItemStatus {
  current = 'current',
  prev = 'prev',
  next = 'next',
}

export interface IAnswer {
  figure: string;
  text: string;
  isCorrect: boolean;
}

export interface IQuestion {
  id: string;
  question: string;
  answers: IAnswer[];
  award: number;
}
