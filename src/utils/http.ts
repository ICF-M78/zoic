import { getToken } from './token';

export async function post(apiUrl: string, params: Record<string, unknown>) {
    const PROXY_URL = import.meta.env.VITE_PROXY_URL;
    const url = PROXY_URL + apiUrl;

    const ERROR_NAME = 'http方法POST请求错误';
    let token = null;
    token = getToken();

    const headers = {
        'visitor-id': 'a86bf5c1-3320-40c6-a47a-b6a14460d908',
        'visitor-name': 'zoic',
        'Content-Type': 'application/json',
        Authorization: token || 'noToken',
    };

    const options = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(params),
    };

    try {
        const res = await fetch(url, options);
        if (res.ok) {
            return res.json();
        } else {
            const errUrl = import.meta.env.BASE_URL + '/#/error';
            if (res.status === 401) {
                const errInfo = {
                    code: 401,
                    title: '未授权',
                    description: '您无权访问此资源，请登录。',
                };
                sessionStorage.setItem('errInfo', JSON.stringify(errInfo));
                window.location.href = errUrl;
                return null;
            }

            if (res.status === 403) {
                const errInfo = {
                    code: 403,
                    title: '禁止访问',
                    description: '令牌失效，您无权访问此资源。请重新登录。',
                };
                sessionStorage.setItem('errInfo', JSON.stringify(errInfo));
                window.location.href = errUrl;
                return null;
            }

            const msg = await res.text();
            const otherErr = new Error();
            otherErr.message = res.status.toString() + ' ' + msg;
            throw otherErr;
        }
    } catch (err: unknown) {
        if (err instanceof Error) {
            const _err = new Error();
            _err.name = ERROR_NAME;
            if (params.api) {
                _err.message = `请求接口 ${JSON.stringify(params, null, 2)} 失败 ${err.name} ${err.message}`;
            } else {
                _err.message = `请求 ${url} 失败 ${err.name} ${err.message}`;
            }
            console.error(_err.message);
            throw _err;
        } else {
            const _err = new Error();
            _err.name = ERROR_NAME;
            _err.message = `请求 ${url} 失败 ${err}`;
            console.error(_err.message);
            throw _err;
        }
    }
}
