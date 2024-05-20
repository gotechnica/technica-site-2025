export default defineNuxtRouteMiddleware((to, from) => {

    const redirects: any = {
          '/google': { redirect: 'https://google.com' },
          '/ambassadorapp': { redirect: 'https://docs.google.com/forms/u/2/d/e/1FAIpQLScXSc99cNSQ6Wff--DAVqnrjAy__hQjG4XOw_hv6RLAyJDW6w/viewform?usp=send_form'},
          '/annaika': { redirect: 'https://umd.zoom.us/j/8531596239'},
          '/ashlee': { redirect: 'https://umd.zoom.us/j/5169306634'},
          '/design-request': { redirect: 'https://docs.google.com/forms/d/13sOobyEpXUmaUsEMBkGU6hpJXCijA1iS65zTcn_6Wxw/viewform?edit_requested=true#settings'},
          '/discord': { redirect: 'https://discord.gg/8fup4XfcC9'},
          '/eunha': { redirect: 'https://umd.zoom.us/j/6577570407'},
          '/event-rsvp': { redirect: 'https://forms.gle/57kM9JfTxGQov4YU9'},
          '/event': { redirect: 'https://forms.gle/Ge89PhbCPVpxncub7'},
          '/github': { redirect: 'https://github.com/gotechnica'},
          '/interest': { redirect: 'https://docs.google.com/forms/d/e/1FAIpQLSf559hb_ZIqGQZ3Mto7g8CJy9OfQm-k38edwgatbbTMD9hl9Q/viewform'},
          '/interested': { redirect: 'https://docs.google.com/forms/d/e/1FAIpQLScGtXnNbslbaFOtU5vL3fyF1uVNGchrZ5Ligjh5N8gINJMzhA/viewform'},
          '/join-network': { redirect: 'https://airtable.com/shr21PLqrOlKYzFCV'},
          '/joy': { redirect: 'https://umd.zoom.us/j/6998986000'},
          '/kaylee': { redirect: 'https://umd.zoom.us/j/3087504254'},
          '/newsletter': { redirect: 'https://docs.google.com/forms/u/7/d/e/1FAIpQLSf6Vc5oSxzd01mod5etvXKPBzZh547adpa4qE2DYxuF5x4jkQ/viewform?usp=sf_link'},
          '/report': { redirect: 'https://gotechnica.org/2022AnnualReport.pdf'},
          '/sydney': { redirect: 'https://umd.zoom.us/j/3866095591'},
          '/technibereal': { redirect: 'https://docs.google.com/spreadsheets/u/2/d/e/2PACX-1vS_U5xwCDgQhZ8i8Di45SUwpSMEBm4siBwnOEt7XLdIeuLL_v6mocPMAFh5flmScqhOGo0cewpP8jQb/pubhtml?gid=1913435706&single=true'},
          '/underrep-panel-rsvp': { redirect: 'https://forms.gle/rAQ7WC7DRsoqVwwe6'},
          '/underrep-panel-zoom': { redirect: 'https://umd.zoom.us/j/95114917521'},
          '/workshops': { redirect: 'https://forms.gle/S9dA5RYXWC8rV3zK7'},
          '/tabling': {redirect:'https://docs.google.com/spreadsheets/d/1uR0lJKtZ6m7ah94pzvYkM93ra010Y4vq8ROHSTmqQaA/edit?usp=sharing'},
          '/push': {redirect:'https://docs.google.com/spreadsheets/d/1xBrI-kyq7JdBasiYyT3YKUMC_x1ldiDc54j1iVNnuE8/edit#gid=0'},
          '/techconnect': {redirect: 'https://forms.gle/1m8JvwQ6LGZ5fLFa7'},
          '/volunteerregistration': {redirect: 'https://docs.google.com/forms/d/e/1FAIpQLSd_w3VE7KB0Fo9dFD4qBeyRAijRqjpL6LWYtXaT51BTaEPKeA/viewform'},
          '/flyer': {redirect: 'https://docs.google.com/document/d/1-aEkqWJIZUbkSKSyEsyeIn_nTJsSEsB38sh-Ax_8LpU/edit#heading=h.w2ng2ccol75c'},
          '/biglittleapp': {redirect: 'https://forms.gle/VERyQvpXHgfkVZx76'},
          '/workshop1': {redirect: 'https://umd.zoom.us/j/98434737312#success'},
          '/workshop2': {redirect: 'https://umd.zoom.us/j/7329314999#success'},
          '/workshop3': {redirect: 'https://umd.zoom.us/j/6900160738#success'},
          '/workshop4': {redirect: 'https://umd.zoom.us/j/95627654061#success'},
          '/virtuala': {redirect: 'https://umd.zoom.us/j/96804491249#success'},
          '/virtualb': {redirect: 'https://umd.zoom.us/j/5165569184#success'},
          '/virtualc': {redirect: 'https://umd.zoom.us/j/2393475431#success'},
          '/virtuald': {redirect: 'https://umd.zoom.us/j/4676517781#success'},
          '/virtuale': {redirect: 'https://umd.zoom.us/j/99224648948#success'},
          '/slack': {redirect: 'https://join.slack.com/t/technica2023/shared_invite/zt-25geilhhh-3hUZYLLyO0GsJPIA6Br5qw'},
          '/hacker-guide': {redirect: 'https://platform-assets-prd.s3.amazonaws.com/Hacker+Guide.pdf'},
          '/incident': {redirect: 'https://docs.google.com/forms/d/e/1FAIpQLSe9poAKvb9P9ND9bnm9RVyjxOcU4i69KxZ6GA6oTrePXOfuSQ/viewform'}}

    const redir = redirects[to.path] 
 
    if (redir) {
      navigateTo(redir.redirect, { external: true, redirectCode: 301})
    }
  })