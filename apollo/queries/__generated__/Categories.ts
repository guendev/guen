/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { GetCategoriesFilter } from "./../../__generated__/serverTypes";

// ====================================================
// GraphQL query operation: Categories
// ====================================================

export interface Categories_categories {
  __typename: "Category";
  id: string;
  name: string;
}

export interface Categories {
  categories: Categories_categories[];
}

export interface CategoriesVariables {
  filter: GetCategoriesFilter;
}
