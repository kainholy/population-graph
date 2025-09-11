export type Prefecture = {
  prefCode: number;
  prefName: string;
};

export type PrefecturesResponse = {
  message: string | null;
  result: Prefecture[];
};