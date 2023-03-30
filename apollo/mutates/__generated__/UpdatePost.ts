/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdatePostInput, MEDIA_STORAGE_ENUM } from "./../../__generated__/serverTypes";

// ====================================================
// GraphQL mutation operation: UpdatePost
// ====================================================

export interface UpdatePost_updatePost_title {
  __typename: "LocalizationTitle";
  id: string | null;
  en: string;
  jp: string | null;
  vi: string | null;
}

export interface UpdatePost_updatePost_description {
  __typename: "LocalizationDescription";
  id: string | null;
  en: string;
  jp: string | null;
  vi: string | null;
}

export interface UpdatePost_updatePost_content {
  __typename: "LocalizationContent";
  id: string | null;
  en: any;
  jp: any | null;
  vi: any | null;
}

export interface UpdatePost_updatePost_avatar {
  __typename: "Image";
  id: string;
  path: string;
  storage: MEDIA_STORAGE_ENUM;
}

export interface UpdatePost_updatePost_category {
  __typename: "Category";
  id: string;
  name: string;
  slug: string;
}

export interface UpdatePost_updatePost {
  __typename: "Post";
  id: string;
  title: UpdatePost_updatePost_title;
  description: UpdatePost_updatePost_description;
  content: UpdatePost_updatePost_content;
  avatar: UpdatePost_updatePost_avatar;
  category: UpdatePost_updatePost_category;
}

export interface UpdatePost {
  updatePost: UpdatePost_updatePost;
}

export interface UpdatePostVariables {
  input: UpdatePostInput;
}
