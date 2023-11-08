import React, { useEffect } from 'react';

const { kakao } = window;

const KaKaoMap = ({ address }) => {
  useEffect(() => {
    const container = document.getElementById('map'); // 지도를 담을 영역의 DOM 레퍼런스
    // const geocoder = new kakao.maps.services.Geocoder();
    var geocoder = new kakao.maps.services.Geocoder();

    // KaKao Geocoder를 사용하여 주소를 좌표로 변환!
    geocoder.addressSearch(address, function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        const latitude = result[0].y; // 위도
        const longitude = result[0].x; // 경도

        console.log(result);

        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new kakao.maps.LatLng(latitude, longitude), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };
        const map = new kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

        // 마커가 표시될 위치
        var markerPosition = new kakao.maps.LatLng(latitude, longitude);
        // 마커 생성
        var marker = new kakao.maps.Marker({
          position: markerPosition,
        });
        // 마커가 지도 위에 표시되도록 설정
        marker.setMap(map);
      }
    });
  }, [address]);

  return <div id='map' style={{ width: '700px', height: '400px' }}></div>;
};

export default KaKaoMap;
