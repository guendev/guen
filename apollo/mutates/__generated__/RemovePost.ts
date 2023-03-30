/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { RemovePostInput } from "./../../__generated__/serverTypes";

// ====================================================
// GraphQL mutation operation: RemovePost
// ====================================================

export interface RemovePost_removePost {
  __typename: "Post";
  id: string;
}

export interface RemovePost {
  removePost: RemovePost_removePost;
}

export interface RemovePostVariables {
  input: RemovePostInput;
}
