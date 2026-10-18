// Numbers band on Home. Every figure is scoped; update values here only.
// EDIT: bump the stamp whenever any figure changes.
export const statsAsOf = 'Oct 2026';

export type Stat = {
  value: string;
  label: string;
  scope: string;
};

export const stats: Stat[] = [
  // EDIT: funded projects currently led (3DTreePrint / ARIA, Scanning Together / NCEO)
  { value: '2', label: 'Funded ongoing projects I lead', scope: 'ARIA · NCEO' },
  // EDIT: organisations actively scanning with the kit
  { value: '8+', label: 'Organisations scanning with our kit', scope: 'UK forestry agencies, Kew, Madagascar partners' },
  // EDIT: National Forest Inventory plots scanned and segmented
  { value: '50', label: 'National Forest Inventory plots scanned and segmented', scope: 'Slovakia 2025–26' },
];
