import { ListStories } from '../../components/ListStories';
import { Container, Principal, RightSide } from './style';

export function Feed () {
  return (
    <Container>
      <Principal>
        <ListStories />

      </Principal>
      <RightSide>
      </RightSide>
    </Container>
  );
}