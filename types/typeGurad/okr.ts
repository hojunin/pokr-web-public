import { OKR, KEY_RESULT, INITIATIVE } from '../okr';

export const isOkr = (okr: unknown): okr is OKR => {
  return !!okr && typeof (okr as OKR).objectiveId === 'number';
};

export const isKeyResult = (keyResult: unknown): keyResult is KEY_RESULT => {
  return (
    !!keyResult && typeof (keyResult as KEY_RESULT).keyResultId === 'number'
  );
};

export const isKeyResults = (
  keyResults: unknown[],
): keyResults is KEY_RESULT[] => {
  return keyResults.every(isKeyResult);
};

export const isInitiative = (initiative: unknown): initiative is INITIATIVE => {
  return (
    !!initiative && typeof (initiative as INITIATIVE).initiativeId === 'number'
  );
};

export const isInitiatives = (
  initiatives: unknown[],
): initiatives is INITIATIVE[] => {
  return initiatives.every(isInitiative);
};
