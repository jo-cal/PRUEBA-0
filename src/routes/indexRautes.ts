import { Router } from 'express';

import { indexControllers } from '../controllers/indexControllers';

class IndexRautes {

    public router: Router = Router();

    constructor() {
        this. config();

    }

    config(): void {
        this. router. get('/', indexControllers. index);
    }

};

const indexRautes = new IndexRautes();
export default indexRautes. router;