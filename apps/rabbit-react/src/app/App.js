import styled from 'styled-components';
import NxWelcome from './nx-welcome';
import { Shared } from '@rabbit/core';

const StyledApp = styled.div`
  // Your style here
`;
export function App() {
  return (
    <StyledApp>
      <Shared />
      <NxWelcome title="rabbit-react" />
    </StyledApp>
  );
}
export default App;
