import { Story } from '../Story';
import { Container, ContainerActions, ContainerCaption, ContainerImage, Header } from './style';
import heartIcon from '../../assets/icons/heart.svg';
import commentIcon from '../../assets/icons/comment.svg';
import shareIcon from '../../assets/icons/share.svg';
import saveIcon from '../../assets/icons/save.svg';

interface PostProps {
    profileName: string
    profileImg: string
    postTime: string 
    postImg: string
    caption: string
    likes: number
    location?: string

    
}
export function Post({profileName, postTime, profileImg, postImg, likes, caption, location}: PostProps){
  return (
    <Container>
      <Header>
        <div>
          
          <Story profileName={profileName} profileImg={profileImg} isHorizontal={true} profileNameBold={true} location={location} postTime={postTime} />
          
        </div>
        

        <button>•••</button>
      </Header>
      <ContainerImage>
        <img src={postImg} />
      </ContainerImage>
      <ContainerActions>
        <div>
          <button>
            <img src={heartIcon} />
          </button>
          <button>
            <img src={commentIcon} />

          </button>
          <button>
            <img src={shareIcon} />

          </button>
        </div>
        <button>
          <img src={saveIcon} />
        </button>
      </ContainerActions>
      <strong className="likes">
        {likes} curtidas
      </strong>
      <ContainerCaption>
        <p>
          <span>{profileName}</span>
          {caption}
        </p>
      </ContainerCaption>
    </Container>
  );
}