import { createSlice } from '@reduxjs/toolkit';
import { IQuestion } from '../../models';
import questionsJSON from '../../constanst/questions.json';

interface GameState {
  currentLevel: number,
  questions: IQuestion[]
}

const initialState: GameState = {
  currentLevel: 0,
  questions: questionsJSON.data || [],
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    moveToNextLevel: (state: GameState) => {
      state.currentLevel += 1;
    },
    restartGame: (state: GameState) => {
      state.currentLevel = 0;
    },
  },
});

export default gameSlice.reducer;
export const { moveToNextLevel, restartGame } = gameSlice.actions;
