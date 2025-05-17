export const LOGO = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
export const IMAGE = "https://assets.nflxext.com/ffe/siteui/vlv3/69bec183-9cc8-49d4-8fc2-08228d3c91b4/web/IN-en-20250414-TRIFECTA-perspective_c8273fb1-8860-4ff5-bd1c-c2c4b44d5f2a_large.jpg"
export const USER_URL = "https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"

export const API_OPTIONS = {
   method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer '+ import.meta.env.VITE_TMDB_KEY
  }
  };

export const IMG_CDN_URL="https://image.tmdb.org/t/p/w500"

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "malayalam", name: "Malayalam" },
];
  

export const OPENAI_API_KEY=import.meta.env.VITE_OPENAI_API_KEY

