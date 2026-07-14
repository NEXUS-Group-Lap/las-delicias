export type Lang = "en" | "es";

export type ThreeCol = { tag: string; name: string; copy: string };
export type Stat = { n: string; l: string };
export type Block = { n: string; h: string; p: string };

export type Dictionary = {
  meta: {
    home: { title: string; description: string };
    menu: { title: string; description: string };
    bakery: { title: string; description: string };
    delivery: { title: string; description: string };
    catering: { title: string; description: string };
    gallery: { title: string; description: string };
    contact: { title: string; description: string };
  };
  nav: {
    home: string;
    menu: string;
    bakery: string;
    delivery: string;
    catering: string;
    gallery: string;
    contact: string;
  };
  header: {
    callNow: string;
    visit: string;
    openMenu: string;
    closeMenu: string;
    langSwitchLabel: string;
    langSwitchTo: string;
  };
  footer: {
    hoursTitle: string;
    menuTitle: string;
    followTitle: string;
    fullMenu: string;
    catering: string;
    deliveryRoutes: string;
    contact: string;
    credit: string;
  };
  common: {
    callNow: string;
    getDirections: string;
    viewMenu: string;
    orderCatering: string;
    emailUs: string;
  };
  home: {
    heroKicker: string;
    heroHeading: string;
    heroHeadingAccent: string;
    heroSub: string;
    hoursNote: string;
    ctaDelivery: string;
    featuredKicker: string;
    featuredHeading: string;
    featuredHeadingAccent: string;
    menuInvite: string;
    viewFullMenu: string;
    bakeryKicker: string;
    bakeryHeading: string;
    bakeryHeadingAccent: string;
    bakeryBody: string;
    seeBakery: string;
    differenceKicker: string;
    differenceHeading: string;
    differenceHeadingAccent: string;
    differenceCols: ThreeCol[];
    deliveryKicker: string;
    deliveryHeading: string;
    deliveryHeadingAccent: string;
    deliveryBody: string;
    seeCities: string;
    cateringKicker: string;
    cateringHeading: string;
    cateringHeadingAccent: string;
    cateringBody: string;
    orderCateringLink: string;
    visitHeading: string;
  };
  menuPage: {
    kicker: string;
    heading: string;
    headingAccent: string;
    sub: string;
    pricesNote: string;
    jumpNavLabel: string;
    bottomHeading: string;
    bottomHeadingAccent: string;
  };
  bakery: {
    kicker: string;
    heading: string;
    headingAccent: string;
    intro: string;
    section2Kicker: string;
    section2Heading: string;
    section2Body: string;
    blocksKicker: string;
    blocks: Block[];
    specialtyKicker: string;
    specialtyHeading: string;
    specialtyHeadingAccent: string;
    specialtyBody: string;
    cakesKicker: string;
    cakesHeading: string;
    cakesHeadingAccent: string;
    cakesBody: string;
    stats: Stat[];
    endingHeading: string;
  };
  delivery: {
    kicker: string;
    heading: string;
    headingAccent: string;
    intro: string;
    calloutStrong: string;
    citiesTitle: string;
    mapTitle: string;
    mapBakeryLabel: string;
    mapStopNote: string;
    endingHeading: string;
    endingBody: string;
    ctaConfirm: string;
  };
  catering: {
    kicker: string;
    heading: string;
    headingAccent: string;
    intro: string;
    occasionsTitle: string;
    occasions: { name: string }[];
    endingHeading: string;
    endingBody: string;
  };
  gallery: {
    kicker: string;
    heading: string;
    headingAccent: string;
    intro: string;
    items: string[];
  };
  contact: {
    kicker: string;
    heading: string;
    headingAccent: string;
    addressTitle: string;
    phoneTitle: string;
    emailTitle: string;
    followTitle: string;
    hoursTitle: string;
    quickActionsTitle: string;
  };
};
