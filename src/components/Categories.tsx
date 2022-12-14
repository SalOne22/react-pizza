import { useDispatch, useSelector } from 'react-redux';
import { setCategoryId } from '../redux/slices/filterSlice';
import { FC, memo } from 'react';
import { RootState } from '../redux/store';

const categories = [
  'Все',
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые',
];

export const Categories: FC = memo(() => {
  const dispatch = useDispatch();
  const selectedId = useSelector((state: RootState) => state.filter.categoryId);

  return (
    <div className="categories">
      <ul>
        {categories.map((selectedCategory, index) => (
          <li
            key={index}
            onClick={() => dispatch(setCategoryId(index))}
            className={selectedId === index ? 'active' : ''}
          >
            {selectedCategory}
          </li>
        ))}
      </ul>
    </div>
  );
});
