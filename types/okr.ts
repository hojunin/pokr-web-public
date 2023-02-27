import { ID } from './common';

export interface OKR {
  objectiveId: ID;
  objectiveTitle: string;
  keyResults: KEY_RESULT[];
}

export interface KEY_RESULT {
  initiatives: INITIATIVE[];
  keyResultId: ID;
  keyResultTitle: string;
}

export interface INITIATIVE {
  achievement: boolean;
  initiativeId: ID;
  initiativeTitle: string;
}
