import EntityService from "./EntityService"

class InventoryItemService extends EntityService {
    constructor(){
        super("inventoryItem")
    }
}

export default new InventoryItemService();