import styled from 'styled-components';

const Title = styled.h1<{primary: boolean}>`
  font-size: 1.2em;
  text-align: center; 
  color: ${props => props.primary ? "white" : "palevioletred"};
`;

const Home = () => 
            <Title primary>
                This is a home page. Use Navigation menu to switch between teeny-tiny apps.
            </Title> ;
            
export default Home;