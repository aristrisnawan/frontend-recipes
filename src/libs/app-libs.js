
export const getAllRecipes = async (resource) => {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}`
      );
      const recipes = await response.json()
      return recipes
}
