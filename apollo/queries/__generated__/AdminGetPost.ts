/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PostFilter, MEDIA_STORAGE_ENUM } from "./../../__generated__/serverTypes";

// ====================================================
// GraphQL query operation: AdminGetPost
// ====================================================

export interface AdminGetPost_post_title {
  __typename: "LocalizationTitle";
  id: string | null;
  en: string;
  jp: string | null;
  vn: string | null;
}

export interface AdminGetPost_post_description {
  __typename: "LocalizationDescription";
  id: string | null;
  en: string;
  jp: string | null;
  vn: string | null;
}

export interface AdminGetPost_post_content {
  __typename: "LocalizationContent";
  id: string | null;
  en: any;
  jp: any | null;
  vn: any | null;
}

export interface AdminGetPost_post_avatar {
  __typename: "Image";
  id: string;
  path: string;
  storage: MEDIA_STORAGE_ENUM;
}

export interface AdminGetPost_post_category {
  __typename: "Category";
  id: string;
  name: string;
  slug: string;
}

export interface AdminGetPost_post {
  __typename: "Post";
  id: string;
  title: AdminGetPost_post_title;
  description: AdminGetPost_post_description;
  content: AdminGetPost_post_content;
  avatar: AdminGetPost_post_avatar;
  category: AdminGetPost_post_category;
}

export interface AdminGetPost {
  post: AdminGetPost_post;
}

export interface AdminGetPostVariables {
  filter: PostFilter;
}
