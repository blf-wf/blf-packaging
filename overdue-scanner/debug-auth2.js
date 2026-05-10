const https = require('https');
const crypto = require('crypto');
const sha3_224 = require('js-sha3').sha3_224;

// Collect cookies across requests
let cookieStore = '';

function getAcwTc() {
  return new Promise((resolve) => {
    const req = https.request({
      hostname: 'liteweb.blacklake.cn',
      path: '/',
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/131.0.0.0',
        'Accept': 'text/html,application/xhtml+xml',
        'Accept-Language': 'zh-CN,zh;q=0.9',
      }
    }, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        const cookies = res.headers['set-cookie'] || [];
        cookies.forEach(c => {
          const val = c.split(';')[0];
          if (!cookieStore.includes(val.split('=')[0] + '=')) {
            cookieStore += (cookieStore ? '; ' : '') + val;
          }
        });
        console.log('GET / Status:', res.statusCode);
        console.log('Set-Cookie count:', cookies.length);
        console.log('Cookies now:', cookieStore.substring(0, 150));
        resolve();
      });
    });
    req.on('error', (e) => { console.error(e); resolve(); });
    req.end();
  });
}

function apiPost(path, body, extraHeaders = {}) {
  return new Promise((resolve) => {
    const bodyStr = JSON.stringify(body);
    const headers = {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/131.0.0.0',
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Accept-Language': 'zh-CN,zh;q=0.9',
      ...extraHeaders
    };
    if (cookieStore) headers['Cookie'] = cookieStore;

    const req = https.request({
      hostname: 'liteweb.blacklake.cn',
      path: path,
      method: 'POST',
      headers: headers
    }, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        // Update cookies from response
        const cookies = res.headers['set-cookie'] || [];
        cookies.forEach(c => {
          const val = c.split(';')[0];
          if (!cookieStore.includes(val.split('=')[0] + '=')) {
            cookieStore += (cookieStore ? '; ' : '') + val;
          }
        });
        resolve({ status: res.statusCode, body: data });
      });
    });
    req.on('error', (e) => { console.error('Request error:', e.message); resolve(null); });
    req.write(bodyStr);
    req.end();
  });
}

async function main() {
  // Step 1: GET homepage
  console.log('=== Step 1: GET / ===');
  await getAcwTc();

  // Step 2: Login
  console.log('\n=== Step 2: Login ===');
  const passHash = sha3_224('Wyh04250');
  let res = await apiPost('/api/alien/v1/user/login', {
    phone: '15800020603',
    password: passHash,
    orgCode: '135851'
  });

  if (!res || res.status !== 200) {
    console.log('Login failed:', res);
    return;
  }

  const loginData = JSON.parse(res.body);
  const jwt = loginData.data;
  console.log('Login OK, JWT length:', jwt ? jwt.length : 0);

  if (!jwt) { console.log('No JWT:', res.body); return; }

  // Decode JWT
  const payloadB64 = jwt.split('.')[1];
  const padded = payloadB64 + '=='.substring(0, (4 - payloadB64.length % 4) % 4);
  console.log('JWT payload:', Buffer.from(padded, 'base64').toString());

  // Step 3: Try search with empty filters
  console.log('\n=== Step 3: Search (empty fieldQueryValues) ===');
  res = await apiPost('/api/dytin/bizDataSearch/queryTaskListBySearchCondition', {
    fieldQueryValues: [],
    page: { pageNum: 1, pageSize: 2 },
    orders: [{ fieldName: 'expiredDayCount', order: 'DESC' }]
  }, { 'X-AUTH': jwt, 'X-CLIENT': 'lite-web' });

  console.log('Status:', res.status);
  const data = JSON.parse(res.body);
  console.log('Response keys:', Object.keys(data).join(', '));
  console.log('code:', JSON.stringify(data.code), 'msg:', data.msg);
  if (data.data) {
    console.log('data type:', typeof data.data);
    console.log('data keys:', Object.keys(data.data).join(', '));
    if (data.data.data) {
      console.log('Tasks count:', data.data.data.length);
      console.log('Total:', data.data.total, '| totalCount:', data.data.totalCount);
    }
  }
}

main().catch(console.error);
