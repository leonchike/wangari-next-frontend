export interface LoginResponse {
  status: number;
  data: {
    user: {
      _id: string;
      email: string;
      password: string;
    },
    token: string;
  }
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface ContactData {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
  deletedStatus: boolean;
  dateCreatedManual: string;
  createdAt: string;
  updatedAt: string;
  "--v": number;
}

export interface ContactState {
  messages: ContactData[];
}

export interface AboutData {
  _id: string;
  bio: string;
  profileURL: string;
  twitterHandle: string;
  twitterURL: string;
  createdBy: string;
  liveStatus: boolean;
  createdAt: string;
  updatedAt: string;
  "--v": number;
  profileURLWebP500w: string;
  profileURLWebPOriginalSize: string;
  instagramHandle: string;
}

export interface AssetData {
  _id: string;
  title: string;
  story: string;
  yearProduced: string;
  widthInInches: number;
  heightInInches: number;
  createdBy: string;
  collectionRef: string;
  newStatus: boolean;
  liveStatus: boolean;
  deletedStatus: boolean;
  notes: string;
  dateCreatedManual: string;
  dateLive: string;
  dateDeleted: string;
  createdAt: string;
  updatedAt: string;
  "--v": number;
  WebP500wPublicURL: string;
  WebPOriginalSizePublicURL: string;
  assetURL: string;
  medium: string;
}

export interface CollectionData {
  _id: string;
  name: string;
  createdBy: string;
  newStatus: boolean;
  liveStatus: boolean;
  deletedStatus: boolean;
  notes: string;
  numberOfWorks: number;
  assetSort: string[];
  dateCreatedManual: string;
  dateLive: string;
  dateDeleted: string;
  createdAt: string;
  updatedAt: string;
  "--v": number;
}

export interface CollectionsData {
  data: CollectionData[];
}

export interface CollectionSortData {
  _id: string;
  createdBy: string;
  collections: string[];
  createdAt: string;
  updatedAt: string;
  "--v": number;
}