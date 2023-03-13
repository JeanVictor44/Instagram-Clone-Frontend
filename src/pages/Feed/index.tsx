import { ListStories } from '../../components/ListStories';
import { Post } from '../../components/Post';
import { Story } from '../../components/Story';
import { Container, HeaderRightSide, Principal, RightSide, SuggestionList } from './style';

export function Feed () {
  return (
    <Container>
      <Principal>
        <ListStories />
        
        <Post likes={450} location="São paulo, parque dos namorados" caption='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed sapien rutrum, posuere libero eu, congue odio. Donec convallis, nulla sed sodales dictum, orci augue faucibus sapien, vitae cursus metus sapien ut massa. Maecenas quis ante augue. Cras neque risus, faucibus eu tristique et, ornare id ipsum. Aenean nisl metus, pretium a tincidunt vitae, ultricies id nisl. Nam ac dui orci. Phasellus quis rhoncus lectus. Sed a aliquam ex.' postImg='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1600' profileImg="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1600" profileName='Ramona' postTime='32 min'/>
        <Post likes={450} caption='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed sapien rutrum, posuere libero eu, congue odio. Donec convallis, nulla sed sodales dictum, orci augue faucibus sapien, vitae cursus metus sapien ut massa. Maecenas quis ante augue. Cras neque risus, faucibus eu tristique et, ornare id ipsum. Aenean nisl metus, pretium a tincidunt vitae, ultricies id nisl. Nam ac dui orci. Phasellus quis rhoncus lectus. Sed a aliquam ex.' postImg='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1600' profileImg="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1600" profileName='Ramona' postTime='32 min'/>
        <Post likes={450} caption='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed sapien rutrum, posuere libero eu, congue odio. Donec convallis, nulla sed sodales dictum, orci augue faucibus sapien, vitae cursus metus sapien ut massa. Maecenas quis ante augue. Cras neque risus, faucibus eu tristique et, ornare id ipsum. Aenean nisl metus, pretium a tincidunt vitae, ultricies id nisl. Nam ac dui orci. Phasellus quis rhoncus lectus. Sed a aliquam ex.' postImg='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1600' profileImg="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1600" profileName='Ramona' postTime='32 min'/>
        <Post likes={450} caption='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed sapien rutrum, posuere libero eu, congue odio. Donec convallis, nulla sed sodales dictum, orci augue faucibus sapien, vitae cursus metus sapien ut massa. Maecenas quis ante augue. Cras neque risus, faucibus eu tristique et, ornare id ipsum. Aenean nisl metus, pretium a tincidunt vitae, ultricies id nisl. Nam ac dui orci. Phasellus quis rhoncus lectus. Sed a aliquam ex.' postImg='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1600' profileImg="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1600" profileName='Ramona' postTime='32 min'/>
      </Principal>

      <RightSide>
        
        <HeaderRightSide>
          <Story profileName='Ramona' profileImg='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1600' isHorizontal={true} profileNameBold={true}/>
          <button>Mudar</button>
        </HeaderRightSide>

        <div className="suggestion">
          <h3>Sugestões para você</h3>
          <button>Ver tudo</button>
        </div>

        <SuggestionList>
          <li>
            <Story profileName='Ramona' size={40} profileImg='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1600' isHorizontal={true} profileNameBold={true}/>
            <button>Mudar</button>
          </li>
          <li>
            <Story profileName='Ramona' size={40} profileImg='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1600' isHorizontal={true} profileNameBold={true}/>
            <button>Mudar</button>
          </li>
          <li>
            <Story profileName='Ramona' size={40} profileImg='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1600' isHorizontal={true} profileNameBold={true}/>
            <button>Mudar</button>
          </li>

          <li>
            <Story profileName='Ramona' size={40} profileImg='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1600' isHorizontal={true} profileNameBold={true}/>
            <button>Mudar</button>
          </li>

        </SuggestionList>
        
      </RightSide>
    </Container>
  );
}