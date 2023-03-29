/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PostsFilter } from "./../../__generated__/serverTypes";

// ====================================================
// GraphQL query operation: GetPosts
// ====================================================

export interface GetPosts_posts_title {
  __typename: "LocalizationTitle";
  en: string;
  id: string | null;
}

export interface GetPosts_posts {
  __typename: "Post";
  id: string;
  title: GetPosts_posts_title;
}

export interface GetPosts {
  posts: GetPosts_posts[];
}

export interface GetPostsVariables {
  filter: PostsFilter;
}
