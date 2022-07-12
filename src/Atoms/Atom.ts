import { atom } from "recoil";

export const QuestionNumber = atom<number>({
  key: "QuestionNumber",
  default: 1,
});
