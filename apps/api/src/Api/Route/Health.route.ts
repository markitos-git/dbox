import { Request, Response, Router } from 'express';
import { ApiAction } from '../../Context/Shared/Domain/Action/ApiAction';
import { PingAction } from '../Health/Action/PingAction';

export const register = (router: Router) => {
    const feature: ApiAction = new PingAction();
    router.get('/api/v1/health/ping', (req: Request, res: Response) =>
        feature.execute(req, res)
    );
};
