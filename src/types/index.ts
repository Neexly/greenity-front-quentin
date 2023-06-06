import { Panel } from "@prisma/client";

export type SafePanel = Omit<
  Panel, 
  "createdAt"
> & {
  createdAt: string;
};