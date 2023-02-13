import { Story } from '../Story';
import { Container, Header } from './style';

interface PostProps {
    profileName: string,
    profileImg: string
    postTime: string 
    
}
export function Post({profileName, postTime,profileImg}: PostProps){
  return (
    <Container>
      <Header>
        <div>
          <Story profileName={profileName} profileImg={profileImg} isHorizontal={true} profileNameBold={true}/>
          <span className="post-time"> • {postTime}</span>
        </div>
        <button>•••</button>
      </Header>
    </Container>
  );
}