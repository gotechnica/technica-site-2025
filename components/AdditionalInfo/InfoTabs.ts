export interface InfoTab {
    index: number;
    title: string;
    content: string;
    link: string;
    color: string;
    displayed: boolean;
  }
  
  // Row 1, Columns 1-12
  const InfoTabs: InfoTab[] = [
    { index: 0, title: 'Fellowship Program', content:'The Technica Fellowship Program gives \
    rising college freshman opportunity to work on a coding project impacting \
    Technica. Fellows will gain real industry experience and impact thousands\
     of users!' , link: 'Fellows', color:'#D7316E', displayed: true },
    { index: 1, title: 'Mentors & Volunteers', content: 'Bring hackers\' ideas to \
    life by sharing your Technica knowledge or help with event operations\
     at Technica! Anyone 18 years or older and of any gender can volunteer\
      and help make Technica a success!', link: 'Mentors-Volunteers', color:'#0490BB', displayed: false },
    { index: 2, title: 'Ambassadors', content: 'Technica Campus Ambassadors \
    have the unique opportunity to help foster our community beyond\
    Technica weekend at UMD. As a representative of your school, you’ll \
    spread the word about Technica 2024 on your campus and promote inclusion \
    in STEM!', link: 'Ambassadors', color:'#7937AE', displayed: false },
    { index: 3, title: 'Travel Info', content: 'Need to travel to get to Technica? \
    We got you covered! Technica can reimburse your travel fees or arrange a bus \
     to transport eligible hackers in the United States. Head to our travel page \
     to learn more!', link: 'Travel', color:'#D6AF26', displayed: false },
  ];
  
  export const AdditionalInfoTabs: InfoTab[] = [...InfoTabs];
 