/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import BoardHeader from '../../components/BoardHeader';
import Button from '../../components/Button';
import InfoList from '../../components/InfoList';
import { useState } from 'react';

const registerWrap = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

const registerForm = css`
  // border: 1px solid red;
  margin-bottom: 180px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 507px;
    border-radius: 30px;
    border: 1px solid #d9d9d9;
    margin-bottom: 32px;
    padding: 0 35px;
  }
`;

const form_title = css`
  margin: 45px;
  font-size: 17px;
`;

const form_applicant = css`
  height: 419px;
`;

const form_exhibition = css`
  height: 921px;
`;

const form_file = css`
  height: 329px;

  input {
    height: 100px;
  }
`;

const exhibitionPeriod = css`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  span {
    margin: 0 15px;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    whitespace: pre-wrap;
  }
`;

const ExhibitionRegisterUser = () => {
  const subText = (
    <>
      전시회 자료를 등록해주셔서 감사합니다.
      <br />
      등록하신 자료는 전시 등록 지원팀이 확인 후 아타이브 웹페이지에 게재됩니다.
    </>
  );

  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    phoneNumber: '',
    exhibitionTitle: '',
    gallery: '',
    address: '',
    startDate: '',
    endDate: '',
    hours: '',
    artist: '',
    homePage: '',
    entranceFee: '',
    file: '',
  });

  const {
    username,
    email,
    phoneNumber,
    exhibitionTitle,
    gallery,
    address,
    startDate,
    endDate,
    hours,
    artist,
    homePage,
    entranceFee,
    file,
  } = inputs;

  // 입렵값 상태 변경
  const handleChangeInfoInputs = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  // 폼 제출 처리
  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    // if (
    //   !(
    //   )
    // ) {
    //   alert('필수 사항을 입력해주세요.');
    //   return;
    // }

    const signData = {
      username,
      email,
      phoneNumber,
      exhibitionTitle,
      gallery,
      address,
      startDate,
      endDate,
      hours,
      artist,
      homePage,
      entranceFee,
      file,
    };

    console.log(signData);

    // 서버로 데이터 전송하는 코드 추가
    // const isSignUp = await requestSignUp(signData);
    // if (isSignUp) navigate('/mypage/register');
  };

  return (
    <div css={registerWrap}>
      <BoardHeader
        text='아타이브 전시 등록 신청'
        showHr={false}
        showText={true}
        subText={subText}
      />
      <form
        id='exhibitionRegister'
        css={registerForm}
        onSubmit={handleSubmitRegister}
      >
        <div css={form_applicant}>
          <p css={form_title}>1. 신청인 정보</p>
          <InfoList
            label={'성함*'}
            input={{
              name: 'username',
              value: username,
              onChange: handleChangeInfoInputs,
            }}
          />
          <InfoList
            label={'이메일*'}
            input={{
              name: 'email',
              value: email,
              onChange: handleChangeInfoInputs,
              placeholder: 'arthive@gmail.com',
            }}
          />
          <InfoList
            label={'휴대폰 번호*'}
            input={{
              name: 'phoneNumber',
              value: phoneNumber,
              onChange: handleChangeInfoInputs,
            }}
          />
        </div>
        <div css={form_exhibition}>
          <p css={form_title}>2. 전시 정보</p>
          <InfoList
            label={'전시명*'}
            input={{
              name: 'exhibitionTitle',
              value: exhibitionTitle,
              onChange: handleChangeInfoInputs,
            }}
          />
          <InfoList
            label={'전시 위치 (갤러리명)*'}
            input={{
              name: 'gallery',
              value: gallery,
              onChange: handleChangeInfoInputs,
            }}
          />
          <InfoList
            label={'전시 주소*'}
            input={{
              name: 'address',
              value: address,
              onChange: handleChangeInfoInputs,
            }}
            labelSub={true}
            labelSubText='*미술관, 갤러리 등 구체적인 장소의 이름과 정확한 주소를 작성해주세요.'
          />
          <section css={exhibitionPeriod}>
            <InfoList
              label={'전시 기간*'}
              input={{
                name: 'startDate',
                value: startDate,
                onChange: handleChangeInfoInputs,
                placeholder: '오픈 일',
              }}
            />
            <span> - </span>
            <InfoList
              label={'.'}
              input={{
                name: 'endDate',
                value: endDate,
                onChange: handleChangeInfoInputs,
                placeholder: '종료 일',
              }}
            />
          </section>
          <InfoList
            label={'운영 시간*'}
            input={{
              name: 'hours',
              value: hours,
              onChange: handleChangeInfoInputs,
              placeholder: '00:00 ~ 00:00',
            }}
          />
          <InfoList
            label={'작가*'}
            input={{
              name: 'artist',
              value: artist,
              onChange: handleChangeInfoInputs,
            }}
          />
          <InfoList
            label={'전시회 홈페이지'}
            input={{
              name: 'homePage',
              value: homePage,
              onChange: handleChangeInfoInputs,
            }}
          />
          <InfoList
            label={'관람료*'}
            input={{
              name: 'entranceFee',
              value: entranceFee,
              onChange: handleChangeInfoInputs,
            }}
            labelSub={true}
            labelSubText='*성인 1명, 미할인 기준의 관람료를 작성해주세요. (무료인 경우 0으로 작성)'
          />
        </div>
        <div css={form_file}>
          <p css={form_title}>3. 첨부 파일</p>
          <InfoList
            label={'전시 소개 텍스트, 이미지 파일'}
            input={{
              name: 'file',
              value: file,
              type: 'file',
              accept: '.zip',
              onChange: handleChangeInfoInputs,
            }}
            labelSub={true}
            labelSubText='*하나의 압축 파일로 첨부하거나 메일로 보내주세요. (contact@arthive.co.kr)'
          />
        </div>
        <Button name='등록하기' type='submit' form='exhibitionRegister' />
      </form>
    </div>
  );
};

export default ExhibitionRegisterUser;
