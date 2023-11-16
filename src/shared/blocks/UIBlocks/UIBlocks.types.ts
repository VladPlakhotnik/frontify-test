export type Settings = {
  type: 'grid' | 'wcag'
  layout: 1 | 2 | 3 | 4
  isColorCode: boolean
  isShowBorder: boolean
  wcag: 'aa' | 'aaa'
  targets: 'viewer' | 'target'
  isShowAAA: boolean
  isShowAA: boolean
}

export interface BlockProps {
  layout: number
}

export interface BoxProps {
  color: string
  isShowBorder: boolean
}

export interface ColorCodeProps {
  isColorCode: boolean
}
