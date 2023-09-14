const MyRegister = () => {
  return <div>MyInfo 페이지에 들어가는 전시 등록 신청 내역 컴포넌트</div>;
};

function MyInfo() {
  return (
    <div>
      회원정보 페이지 (회원정보수정, 전시등록신청내역)
      <MyRegister />
    </div>
  );
}
export default MyInfo;
