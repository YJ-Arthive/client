// import { useParams } from 'react-router-dom';
import BoardHeader from '../../components/BoardHeader';

const Exhibition = () => {
  // const { exhibitionSlug } = useParams();
  // const exhibition = getExhibitionSlug(exhibitionSlug);
  return (
    <div>
      <BoardHeader text='Exhibition' />
      <div>Exhibition 페이지</div>
    </div>
  );
};

export default Exhibition;
