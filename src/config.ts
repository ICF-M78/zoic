import packageJson from '../package.json';

export default {
    baseUrl: `/${packageJson.name}`,
    sysNameEN: packageJson.sysNameEN,
    sysNameCN: packageJson.sysNameCN,
    versionId: packageJson.version,
};
