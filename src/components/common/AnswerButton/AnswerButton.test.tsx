import { render } from '@testing-library/react';
import AnswerButton from './AnswerButton';

describe('AnswerButton', () => {
  const answer = {
    figure: 'A',
    text: 'Answer A',
    isCorrect: true,
  };
  const onClick = jest.fn();

  it('should render correctly', () => {
    const { getByText } = render(
      <AnswerButton
        answer={answer}
        onClick={onClick}
      />,
    );

    expect(getByText(answer.figure)).toBeInTheDocument();
    expect(getByText(answer.text)).toBeInTheDocument();
  });
});
