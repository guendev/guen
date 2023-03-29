/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreatePostInput } from "./../../__generated__/serverTypes";

// ====================================================
// GraphQL mutation operation: CreatePost
// ====================================================

export interface CreatePost_createPost_content {
  __typename: "LocalizationContent";
  id: string | null;
  en: any;
}

export interface CreatePost_createPost {
  __typename: "Post";
  id: string;
  content: CreatePost_createPost_content;
}

export interface CreatePost {
  createPost: CreatePost_createPost;
}

export interface CreatePostVariables {
  input: CreatePostInput;
}
