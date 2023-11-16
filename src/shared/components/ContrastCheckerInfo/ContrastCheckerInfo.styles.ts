import styled from 'styled-components'

export const Contrast = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  font-weight: 700;
  color: #000;
`

export const ContrastDetails = styled.div`
  display: flex;
`

export const Strong = styled.strong`
  margin-right: 10px;
`

export const Span = styled.div`
  font-size: 3rem;
`

export const AAA = styled.button<{
  validate?: string
  isShowAAA: boolean
}>`
  display: ${({ isShowAAA }) => (isShowAAA ? 'block' : 'none')};
  font-size: 0.7rem;
  padding: 0 3px;
  border: ${({ validate }) =>
    validate === 'fail' ? '2px solid #ff6868' : '2px solid #25b700'};
  border-radius: 5px;
`
export const AA = styled.button<{
  validate?: string
  isShowAA: boolean
}>`
  display: ${({ isShowAA }) => (isShowAA ? 'block' : 'none')};
  font-size: 0.7rem;
  padding: 0 3px;
  border: ${({ validate }) =>
    validate === 'fail' ? '2px solid #ff6868' : '2px solid #25b700'};
  border-radius: 5px;
  margin-left: 5px;
`
