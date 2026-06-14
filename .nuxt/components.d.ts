
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'About': typeof import("../components/About.vue")['default']
    'Achievements': typeof import("../components/Achievements.vue")['default']
    'AdditionalInfo': typeof import("../components/AdditionalInfo/AdditionalInfo.vue")['default']
    'AmbassadorsAmbassadorCards': typeof import("../components/Ambassadors/AmbassadorCards")['default']
    'AmbassadorsAmbassadorCarousel': typeof import("../components/Ambassadors/AmbassadorCarousel.vue")['default']
    'Announcements': typeof import("../components/Announcements.vue")['default']
    'CustomButton': typeof import("../components/CustomButton.vue")['default']
    'FAQ': typeof import("../components/FAQ.vue")['default']
    'FAQButton': typeof import("../components/FAQButton.vue")['default']
    'FellowsCarousel': typeof import("../components/Fellows/Carousel.vue")['default']
    'FellowsCards': typeof import("../components/Fellows/FellowsCards")['default']
    'Footer': typeof import("../components/Footer.vue")['default']
    'Header': typeof import("../components/Header.vue")['default']
    'HeroLanding': typeof import("../components/HeroLanding.vue")['default']
    'HybridEnv': typeof import("../components/HybridEnv.vue")['default']
    'KeynoteSpeakers': typeof import("../components/KeynoteSpeakers/KeynoteSpeakers.vue")['default']
    'MainButton': typeof import("../components/MainButton.vue")['default']
    'Navbar': typeof import("../components/Navbar.vue")['default']
    'PixelButton': typeof import("../components/PixelButton.vue")['default']
    'ProfileCard': typeof import("../components/ProfileCard.vue")['default']
    'StickyButton': typeof import("../components/StickyButton.vue")['default']
    'TeamCard': typeof import("../components/TeamCard.vue")['default']
    'TeamsCarousel': typeof import("../components/TeamsCarousel.vue")['default']
    'TextSection': typeof import("../components/TextSection.vue")['default']
    'Timer': typeof import("../components/Timer.vue")['default']
    'Toggle': typeof import("../components/Toggle.vue")['default']
    'Tracks': typeof import("../components/Tracks.vue")['default']
    'TracksGates': typeof import("../components/TracksGates.vue")['default']
    'VineButton': typeof import("../components/VineButton.vue")['default']
    'WebButton': typeof import("../components/WebButton.vue")['default']
    'CheckinCheckInNavbar': typeof import("../components/checkin/CheckInNavbar.vue")['default']
    'ExpoTable': typeof import("../components/expo/ExpoTable.vue")['default']
    'ScheduleEventModal': typeof import("../components/schedule/EventModal.vue")['default']
    'Schedule': typeof import("../components/schedule/Schedule.vue")['default']
    'ScheduleEvent': typeof import("../components/schedule/event")['default']
    'SponsorsSponsorGrid': typeof import("../components/sponsors/SponsorGrid.vue")['default']
    'Sponsors': typeof import("../components/sponsors/Sponsors.vue")['default']
    'SponsorsSponsorInfo': typeof import("../components/sponsors/sponsor-info")['default']
    'TestimoniesCarousel': typeof import("../components/testimonies-carousel.vue")['default']
    'TestimonyCard': typeof import("../components/testimony-card.vue")['default']
    'TracksIconCard': typeof import("../components/tracks/IconCard.vue")['default']
    'WhatToDo': typeof import("../components/what-to-do/WhatToDo.vue")['default']
    'WhatToDoCarouselSlide': typeof import("../components/what-to-do/carousel-slide.vue")['default']
    'ProseA': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseA.vue")['default']
    'ProseBlockquote': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseBlockquote.vue")['default']
    'ProseCode': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseCode.vue")['default']
    'ProseEm': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseEm.vue")['default']
    'ProseH1': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH1.vue")['default']
    'ProseH2': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH2.vue")['default']
    'ProseH3': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH3.vue")['default']
    'ProseH4': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH4.vue")['default']
    'ProseH5': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH5.vue")['default']
    'ProseH6': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH6.vue")['default']
    'ProseHr': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseHr.vue")['default']
    'ProseImg': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseImg.vue")['default']
    'ProseLi': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseLi.vue")['default']
    'ProseOl': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseOl.vue")['default']
    'ProseP': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseP.vue")['default']
    'ProsePre': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProsePre.vue")['default']
    'ProseScript': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseScript.vue")['default']
    'ProseStrong': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseStrong.vue")['default']
    'ProseTable': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTable.vue")['default']
    'ProseTbody': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTbody.vue")['default']
    'ProseTd': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTd.vue")['default']
    'ProseTh': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTh.vue")['default']
    'ProseThead': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseThead.vue")['default']
    'ProseTr': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTr.vue")['default']
    'ProseUl': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseUl.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtTime': typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'ContentRenderer': typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue")['default']
    'MDC': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDC.vue")['default']
    'MDCCached': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCCached.vue")['default']
    'MDCRenderer': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCRenderer.vue")['default']
    'MDCSlot': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCSlot.vue")['default']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyAbout': LazyComponent<typeof import("../components/About.vue")['default']>
    'LazyAchievements': LazyComponent<typeof import("../components/Achievements.vue")['default']>
    'LazyAdditionalInfo': LazyComponent<typeof import("../components/AdditionalInfo/AdditionalInfo.vue")['default']>
    'LazyAmbassadorsAmbassadorCards': LazyComponent<typeof import("../components/Ambassadors/AmbassadorCards")['default']>
    'LazyAmbassadorsAmbassadorCarousel': LazyComponent<typeof import("../components/Ambassadors/AmbassadorCarousel.vue")['default']>
    'LazyAnnouncements': LazyComponent<typeof import("../components/Announcements.vue")['default']>
    'LazyCustomButton': LazyComponent<typeof import("../components/CustomButton.vue")['default']>
    'LazyFAQ': LazyComponent<typeof import("../components/FAQ.vue")['default']>
    'LazyFAQButton': LazyComponent<typeof import("../components/FAQButton.vue")['default']>
    'LazyFellowsCarousel': LazyComponent<typeof import("../components/Fellows/Carousel.vue")['default']>
    'LazyFellowsCards': LazyComponent<typeof import("../components/Fellows/FellowsCards")['default']>
    'LazyFooter': LazyComponent<typeof import("../components/Footer.vue")['default']>
    'LazyHeader': LazyComponent<typeof import("../components/Header.vue")['default']>
    'LazyHeroLanding': LazyComponent<typeof import("../components/HeroLanding.vue")['default']>
    'LazyHybridEnv': LazyComponent<typeof import("../components/HybridEnv.vue")['default']>
    'LazyKeynoteSpeakers': LazyComponent<typeof import("../components/KeynoteSpeakers/KeynoteSpeakers.vue")['default']>
    'LazyMainButton': LazyComponent<typeof import("../components/MainButton.vue")['default']>
    'LazyNavbar': LazyComponent<typeof import("../components/Navbar.vue")['default']>
    'LazyPixelButton': LazyComponent<typeof import("../components/PixelButton.vue")['default']>
    'LazyProfileCard': LazyComponent<typeof import("../components/ProfileCard.vue")['default']>
    'LazyStickyButton': LazyComponent<typeof import("../components/StickyButton.vue")['default']>
    'LazyTeamCard': LazyComponent<typeof import("../components/TeamCard.vue")['default']>
    'LazyTeamsCarousel': LazyComponent<typeof import("../components/TeamsCarousel.vue")['default']>
    'LazyTextSection': LazyComponent<typeof import("../components/TextSection.vue")['default']>
    'LazyTimer': LazyComponent<typeof import("../components/Timer.vue")['default']>
    'LazyToggle': LazyComponent<typeof import("../components/Toggle.vue")['default']>
    'LazyTracks': LazyComponent<typeof import("../components/Tracks.vue")['default']>
    'LazyTracksGates': LazyComponent<typeof import("../components/TracksGates.vue")['default']>
    'LazyVineButton': LazyComponent<typeof import("../components/VineButton.vue")['default']>
    'LazyWebButton': LazyComponent<typeof import("../components/WebButton.vue")['default']>
    'LazyCheckinCheckInNavbar': LazyComponent<typeof import("../components/checkin/CheckInNavbar.vue")['default']>
    'LazyExpoTable': LazyComponent<typeof import("../components/expo/ExpoTable.vue")['default']>
    'LazyScheduleEventModal': LazyComponent<typeof import("../components/schedule/EventModal.vue")['default']>
    'LazySchedule': LazyComponent<typeof import("../components/schedule/Schedule.vue")['default']>
    'LazyScheduleEvent': LazyComponent<typeof import("../components/schedule/event")['default']>
    'LazySponsorsSponsorGrid': LazyComponent<typeof import("../components/sponsors/SponsorGrid.vue")['default']>
    'LazySponsors': LazyComponent<typeof import("../components/sponsors/Sponsors.vue")['default']>
    'LazySponsorsSponsorInfo': LazyComponent<typeof import("../components/sponsors/sponsor-info")['default']>
    'LazyTestimoniesCarousel': LazyComponent<typeof import("../components/testimonies-carousel.vue")['default']>
    'LazyTestimonyCard': LazyComponent<typeof import("../components/testimony-card.vue")['default']>
    'LazyTracksIconCard': LazyComponent<typeof import("../components/tracks/IconCard.vue")['default']>
    'LazyWhatToDo': LazyComponent<typeof import("../components/what-to-do/WhatToDo.vue")['default']>
    'LazyWhatToDoCarouselSlide': LazyComponent<typeof import("../components/what-to-do/carousel-slide.vue")['default']>
    'LazyProseA': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseA.vue")['default']>
    'LazyProseBlockquote': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseBlockquote.vue")['default']>
    'LazyProseCode': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseCode.vue")['default']>
    'LazyProseEm': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseEm.vue")['default']>
    'LazyProseH1': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH1.vue")['default']>
    'LazyProseH2': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH2.vue")['default']>
    'LazyProseH3': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH3.vue")['default']>
    'LazyProseH4': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH4.vue")['default']>
    'LazyProseH5': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH5.vue")['default']>
    'LazyProseH6': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH6.vue")['default']>
    'LazyProseHr': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseHr.vue")['default']>
    'LazyProseImg': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseImg.vue")['default']>
    'LazyProseLi': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseLi.vue")['default']>
    'LazyProseOl': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseOl.vue")['default']>
    'LazyProseP': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseP.vue")['default']>
    'LazyProsePre': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProsePre.vue")['default']>
    'LazyProseScript': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseScript.vue")['default']>
    'LazyProseStrong': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseStrong.vue")['default']>
    'LazyProseTable': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTable.vue")['default']>
    'LazyProseTbody': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTbody.vue")['default']>
    'LazyProseTd': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTd.vue")['default']>
    'LazyProseTh': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTh.vue")['default']>
    'LazyProseThead': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseThead.vue")['default']>
    'LazyProseTr': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTr.vue")['default']>
    'LazyProseUl': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseUl.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtTime': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
    'LazyContentRenderer': LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue")['default']>
    'LazyMDC': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDC.vue")['default']>
    'LazyMDCCached': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCCached.vue")['default']>
    'LazyMDCRenderer': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCRenderer.vue")['default']>
    'LazyMDCSlot': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCSlot.vue")['default']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const About: typeof import("../components/About.vue")['default']
