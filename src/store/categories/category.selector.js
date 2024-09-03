import { createSelector } from "reselect";

// Input selector: extracts the part of the state you're interested in
const selectCategoryReducer = (state) => state.categories;

// Output selector: uses createSelector to create a memoized selector
export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories], // Input selectors
  (
    categories // Transform function
  ) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);
