import { Request, Response } from 'express';

class GameControllers {

    public (req:Request, res:Response) {
        res.send('COMO TE VAAA')
    }

}

const gameControllers = new GameControllers;
export default gameControllers;
