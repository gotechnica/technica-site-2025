const DATES = {
  START_DATE: '2022-10-15T13:00:00Z', // 10/15, 9 AM EST
  END_DATE: '2022-10-16T21:00:00Z' // 10/16, 5 PM EST
}

export default {
  dev: {
    BACKEND_ENDPOINT: 'https://ll80jxg1r9.execute-api.us-east-1.amazonaws.com',
    ...DATES
  },
  stg: {
    BACKEND_ENDPOINT: 'https://5o4m54dteb.execute-api.us-east-1.amazonaws.com',
    ...DATES
  },
  prd: {
    BACKEND_ENDPOINT: 'https://uq19bixxn1.execute-api.us-east-1.amazonaws.com',
    ...DATES
  },
  bucket: {
    BACKEND_ENDPOINT: 'https://arfv6rkvu2.execute-api.us-east-1.amazonaws.com/signature',
    ...DATES
  }
}
// Constants we need throughout the site
export const HACKATHON_NAME = 'Technica'
export const HACKATHON_TAGLINE = 'The world\'s largest hackathon for underrepresented genders'
export const HACKATHON_DATE = 'October 26th-27th'
export const HACKATHON_IN_PERSON_LOCATION = 'The Armory at UMD'
export const HACKATHON_ONLINE_LOCATION = 'Virtual Platform'
