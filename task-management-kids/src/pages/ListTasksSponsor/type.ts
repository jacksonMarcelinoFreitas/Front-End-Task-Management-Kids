export interface ITask {
  name: string,
  reward: number,
  performed: boolean,
  externalId: string,
  description: string,
};

export type IData = ITask[];
