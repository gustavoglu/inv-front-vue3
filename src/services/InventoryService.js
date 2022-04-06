import EntityService from "./EntityService"

class InventoryService extends EntityService {
    constructor(){
        super("inventory")
    }
}

export default new InventoryService();