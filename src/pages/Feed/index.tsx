import { ListStories } from '../../components/ListStories';
import { Post } from '../../components/Post';
import { Container, Principal, RightSide } from './style';

export function Feed () {
  return (
    <Container>
      <Principal>
        <ListStories />
        <Post profileImg="https://media.istockphoto.com/id/1368424494/photo/studio-portrait-of-a-cheerful-woman.jpg?b=1&s=170667a&w=0&k=20&c=VEE1756TeCzYH2uPsFZ_P8H3Di2j_jw8aOT6zd7V8JY=" profileName='Ramona' postTime='32 min'/>
      </Principal>

      <RightSide>
      </RightSide>
    </Container>
  );
}