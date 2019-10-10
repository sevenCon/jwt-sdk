# jwt-sdk

```
yarn add jwt-sdk
```
or
```
npm install jwt-sdk --save
```

# support
[x] vue.js support
[ ] react.js support

# usage
```

```
# api
### jwt.use(httpRequest)

```
import axios from "axios";
import jwtSdk from "jwt-sdk";

jwtSdk.use(axios);
```

### jwt.logout(path)
will clear localstorage session info and jump to path; Generally, `path` set to the login page url;
