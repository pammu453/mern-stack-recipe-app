import admin from 'firebase-admin';

admin.initializeApp({
  credential: admin.credential.cert({
    "type": "service_account",
    "project_id": "mern-recipe-45d2f",
    "private_key_id": process.env.PRIVATE_KEY_ID,
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDIrUvmrFWCYBRR\nSJ7b8XWcVv0xMjT4f/IM5zKfz9t4qXGR6I0hzhgGmsCZu2yBbaiTkywcyxW3SmL2\nHwgScEeVft0n5KnaJmHyZbQQ17rliAHYu0g2ZYmzceB6F/AoZ1Jl3PwBNBsSRudt\na53UfFbCOqc58AHrYetSm/Tqjsu4KVWeccrXbm4UIl7pVGN3Yq4VuK0TMRX5kS7R\nE7k4nAF3nGUs3V73icN3VoZJWEVlpBWJ7/nIRF5cCYimvtDvPezk4UEts5eT5z5p\ndIC+VlnupAeqbsNmEG92y5GYgRKjUL8SFishvP+7CNXO5NWbyfhaunV+Vbk3H9Cm\nX6GXXdT7AgMBAAECggEASGbl1JLmwwQhMHZwAlCqqz5jWUWRAPtAfFFJ3Yjj2TPh\nKtBpYwH1fySESrLpYgULZjsaFkVbT2cCL2RgyC5EVXaRGhyQ/4kLm6YAAnejEb8x\nU122nxGhTeHPKJ3MYvdsLh49ub1v6vcz9jF2nzxBHRCGVwv11VPd0E8+XQYqEAYN\nbNBX3NH5Aw9oMl9Q9BNIS4Pl03hx4qPwJPPL/gDXcK3Yonre7vJ8wYYSX+6Z0T+5\nLijyijs6Tq4gPmwf8oAmxpCHCpYwL8/YMLtuV70K7hMWhqRueJHf7k0mWCwb6vSm\nBttC1kV035NLBVda2Zv9TjeJMWBiiFyd47UMXt4b4QKBgQD59Zx6plhYv3/8Z9ID\nV0JsCF8hbJYqRffZga0psb3YvZ2XGqlPRDi0i6IyXrXgdjmty5hE9ZPa18GaFspH\nZl32MxQuMLtGmxDvdOs+2hAzBzK9hWZwdCYN10crQ2GecIko8HZMLGV31UFzbnTD\nsFuEJ6uqM+iEqTdMplZmV3Xz8QKBgQDNhsvX4eaWgUTLh0N6oBMhxM7cdUk9R9o4\nfYjI6T319DgFclyU5NV79+An5QmC9agoIF3//dvIXYx881zvqwWE1P7qDP2+NCgr\ngIJhrWkPqyBMbpnmbYWDaWSgetas0mdvB77Lrk3UFeQy5O6nr/Yls+uUs/A+QgWB\n0giaRwkTqwKBgGDnHg3SdUeangR9P0a6Sm7VZAPyM9kZnPd+tWIHnSDsia6t0FuB\niDY+N9gtLXdifgPpfROm3PYnVM/m6+54Og8bSESL8d5yeUNL4XNRWJxfuwUMNWV9\nMc+F2Pplue+RkysC5emsAH5Pd3tHpA7FTQVT19I5I3hinaSii7ZLS9gRAoGAeLDA\ngWyJsTYGBRLQYHEh6wGcjD9fm9nW3rdxHLJDDWy1fRVUIqdiaiL8gdDwzfOeJLol\nGQ+lAbtVpYZvu9oNKpy9eQnZ89jDAhC7/8oKWQYfuGJ2g6cq8Slxyv93kxMXZE8D\nDq6zy2hzkiN3tgcRn8BRBgjIenbgrwR8wsQWI3MCgYEAn5mQFaGReXqfLTySJLYX\ndX/OuM2ZQg5JfzW4aSZxiYryecCJK+CnuYy++uWiF+IhtenB5picIS95okSbg85m\nuwMGCbptrm7HwQarD9vpI1WeoRPahdAznRcYn59WC50HenKuNB08Wmj7qNnvduFM\nEGXhABeuS1OFd/ST3oUn508=\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-bz4pd@mern-recipe-45d2f.iam.gserviceaccount.com",
    "client_id": "103443203463405146392",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-bz4pd%40mern-recipe-45d2f.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
  }),
  databaseURL: 'https://mern-recipe-45d2f.firebaseio.com'
});

export default admin;