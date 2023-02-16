export interface LoginResponse {
  status: number;
  data: {
    user: {
      _id: string;
      email: string;
      password: string;
    };
    token: string;
  };
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

export interface AboutState {
  about: AboutData[];
}

export interface AssetData {
  [x: string]: AssetData;
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

export interface AssetsAPIResponse {
  data: AssetData[];
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

export interface CollectionState {
  collection: CollectionData | Record<string, never>;
  assetSort: string[];
  assets: AssetData[];
  addAsset: {
    title: string;
    showForm: boolean;
  };
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

export interface CVData {
  _id: string;
  title: string;
  createdBy: string;
  liveStatus: boolean;
  status: string;
  deletedStatus: boolean;
  type: string;
  createdAt: string;
  updatedAt: string;
  "--v": number;
}

export interface CVState {
  cv: CVData[];
  cvOrder: DataOrderData.cvOrder;
}

export interface CVsData {
  data: CVData[];
}

export interface DataOrderData {
  _id: string;
  createdBy: string;
  cvOrder: string[];
  pressOrder: string[];
  createdAt: string;
  updatedAt: string;
  "--v": number;
}

export interface PressData {
  _id: string;
  title: string;
  createdBy: string;
  deletedStatus: boolean;
  datePublished: string;
  createdAt: string;
  updatedAt: string;
  "--v": number;
  publication: string;
  author: string;
  description: string;
  publicationLogoUrl: string;
  url: string;
}

export interface PressState {
  press: PressData[];
}

export interface PressesData {
  data: PressData[];
}

export interface UserData {
  _id: string;
  email: string;
  role: string;
  firstName: string;
  lastName: string;
  disabled: boolean;
  createdAt: string;
  updatedAt: string;
  "--v": number;
  settings: {
    theme: string;
    language: string;
    notifications: string;
  };
  pagesUpdates: {
    contactUnReadMessages: number;
    contactLastGetCall: string;
    aboutLastUpdate: string;
    cvLastUpdate: string;
    pressLastUpdate: string;
  };
}

export interface UpdatePasswordRequest {
  email: string;
  password: string;
  newPassword: string;
}

export interface AdminUserState {
  user: UserData;
  displayProfile: boolean;
  displayEmail: boolean;
  displayPassword: boolean;
  password: {
    current: string;
    new: string;
    confirm: string;
    error: {
      current: string | null;
      new: string | null;
      confirm: string | null;
      apiError: string | null;
    };
  };
}

export interface AdminDashboardState {
  collections: CollectionData[];
  collectionSort: CollectionSortData[];
  user: UserData;
}

export interface UpdateAssetData {
  (_id: string, data: {});
}
