import axios from 'axios';
import _enviroments from './enviroments.json';

const BRANCH = 'DOC-68356-prevent-access-fedramp';
const API_URL = 'https://mate.docebosaas.com';

enum Platform {
  iOS = 'iOS',
  Android = 'Android',
}

async function main() {
  const enviroments = _enviroments.filter(
    (env: any) => env.key !== 'PLATFORM' && env.key !== 'API_URL' && env.key !== 'CLIENT_BUILD',
  );

  const generateBuildData = (platform: Platform, enviromentsEdited: any, isFixedDomain: boolean) => {
    const env = enviromentsEdited;
    if (isFixedDomain) {
      env.push({
        key: 'API_URL',
        value: API_URL,
      });
    }
    env.push({
      key: 'PLATFORM',
      value: platform,
    });
    env.push({
      key: 'CLIENT_BUILD',
      value: `${platform}-${isFixedDomain ? 'fixed' : 'open'}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
    });
    return JSON.stringify({
      hook_info: {
        type: 'bitrise',
        build_trigger_token: 'i1m6c3qatmo4sLzBzmFjSA',
      },
      build_params: {
        branch: BRANCH,
        commit_message: `script build generation - ${isFixedDomain ? 'Fixed Domain' : 'Open Domain'} ${isFixedDomain ? `- ${API_URL}` : ''}`,
        workflow_id: `JWF-${platform}-S3`,
        environments: env,
      },
    });
  };

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://app.bitrise.io/app/10cfdcb29d620f01/build/start.json',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    // fixed domain
    const fixedDomainResponseIOS = await axios.request({
      ...config,
      data: generateBuildData(Platform.iOS, enviroments, true),
    });
    console.log('fixedDomainResponseIOS', fixedDomainResponseIOS.status);
    const fixedDomainResponseAndroid = await axios.request({
      ...config,
      data: generateBuildData(Platform.Android, enviroments, true),
    });
    console.log('fixedDomainResponseAndroid', fixedDomainResponseAndroid.status);

    // open domain
    const openDomainResponseIOS = await axios.request({
      ...config,
      data: generateBuildData(Platform.iOS, enviroments, false),
    });
    console.log('openDomainResponseIOS', openDomainResponseIOS.status);
    const openDomainResponseAndroid = await axios.request({
      ...config,
      data: generateBuildData(Platform.Android, enviroments, false),
    });
    console.log('openDomainResponseAndroid', openDomainResponseAndroid.status);
  } catch (error) {
    console.log(error);
  }
}

main();
