/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const adminButton = css`
  border: 1px solid red;
  height: 40px;
`;

const AdminButton = ({ idx, boardName }) => {
  const navigate = useNavigate();

  const handleEditButtonClick = () => {
    navigate(`/admin/${boardName}-register/${idx}`);
  };

  const handleDeleteButtonClick = async () => {
    if (window.confirm('게시물을 삭제하시겠습니까?')) {
      await axios.delete(`https://api.arthive.dev/api/v1/${boardName}/${idx}`);
      alert('삭제되었습니다.');
      navigate(`/${boardName}`);
    }
  };

  return (
    <div css={adminButton}>
      <button onClick={handleEditButtonClick}>수정하기</button>
      <button onClick={handleDeleteButtonClick}>삭제하기</button>
    </div>
  );
};

export default AdminButton;
