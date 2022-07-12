import { atom } from "recoil";

export const ChoiceNumber = atom<number>({
  key: "ChoiceNumber",
  default: 1,
});
