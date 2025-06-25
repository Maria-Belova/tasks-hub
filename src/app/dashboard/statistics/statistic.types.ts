export interface IStatisticCard {
  id: number;
  title: string;
  value: number;
  valueType: 'count' | 'time';
  logo: string;
  bgColor: string;
}
