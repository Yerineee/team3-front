const BASE_URL = "https://server.efubtoy3.net";

export const API = {
  GET_EVENT: `${BASE_URL}/events`,
  GET_NOVELS: `${BASE_URL}/novels`,
  GET_COMICS: `${BASE_URL}/comics`,
  GET_NOVELS_FREELIST_ING: `${BASE_URL}/novels/freeList?freeType=ing`,
  GET_NOVELS_FREELIST_FREEPASS: `${BASE_URL}/novels/freeList?freeType=freepass`,
  GET_NOVELS_FREELIST_FREETODAY: `${BASE_URL}/novels/freeList?freeType=freetoday`,
  GET_NOVELS_FREELIST_TIMEDEAL: `${BASE_URL}/novels/freeList?freeType=timedeal`,
};
