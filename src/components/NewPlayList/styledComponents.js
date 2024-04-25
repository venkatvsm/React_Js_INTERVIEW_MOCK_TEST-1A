import styled from 'styled-components'

export const ListContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  margin-left: 25px;
`
export const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ImageEl = styled.img`
  width: 160px;
`
export const ImageParaContainer = styled.div`
  margin-left: 20px;
`
export const ImageName = styled.p`
  color: #ffff;
  font-family: 'Roboto';
  font-size: 21px;
  font-weight: 500;
`
export const ImageGenre = styled.p`
  color: #3b82f6;
  font-family: 'Roboto';
  font-weight: 500;
`
export const TimeAndDeleteIconContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-color: #ffff;
  width: 200px;
`
export const TimePara = styled.p`
  color: #ffff;
  font-family: 'Roboto';
`
export const DeleteBtn = styled.button`
  border: none;
  outline: none;
  pointer: cursor;
  background-color: transparent;
`
