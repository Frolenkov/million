import { render, screen } from '@testing-library/react';
import ScoreItem from './ScoreItem';

describe('ScoreItem', () => {
  it('should render the component', () => {
    const props = {
      index: 1,
      award: 1000,
      currentLevel: 1,
    };
    render(<ScoreItem index={props.index} award={props.award} currentLevel={props.currentLevel} />);
    expect(screen.getByText('1,000')).toBeInTheDocument();
  });
});
