import { getState } from '../store/modules/template/selectors';
import { useAppSelector, useAppDispatch } from './index';
import { AppDispatch } from '../store/index';
import { setTemplateValue } from '../store/modules/template';


const useTemplate = () => {
  const { value } = useAppSelector(getState);
  const dispatch = useAppDispatch();

  const introduceValue = (value: number) => {
    dispatch(setTemplateValue(value));
  }


  return {
    value,
    introduceValue
  };
};

export default useTemplate;