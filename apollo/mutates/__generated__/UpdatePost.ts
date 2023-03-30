/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdatePostInput } from "./../../__generated__/serverTypes";

// ====================================================
// GraphQL mutation operation: UpdatePost
// ====================================================

export interface UpdatePost_updatePost {
  __typename: "Post";
  id: string;
}

export interface UpdatePost {
  updatePost: UpdatePost_updatePost;
}

export interface UpdatePostVariables {
  input: UpdatePostInput;
}