export const Achievements: typeof import("../components/Achievements.vue")['default']
export const AdditionalInfo: typeof import("../components/AdditionalInfo/AdditionalInfo.vue")['default']
export const AmbassadorsAmbassadorCards: typeof import("../components/Ambassadors/AmbassadorCards")['default']
export const AmbassadorsAmbassadorCarousel: typeof import("../components/Ambassadors/AmbassadorCarousel.vue")['default']
export const Announcements: typeof import("../components/Announcements.vue")['default']
export const CustomButton: typeof import("../components/CustomButton.vue")['default']
export const FAQ: typeof import("../components/FAQ.vue")['default']
export const FAQButton: typeof import("../components/FAQButton.vue")['default']
export const FellowsCarousel: typeof import("../components/Fellows/Carousel.vue")['default']
export const FellowsCards: typeof import("../components/Fellows/FellowsCards")['default']
export const Footer: typeof import("../components/Footer.vue")['default']
export const Header: typeof import("../components/Header.vue")['default']
export const HeroLanding: typeof import("../components/HeroLanding.vue")['default']
export const HybridEnv: typeof import("../components/HybridEnv.vue")['default']
export const KeynoteSpeakers: typeof import("../components/KeynoteSpeakers/KeynoteSpeakers.vue")['default']
export const MainButton: typeof import("../components/MainButton.vue")['default']
export const Navbar: typeof import("../components/Navbar.vue")['default']
export const PixelButton: typeof import("../components/PixelButton.vue")['default']
export const ProfileCard: typeof import("../components/ProfileCard.vue")['default']
export const StickyButton: typeof import("../components/StickyButton.vue")['default']
export const TeamCard: typeof import("../components/TeamCard.vue")['default']
export const TeamsCarousel: typeof import("../components/TeamsCarousel.vue")['default']
export const TextSection: typeof import("../components/TextSection.vue")['default']
export const Timer: typeof import("../components/Timer.vue")['default']
export const Toggle: typeof import("../components/Toggle.vue")['default']
export const Tracks: typeof import("../components/Tracks.vue")['default']
export const TracksGates: typeof import("../components/TracksGates.vue")['default']
export const VineButton: typeof import("../components/VineButton.vue")['default']
export const WebButton: typeof import("../components/WebButton.vue")['default']
export const CheckinCheckInNavbar: typeof import("../components/checkin/CheckInNavbar.vue")['default']
export const ExpoTable: typeof import("../components/expo/ExpoTable.vue")['default']
export const ScheduleEventModal: typeof import("../components/schedule/EventModal.vue")['default']
export const Schedule: typeof import("../components/schedule/Schedule.vue")['default']
export const ScheduleEvent: typeof import("../components/schedule/event")['default']
export const SponsorsSponsorGrid: typeof import("../components/sponsors/SponsorGrid.vue")['default']
export const Sponsors: typeof import("../components/sponsors/Sponsors.vue")['default']
export const SponsorsSponsorInfo: typeof import("../components/sponsors/sponsor-info")['default']
export const TestimoniesCarousel: typeof import("../components/testimonies-carousel.vue")['default']
export const TestimonyCard: typeof import("../components/testimony-card.vue")['default']
export const TracksIconCard: typeof import("../components/tracks/IconCard.vue")['default']
export const WhatToDo: typeof import("../components/what-to-do/WhatToDo.vue")['default']
export const WhatToDoCarouselSlide: typeof import("../components/what-to-do/carousel-slide.vue")['default']
export const ProseA: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseA.vue")['default']
export const ProseBlockquote: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseBlockquote.vue")['default']
export const ProseCode: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseCode.vue")['default']
export const ProseEm: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseEm.vue")['default']
export const ProseH1: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH1.vue")['default']
export const ProseH2: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH2.vue")['default']
export const ProseH3: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH3.vue")['default']
export const ProseH4: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH4.vue")['default']
export const ProseH5: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH5.vue")['default']
export const ProseH6: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH6.vue")['default']
export const ProseHr: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseHr.vue")['default']
export const ProseImg: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseImg.vue")['default']
export const ProseLi: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseLi.vue")['default']
export const ProseOl: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseOl.vue")['default']
export const ProseP: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseP.vue")['default']
export const ProsePre: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProsePre.vue")['default']
export const ProseScript: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseScript.vue")['default']
export const ProseStrong: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseStrong.vue")['default']
export const ProseTable: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTable.vue")['default']
export const ProseTbody: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTbody.vue")['default']
export const ProseTd: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTd.vue")['default']
export const ProseTh: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTh.vue")['default']
export const ProseThead: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseThead.vue")['default']
export const ProseTr: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTr.vue")['default']
export const ProseUl: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseUl.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const ContentRenderer: typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue")['default']
export const MDC: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDC.vue")['default']
export const MDCCached: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCCached.vue")['default']
export const MDCRenderer: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCRenderer.vue")['default']
export const MDCSlot: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCSlot.vue")['default']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyAbout: LazyComponent<typeof import("../components/About.vue")['default']>
export const LazyAchievements: LazyComponent<typeof import("../components/Achievements.vue")['default']>
export const LazyAdditionalInfo: LazyComponent<typeof import("../components/AdditionalInfo/AdditionalInfo.vue")['default']>
export const LazyAmbassadorsAmbassadorCards: LazyComponent<typeof import("../components/Ambassadors/AmbassadorCards")['default']>
export const LazyAmbassadorsAmbassadorCarousel: LazyComponent<typeof import("../components/Ambassadors/AmbassadorCarousel.vue")['default']>
export const LazyAnnouncements: LazyComponent<typeof import("../components/Announcements.vue")['default']>
export const LazyCustomButton: LazyComponent<typeof import("../components/CustomButton.vue")['default']>
export const LazyFAQ: LazyComponent<typeof import("../components/FAQ.vue")['default']>
export const LazyFAQButton: LazyComponent<typeof import("../components/FAQButton.vue")['default']>
export const LazyFellowsCarousel: LazyComponent<typeof import("../components/Fellows/Carousel.vue")['default']>
export const LazyFellowsCards: LazyComponent<typeof import("../components/Fellows/FellowsCards")['default']>
export const LazyFooter: LazyComponent<typeof import("../components/Footer.vue")['default']>
export const LazyHeader: LazyComponent<typeof import("../components/Header.vue")['default']>
export const LazyHeroLanding: LazyComponent<typeof import("../components/HeroLanding.vue")['default']>
export const LazyHybridEnv: LazyComponent<typeof import("../components/HybridEnv.vue")['default']>
export const LazyKeynoteSpeakers: LazyComponent<typeof import("../components/KeynoteSpeakers/KeynoteSpeakers.vue")['default']>
export const LazyMainButton: LazyComponent<typeof import("../components/MainButton.vue")['default']>
export const LazyNavbar: LazyComponent<typeof import("../components/Navbar.vue")['default']>
export const LazyPixelButton: LazyComponent<typeof import("../components/PixelButton.vue")['default']>
export const LazyProfileCard: LazyComponent<typeof import("../components/ProfileCard.vue")['default']>
export const LazyStickyButton: LazyComponent<typeof import("../components/StickyButton.vue")['default']>
export const LazyTeamCard: LazyComponent<typeof import("../components/TeamCard.vue")['default']>
export const LazyTeamsCarousel: LazyComponent<typeof import("../components/TeamsCarousel.vue")['default']>
export const LazyTextSection: LazyComponent<typeof import("../components/TextSection.vue")['default']>
export const LazyTimer: LazyComponent<typeof import("../components/Timer.vue")['default']>
export const LazyToggle: LazyComponent<typeof import("../components/Toggle.vue")['default']>
export const LazyTracks: LazyComponent<typeof import("../components/Tracks.vue")['default']>
export const LazyTracksGates: LazyComponent<typeof import("../components/TracksGates.vue")['default']>
export const LazyVineButton: LazyComponent<typeof import("../components/VineButton.vue")['default']>
export const LazyWebButton: LazyComponent<typeof import("../components/WebButton.vue")['default']>
export const LazyCheckinCheckInNavbar: LazyComponent<typeof import("../components/checkin/CheckInNavbar.vue")['default']>
export const LazyExpoTable: LazyComponent<typeof import("../components/expo/ExpoTable.vue")['default']>
export const LazyScheduleEventModal: LazyComponent<typeof import("../components/schedule/EventModal.vue")['default']>
export const LazySchedule: LazyComponent<typeof import("../components/schedule/Schedule.vue")['default']>
export const LazyScheduleEvent: LazyComponent<typeof import("../components/schedule/event")['default']>
export const LazySponsorsSponsorGrid: LazyComponent<typeof import("../components/sponsors/SponsorGrid.vue")['default']>
export const LazySponsors: LazyComponent<typeof import("../components/sponsors/Sponsors.vue")['default']>
export const LazySponsorsSponsorInfo: LazyComponent<typeof import("../components/sponsors/sponsor-info")['default']>
export const LazyTestimoniesCarousel: LazyComponent<typeof import("../components/testimonies-carousel.vue")['default']>
export const LazyTestimonyCard: LazyComponent<typeof import("../components/testimony-card.vue")['default']>
export const LazyTracksIconCard: LazyComponent<typeof import("../components/tracks/IconCard.vue")['default']>
export const LazyWhatToDo: LazyComponent<typeof import("../components/what-to-do/WhatToDo.vue")['default']>
export const LazyWhatToDoCarouselSlide: LazyComponent<typeof import("../components/what-to-do/carousel-slide.vue")['default']>
export const LazyProseA: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseA.vue")['default']>
export const LazyProseBlockquote: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseBlockquote.vue")['default']>
export const LazyProseCode: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseCode.vue")['default']>
export const LazyProseEm: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseEm.vue")['default']>
export const LazyProseH1: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH1.vue")['default']>
export const LazyProseH2: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH2.vue")['default']>
export const LazyProseH3: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH3.vue")['default']>
export const LazyProseH4: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH4.vue")['default']>
export const LazyProseH5: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH5.vue")['default']>
export const LazyProseH6: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH6.vue")['default']>
export const LazyProseHr: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseHr.vue")['default']>
export const LazyProseImg: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseImg.vue")['default']>
export const LazyProseLi: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseLi.vue")['default']>
export const LazyProseOl: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseOl.vue")['default']>
export const LazyProseP: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseP.vue")['default']>
export const LazyProsePre: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProsePre.vue")['default']>
export const LazyProseScript: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseScript.vue")['default']>
export const LazyProseStrong: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseStrong.vue")['default']>
export const LazyProseTable: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTable.vue")['default']>
export const LazyProseTbody: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTbody.vue")['default']>
export const LazyProseTd: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTd.vue")['default']>
export const LazyProseTh: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTh.vue")['default']>
export const LazyProseThead: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseThead.vue")['default']>
export const LazyProseTr: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTr.vue")['default']>
export const LazyProseUl: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseUl.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyContentRenderer: LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue")['default']>
export const LazyMDC: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDC.vue")['default']>
export const LazyMDCCached: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCCached.vue")['default']>
export const LazyMDCRenderer: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCRenderer.vue")['default']>
export const LazyMDCSlot: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCSlot.vue")['default']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>

export const componentNames: string[]
