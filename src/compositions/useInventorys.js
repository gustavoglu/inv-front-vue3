import { ref, onMounted } from "vue";

const KEYINVENTORYS = "listaInventorys";

export function useInventorys() {
  const inventorys = ref([]);

  onMounted(() => {
    const inventorysLocalStorage = localStorage.getItem(KEYINVENTORYS);
    if (inventorysLocalStorage === null) {
      inventorys.value = [];
    } else {
      const inventorysObject = JSON.parse(inventorysLocalStorage);
      inventorys.value = inventorysObject;
    }
  });

  function pushInventory(inventory) {
    // const userEmail = getUserParams();
    // inventory.user = userEmail.email;
    console.log(inventory);
    const inventorysLocalStorage = localStorage.getItem(KEYINVENTORYS);
    if (inventorysLocalStorage === null) {
      localStorage.setItem(KEYINVENTORYS, JSON.stringify([inventory]));
      inventorys.value = [inventory];
    } else {
      const inventorysArrayObject = JSON.parse(inventorysLocalStorage);
      inventorysArrayObject.push(inventory);
      localStorage.setItem(
        KEYINVENTORYS,
        JSON.stringify(inventorysArrayObject)
      );
      inventorys.value = inventorysArrayObject;
    }
  }

  function deleteInventory(inventoryId) {
    if (inventoryId === undefined) {
      return;
    }
    const inventory = inventorys.value.find(
      (inventory) => inventory.id === inventoryId
    );
    if (inventory === null) {
      return;
    } else {
      const inventorysLocalStorage = localStorage.getItem(KEYINVENTORYS);
      if (inventorysLocalStorage === null) {
        return;
      }
      const inventorysArray = JSON.parse(inventorysLocalStorage);
      const inventoryLocalStorage = inventorysArray.find(
        (inventory) => inventory.id === inventoryId
      );
      if (inventoryLocalStorage === null) {
        return;
      }
      const index = inventorysArray.indexOf(inventoryLocalStorage);
      inventorysArray.splice(index, 1);
      localStorage.setItem(KEYINVENTORYS, JSON.stringify(inventorysArray));
      inventorys.value = inventorysArray;
    }
  }

  return {
    inventorys,
    pushInventory,
    deleteInventory,
  };
}
