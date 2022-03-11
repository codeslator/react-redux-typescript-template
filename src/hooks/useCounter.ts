import { selectCounterState } from '../store/modules/counter/selectors';
import { useAppSelector, useAppDispatch } from './index';
import { incrementCounter, decrementCounter, incrementCounterBy } from '../store/modules/counter';

const useCounter = () => {
  const { counter } = useAppSelector(selectCounterState);
  const dispatch = useAppDispatch();

  const increment = () => {
    dispatch(incrementCounter());
  };

  const decrement = () => {
    dispatch(decrementCounter());
  }

  const incrementBy = (value: number) => {
    dispatch(incrementCounterBy(value));
  }

  return {
    counter,
    increment,
    decrement,
    incrementBy,
  };
};

export default useCounter;