# How to use

### Setting a new cookie value

```
cookieManager.set({
  cookieName: "name",
  value: "value",
  expirationDate: date,
  globally: true,
});
```

### Reading a cookie value

```
const value = cookieManager.get({ cookieName: "name" });
```

### Removing a cookie value

```
cookieManager.remove({ cookieName: "name" });
```
