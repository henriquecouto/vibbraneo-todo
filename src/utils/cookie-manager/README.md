# How to use

### Setting a new cookie value

```js
cookieManager.set({
  cookieName: "name",
  value: "value",
  expirationDate: date,
  globally: true,
});
```

### Reading a cookie value

```js
const value = cookieManager.get({ cookieName: "name" });
```

### Removing a cookie value

```js
cookieManager.remove({ cookieName: "name" });
```
