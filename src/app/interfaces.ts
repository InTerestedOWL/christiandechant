export interface ISocial {
  name: string,
  icon: string,
  url: string,
  classAttribute: string
}

export interface IHeaderLink {
  href: string,
  title: string,
}

export interface ITechnology {
  icon: string,
  name: string,
}

export interface IExperience {
  imageSrc: string,
  dateFrom: string,
  dateTill: string,
  title: string,
  description: string,
  classAttribute: string,
  margin: number
}

export interface IContactBox {
  title: string,
  icon: string,
  text: string,
}

export interface IMessage {
  name: string,
  email: string;
  sendTo?: string;
  text: string;
}

export interface ISkill {
  name: string,
  percentage: number,
  intro?: string,
  description: string,
}

export interface IVoluntaryWork {
  imageSrc: string,
  dateFrom: string,
  dateTill: string,
  title: string,
  description: string,
  backTitle?: string,
  backDescription?: string,
  backImages?: string[],
}

export interface IPortfolioItem {
  id: string,
  image: string,
  title: string,
  intro: string,
  description?: string,
  link?: string,
  isExternal?: boolean,
}

export interface IAiConsultingTrack {
  audience: string,
  icon: string,
  title: string,
  description: string,
  features: string[],
}

export interface IWayVentureFeature {
  icon: string,
  title: string,
  description: string,
  badge?: string,
}

export interface IWayVentureUpcoming {
  icon: string,
  title: string,
}

export interface IWayVentureFaq {
  question: string,
  answer: string,
}