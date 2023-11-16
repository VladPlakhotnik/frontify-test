import type { BlockProps, BoxProps, ColorCodeProps } from './UIBlocks.types'

import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
export const Grid = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

export const GridBlock = styled.div<BlockProps>`
  width: ${({ layout }) => `${100 / layout - 5}%`};
  height: ${({ layout }) => `${400 / layout}px`};
  margin: 0 10px 20px 0;
`

export const WCAG = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const WCAGBlock = styled.div<BoxProps>`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  height: 150px;
  background-color: ${({ color }) => `#${color}`};
  color: ${({ color }) => (color === '005794' ? '#8FD0FF' : '#005794')};
  border: ${({ isShowBorder }) =>
    isShowBorder
      ? '4px solid rgba(0, 0, 0, 0.3)'
      : '4px solid rgba(0, 0, 0, 0)'};
  border-radius: 5px;
  padding: 1rem;
  font-weight: 900;
`

export const Box = styled.div<BoxProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90%;
  background-color: ${({ color }) => `#${color}`};
  color: #fff;
  border-radius: 5px;
  border: ${({ isShowBorder }) =>
    isShowBorder
      ? '4px solid rgba(0, 0, 0, 0.3)'
      : '4px solid rgba(0, 0, 0, 0)'};
`

export const ABCLeft = styled.p`
  height: 50px;
  font-size: 2rem;
  margin-right: 1rem;
`

export const ABCRight = styled.p`
  font-size: 1rem;
`

export const ColorCode = styled.p<ColorCodeProps>`
  visibility: ${({ isColorCode }) => (isColorCode ? 'visible' : 'hidden')};
`

export const Strong = styled.strong`
  margin-right: 5px;
`

export const ContainerABC = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  justify-content: space-between;
`
