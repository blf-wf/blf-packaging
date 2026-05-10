const https = require('https');
const sha3_224 = require('js-sha3').sha3_224;

function request(options, body) {
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve({
        status: res.statusCode,
        headers: res.headers,
        body: data
      }));
    });
    req.on('error', reject);
    if (body) req.write(body);
    req.end();
  });
}

async function main() {
  // Step 1: GET homepage for acw_tc
  console.log('=== Step 1: GET / ===');
  let res = await request({
    hostname: 'liteweb.blacklake.cn',
    path: '/',
    method: 'GET',
    headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/131.0.0.0' }
  });
  const acwCookie = res.headers['set-cookie'].find(c => c.includes('acw_tc')).split(';')[0];
  console.log('Got acw_tc:', acwCookie.substring(0, 60) + '...');

  // Step 2: Login
  console.log('\n=== Step 2: POST /api/alien/v1/user/login ===');
  const passwordHash = sha3_224('Wyh04250');
  res = await request({
    hostname: 'liteweb.blacklake.cn',
    path: '/api/alien/v1/user/login',
    method: 'POST',
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/131.0.0.0',
      'Content-Type': 'application/json',
      'Cookie': acwCookie
    }
  }, JSON.stringify({ phone: '15800020603', password: passwordHash, orgCode: '135851' }));

  const loginResp = JSON.parse(res.body);
  const jwt = loginResp.data;
  if (!jwt) {
    console.log('Login failed:', loginResp);
    return;
  }
  console.log('Login OK, JWT length:', jwt.length);

  // Decode JWT payload
  const parts = jwt.split('.');
  const payload = parts[1];
  const padded = payload + '=='.substring(0, (4 - payload.length % 4) % 4);
  const decoded = Buffer.from(padded, 'base64').toString('utf-8');
  console.log('JWT payload:', decoded);

  // Step 3: Try search with IN operator (exactly as in test 1)
  console.log('\n=== Step 3: POST search ===');
  res = await request({
    hostname: 'liteweb.blacklake.cn',
    path: '/api/dytin/bizDataSearch/queryTaskListBySearchCondition',
    method: 'POST',
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/131.0.0.0',
      'Content-Type': 'application/json',
      'Cookie': acwCookie,
      'X-AUTH': jwt,
      'X-CLIENT': 'lite-web'
    }
  }, JSON.stringify({
    fieldQueryValues: [{ fieldName: 'processStatus', queryOperator: 'IN', fieldValue: ['0', '10'] }],
    page: { pageNum: 1, pageSize: 100 },
    orders: [{ fieldName: 'expiredDayCount', order: 'DESC' }]
  }));

  console.log('Status:', res.status);
  console.log('Response:', res.body.substring(0, 500));
}

main().catch(err => console.error('Error:', err));
