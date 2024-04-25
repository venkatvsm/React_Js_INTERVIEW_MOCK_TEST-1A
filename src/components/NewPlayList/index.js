import {AiOutlineDelete} from 'react-icons/ai'
import {
  ListContainer,
  ImageContainer,
  ImageEl,
  ImageParaContainer,
  ImageName,
  ImageGenre,
  TimeAndDeleteIconContainer,
  TimePara,
  DeleteBtn,
} from './styledComponents'

const NewPlayList = props => {
  const {initialTracksList, deleteBtnTrigger} = props
  const {id, imageUrl, name, genre, duration} = initialTracksList
  const deleteBtnClicked = () => {
    deleteBtnTrigger(id)
  }
  return (
    <ListContainer>
      <ImageContainer>
        <ImageEl src={imageUrl} alt="track" />
        <ImageParaContainer>
          <ImageName>{name}</ImageName>
          <ImageGenre>{genre}</ImageGenre>
        </ImageParaContainer>
      </ImageContainer>
      <TimeAndDeleteIconContainer>
        <TimePara>{duration}</TimePara>
        <DeleteBtn data-testid="delete" onClick={deleteBtnClicked}>
          <AiOutlineDelete color="#ffff" size="21px" />
        </DeleteBtn>
      </TimeAndDeleteIconContainer>
    </ListContainer>
  )
}

export default NewPlayList
