import { useDispatch, useSelector } from 'react-redux';
import { setCategoryId } from '../redux/slices/filterSlice';

function Categories() {
  const dispatch = useDispatch();
  const selectedId = useSelector((state) => state.filter.categoryId);

  const categories = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ];

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
}

export default Categories;
