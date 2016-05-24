export const Actions = {
  POPULATE_ITEMS: 'POPULATE_ITEMS'
};

function populateItems(items) {
  return {
    type: Actions.POPULATE_ITEMS,
    items
  };
}

export function fetchItems() {
  return function(dispatch) {
    const itemsObtainedFromServer = ['One', 'Two', 'Four'];
    dispatch(populateItems(itemsObtainedFromServer));
  };
}
