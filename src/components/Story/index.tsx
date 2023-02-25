import { Container, ContainerImg } from './style';

interface StoryProps {
    profileImg: string,
    profileName: string,
    isHorizontal?: boolean
    profileNameBold?: boolean
    size? : number,
    location?:string,
    postTime?: string
}

export function Story({profileImg, profileName, isHorizontal = false, profileNameBold = false, size = 60, location, postTime}: StoryProps){
  return (
    <Container isHorizontal={isHorizontal} profileNameBold={profileNameBold}>
      <ContainerImg size={size}> 
        <img src={profileImg} alt="profile image"/>
        
      </ContainerImg>
      <div className="box-column">
        <span>
          {profileName}
          {
            postTime  && (
              <span className='post-time'>
                • {postTime}
              </span>
            )
          }
        </span>
        {
          location  && (
            <span className='location'>
              {location}
            </span>

          )
        }
      </div>
    </Container>
  );
}