const config = require('./config'),
  request = require('request-promise'),
  Promise = require('bluebird'),
    nem = require('nem-sdk').default,
  authLib = require('middleware_auth_lib');
const keyring = require('bcoin/lib/primitives/keyring');
const generate  = async (blockchainName, index = 1) => {
  const tokenLib = new authLib.Token({
    id: config.id,
    provider: config.oauthService.url,
    secret: config.secret,
  });

  const scopes = [config.signingsService.id];
  const token = await tokenLib.getToken(scopes);

  // const response2 = await request(`${config.signingsService.url}/keys`, {
  //   method: 'DELETE',
  //   headers: {Authorization: 'Bearer ' + token},
  //   json: {
  //     'address': '0xd78962e703eecef6c8b61b6ce010d21b19363e66'
  //   }
  // });
  // console.log('delete', response2);

  /*const response1 = await request(`${config.signingsService.url}/keys`, {
    method: 'POST',
    headers: {Authorization: 'Bearer ' + token},
    json: {
      'key': 'employ slice lounge game choose domain token sure palace beach lounge dream',
    }
  });
  console.log(response1);
    return;*/
  const response = await request(`${config.signingsService.url}/keys`, {
    method: 'GET',
    headers: {Authorization: 'Bearer ' + token},
    json: true
  });
    const wavesSign = require('@waves/signature-generator');
    const waves = response[0]['pubKeys'][0]['waves'];
    const keyBytes = wavesSign.libs.base58.decode(waves);
    console.log(wavesSign.utils.crypto.buildRawAddress(keyBytes));
    //console.log(nem.model.address.toAddress(nemK, -104));
    //console.log(new bitcoin.ECPair(null, publicKey.Q, { compressed: true }).getAddress());
    //const kr = new keyring(btc).getAddress('base58', Network.get('regtest'))
    //console.log(btc, kr);
};

const main = async () => {
await generate('eth');
}

main();
