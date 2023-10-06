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

// function filterByKeyword(items, keyword) {
//   const lowered = keyword.toLowerCase();
//   return items.filter(({ title }) => title.toLowerCase().includes(lowered));
// }

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

// 디테일 페이지 Slug
export function getExhibitionBySlug(exhibitionSlug) {
  return exhibitions.find((exhibition) => exhibition.slug === exhibitionSlug);
}

export function getArtBySlug(artSlug) {
  return arts.find((art) => art.slug === artSlug);
}

export function getArtistBySlug(artistSlug) {
  return artists.find((artist) => artist.slug === artistSlug);
}

export function getGalleryBySlug(gallerySlug) {
  return galleries.find((gallery) => gallery.slug === gallerySlug);
}
