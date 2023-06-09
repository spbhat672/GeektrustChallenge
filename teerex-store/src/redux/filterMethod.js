// new selector to get filtered products
export const getFilteredProducts = state => {
    const products = state.products.data;
    const filters = state.filters;
    
    if (!products) {
      return [];
    }

    if(filters.searchString && filters.searchString.length>0){
      const searchResult = products.filter((product) => {
        const name = product.name.toLowerCase();
        const color = product.color.toLowerCase();
        const type = product.type.toLowerCase();
        const search = filters.searchString.toLowerCase();
        
        return (
          name.includes(search) ||
          color.includes(search) ||
          type.includes(search)
        );
      });

      return searchResult;
    }    
  
    const filterByColor = (product) =>
      filters.color.length === 0 || filters.color.includes(product.color);
    const filterByGender = (product) =>
      filters.gender.length === 0 || filters.gender.includes(product.gender);
    const filterByPrice = (product) =>
      filters.price.length === 0 ||
      filters.price.some((range) =>
        range.from === undefined
          ? product.price >= range.to
          : range.to === undefined
          ? product.price >= range.from
          : product.price >= range.from && product.price <= range.to
      );
    const filterByType = (product) =>
      filters.type.length === 0 || filters.type.includes(product.type);
  
    return products.filter(
      (product) =>
        filterByColor(product) &&
        filterByGender(product) &&
        filterByPrice(product) &&
        filterByType(product)
    );
  };