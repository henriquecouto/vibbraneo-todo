# How to use

### Auth Context

Use this to set and get auth data.

```js
import { AuthProvider, useAuth } from "./features/auth";
import { Suspense } from "react";

const AnyComponentUsingAuthInfo = () => {
  const { authToken, setAuthToken } = useAuth();
  return (
    <>
      <button onClick={() => setAuthToken('new token')))}>change auth token</button>
      <h1>current token: {authToken}</h1>
    </>
  );
};

const ContainerComponent = () => {
  return (
    <Suspense fallback={<h1>Loading Display Component</h1>}>
      <AuthProvider>
        <AnyComponentUsingAuthInfo />
      </AuthProvider>
    </Suspense>
  );
};
```

### Auth Form Layout

Use this to show a login form that dispatch auth request and changes auth data

```js
import { AuthForm, AuthHeader } from "../features/auth";

const YourScreenComponent = () => {
  return <AuthForm />;
};
```
