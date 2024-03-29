/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PostsFilter, MEDIA_STORAGE_ENUM } from "./../../__generated__/serverTypes";

// ====================================================
// GraphQL query operation: GetPosts
// ====================================================

export interface GetPosts_posts_title {
  __typename: "LocalizationTitle";
  id: string | null;
  en: string;
  jp: string | null;
  vi: string | null;
}

export interface GetPosts_posts_description {
  __typename: "LocalizationDescription";
  id: string | null;
  en: string;
  jp: string | null;
  vi: string | null;
}

export interface GetPosts_posts_content {
  __typename: "LocalizationContent";
  id: string | null;
  en: any;
  jp: any | null;
  vi: any | null;
}

export interface GetPosts_posts_avatar {
  __typename: "Image";
  id: string;
  path: string;
  storage: MEDIA_STORAGE_ENUM;
}

export interface GetPosts_posts_category {
  __typename: "Category";
  id: string;
  name: string;
  slug: string;
}

export interface GetPosts_posts {
  __typename: "Post";
  id: string;
  title: GetPosts_posts_title;
  description: GetPosts_posts_description;
  content: GetPosts_posts_content;
  avatar: GetPosts_posts_avatar;
  createdAt: number;
  views: number;
  slug: string;
  category: GetPosts_posts_category;
}

export interface GetPosts {
  posts: GetPosts_posts[];
}

export interface GetPostsVariables {
  filter: PostsFilter;
}
