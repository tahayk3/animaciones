import { proxy } from "valtio";

type Colors = {
  body: string | null;
  tapa: string | null;
  watter: string | null;
};

export const store = proxy<{ items: Colors }>({
  items: {
    body: null,
    tapa: null,
    watter: null,
  },
});
