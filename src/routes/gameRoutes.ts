import { Router } from 'express';

class GameRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config():void {
        this.router.get('/', (req , res) => res.send('COMO TE VA'));
    }

}

const gameRoutes = new GameRoutes();
export default gameRoutes.router;