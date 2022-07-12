import { atom } from "recoil";

export const QuestionNumber = atom<number>({
  key: "QuestionNumber",
  default: 1,
});

export const EndmbtiState = atom<any>({
  key: "EndmbtiState",
  default: "",
});
