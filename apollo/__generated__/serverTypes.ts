/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

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

export interface SignInInput {
  email: string;
  password: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
