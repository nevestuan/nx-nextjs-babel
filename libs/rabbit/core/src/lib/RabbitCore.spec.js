import { render } from '@testing-library/react';
import RabbitCore from './RabbitCore';
describe('RabbitCore', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RabbitCore />);
    expect(baseElement).toBeTruthy();
  });
});
