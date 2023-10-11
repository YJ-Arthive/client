import exhibitionMock from './exhibition-mock.json';
import artMock from './art-mock.json';
import artistMock from './artist-mock.json';
import galleryMock from './gallery-mock.json';
const { exhibitions } = exhibitionMock;
const { arts } = artMock;
const { artists } = artistMock;
const { galleries } = galleryMock;

function filterByKeyword(items, keyword) {
  const lowered = keyword.toLowerCase();
  const fields = [
    'title',
    'gallery',
    'galleryName',
    'location',
    'artist',
    'artistName',
    'artistEn',
    'address',
    'field',
    'country',
  ];

  return items.filter((item) =>
    fields.some((field) => item[field]?.toLowerCase().includes(lowered))
  );
}

// 각 게시판 아이템 리스트 가져오기
export function getExhibitions(keyword) {
  if (!keyword) return exhibitions;
  return filterByKeyword(exhibitions, keyword);
}

export function getArts(keyword) {
  if (!keyword) return arts;
  return filterByKeyword(arts, keyword);
}

export function getArtists(keyword) {
  if (!keyword) return artists;
  return filterByKeyword(artists, keyword);
}

export function getGalleries(keyword) {
  if (!keyword) return galleries;
  return filterByKeyword(galleries, keyword);
}

// 디테일 페이지로 이동
export function getExhibitionById(exhibitionId) {
  return exhibitions.find((exhibition) => exhibition.id === exhibitionId);
}

export function getArtById(artId) {
  return arts.find((art) => art.id === artId);
}

export function getArtistById(artistId) {
  return artists.find((artist) => artist.id === artistId);
}

export function getGalleryById(galleryId) {
  return galleries.find((gallery) => gallery.id === galleryId);
}
