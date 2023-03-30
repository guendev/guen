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
  vi = "vi",
}

export enum MEDIA_STORAGE_ENUM {
  LOCAL = "LOCAL",
}

export interface CountPostsFilter {
  category?: string | null;
  lang?: LANGUAGE_ENUM | null;
  tags?: string[] | null;
  title?: string | null;
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
  vi?: any | null;
}

export interface LocalizationFieldInput {
  en: string;
  jp?: string | null;
  vi?: string | null;
}

export interface PostFilter {
  slug: string;
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

export interface RemovePostInput {
  id: string;
}

export interface SignInInput {
  email: string;
  password: string;
}

export interface UpdatePostInput {
  avatar?: string | null;
  category?: string | null;
  content?: LocalizationContentInput | null;
  description?: LocalizationFieldInput | null;
  id: string;
  tags?: string[] | null;
  title?: LocalizationFieldInput | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
