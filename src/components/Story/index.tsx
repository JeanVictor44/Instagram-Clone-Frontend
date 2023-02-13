import { Container, ContainerImg } from './style';

interface StoryProps {
    profileImg: string,
    profileName: string,
    isHorizontal?: boolean
    profileNameBold?: boolean
}

export function Story({profileImg, profileName, isHorizontal = false, profileNameBold = false}: StoryProps){
  return (
    <Container isHorizontal={isHorizontal} profileNameBold={profileNameBold}>
      <ContainerImg>
        <img src={profileImg} alt="profile image"/>
      </ContainerImg>
      <span>{profileName}</span>

    </Container>
  );
}