// import { useParams } from 'react-router-dom';
import BoardHeader from '../../components/BoardHeader';

const Exhibition = () => {
  // const { exhibitionSlug } = useParams();
  // const exhibition = getExhibitionSlug(exhibitionSlug);
  return (
    <div>
      <BoardHeader text='Exhibition' />
      <div>버튼 컨테이너</div>
      <div>Exhibition 페이지</div>
    </div>
  );
};

export default Exhibition;
