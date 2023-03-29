/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum LANGUAGE_ENUM {
  en = "en",
  jp = "jp",
  vn = "vn",
}

export enum MEDIA_STORAGE_ENUM {
  LOCAL = "LOCAL",
}

export interface CreatePostInput {
  avatar: string;
  category: string;
  content: LocalizationContentInput;
  description: LocalizationFieldInput;
  tags?: string[] | null;
  title: LocalizationFieldInput;
}

/**
 * Return all categories
 */
export interface GetCategoriesFilter {
  name?: string | null;
}

export interface LocalizationContentInput {
  en: any;
  jp?: any | null;
  vn?: any | null;
}

export interface LocalizationFieldInput {
  en: string;
  jp?: string | null;
  vn?: string | null;
}

export interface PostsFilter {
  category?: string | null;
  lang?: LANGUAGE_ENUM | null;
  limit: number;
  offset: number;
  sort: string;
  tags?: string[] | null;
  title?: string | null;
}

export interface SignInInput {
  email: string;
  password: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
