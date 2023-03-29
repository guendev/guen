/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MEDIA_STORAGE_ENUM } from "./../../__generated__/serverTypes";

// ====================================================
// GraphQL fragment: ImageEntity
// ====================================================

export interface ImageEntity {
  __typename: "Image";
  createdAt: number;
  height: number;
  id: string;
  mimetype: string;
  path: string;
  size: number;
  storage: MEDIA_STORAGE_ENUM;
  updatedAt: number;
  width: number;
}
