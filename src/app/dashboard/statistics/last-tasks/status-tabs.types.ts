export const STATUSES = {
  ALL: 'All',
  ACTIVE: 'Active',
  COMPLETED: 'Completed',
} as const;

export type Status = typeof STATUSES[keyof typeof STATUSES]