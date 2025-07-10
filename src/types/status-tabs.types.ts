export const STATUS = {
  ALL: 'All',
  ACTIVE: 'Active',
  COMPLETED: 'Completed',
} as const;

export type Status = typeof STATUS[keyof typeof STATUS]