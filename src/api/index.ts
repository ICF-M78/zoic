import { post } from '@/utils/http';

const url = '/run';

export const zoic_getQuotes_NoToken = async (args: Record<string, unknown> = {}) => {
    args.api = 'zoic_getQuotes_NoToken';
    return await post(url, args).then(res => res.data);
};
