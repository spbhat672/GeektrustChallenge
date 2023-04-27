// new selector to get filtered products
export const getFilteredProducts = state => {
    const { data, filteredData } = state.products;
    const { name, type } = state.filters;
    
    // if no filters applied, return all products
    if (!name && !type) {
      return data;
    }
    
    // apply filters
    const filteredProducts = filteredData.filter(product => {
      if (name && !product.name.toLowerCase().includes(name.toLowerCase())) {
        return false;
      }
      if (type && !product.type.toLowerCase().includes(type.toLowerCase())) {
        return false;
      }
      return true;
    });
    
    return filteredProducts;
  };