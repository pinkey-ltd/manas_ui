import { APISchema } from './type';
import { createRequestClient } from './request';

interface UserAPISchema extends APISchema {
    getUser: {
        request: {
            id: number;
        };
        response: {
            avatar: string;
            id: number;
            name: string;
        };
    };

    createUser: {
        request: {
            avatar: string;
            name: string;
        };
        response: {
            avatar: string;
            id: number;
            name: string;
        };
    },
}

const api = createRequestClient<UserAPISchema>({
    baseURL: '',
    apis: {
        getUser: 'GET api/user/:id',
        createUser: 'POST api/user',
    }
});