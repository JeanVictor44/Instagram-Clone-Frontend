import { Container } from './style';

interface StoryProps {
    profileImg: string,
    profileName: string
}

export function Story({profileImg, profileName}: StoryProps){
  return (
    <Container>
      <img src={profileImg} alt="profile image"/>
    </Container>
  );
}