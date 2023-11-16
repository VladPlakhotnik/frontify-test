export type BlocksColorType = {
  label: string
  color: string
}

export type ConformanceLevelsType = {
  normalText: string
  graphicalObj: string
  largeText: string
}

export const blocksColor: BlocksColorType[] = [
  { label: 'Mind blue', color: '005794' },
  { label: 'Sky blue', color: '8FD0FF' },
  { label: 'Jungle green', color: '009445' },
  { label: 'Neon green', color: '2EFF8E' },
  { label: 'Royal purple', color: '530094' },
  { label: 'Pale lavender', color: 'E3BDFF' },
]

export const conformanceLevels = {
  normalText: 'Normal text',
  graphicalObj: 'Graphical objects',
  largeText: 'Large text',
}
