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
{ index: 0, title: 'Fellowship', content:'' , link: 'fellows', color:'#FFFFFF', displayed: true },
{ index: 1, title: 'Ambassadors', content: '', link: 'ambassadors', color:'#FFFFFF', displayed: false },
{ index: 2, title: 'Mentors and Volunteers', content: '', link: 'mentors', color:'#FFFFFF', displayed: false },
{ index: 3, title: 'Travel Info', content: '', link: 'travel', color:'#FFFFFF', displayed: false },
];

export const AdditionalInfoTabs: InfoTab[] = [...InfoTabs];