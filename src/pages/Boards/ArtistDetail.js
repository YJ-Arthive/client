import BoardDetail from '../../components/BoardDetail';
import { Navigate, useParams } from 'react-router-dom';
import { getArtistById } from '../../api/index';

const ArtistDetail = () => {
  const { artistId } = useParams();
  const artist = getArtistById(artistId);
  console.log(artist);

  if (!artist) {
    return <Navigate to='/artist' />;
  }

  return (
    <div>
      <BoardDetail
        text='Artist'
        src={artist.posterUrl}
        title={artist.artistName}
        subTitle={artist.field}
        description={artist.country}
      />
    </div>
  );
};

export default ArtistDetail;
