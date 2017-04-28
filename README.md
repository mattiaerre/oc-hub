# oc-hub

This repository has been created as a central hub for all the OpenComponents built by Mattia Richetto.

## How to SSR

```bash
git clone https://github.com/mattiaerre/oc-hub.git
cd oc-hub/
yarn
cd oc-with-react/
yarn
cd ..
yarn start
```

You should now have the OpenComponents registry running on **localhost:3030**

Then open another iTerm tab and change directory to **how-to-ssr/**

```bash
cd oc-hub/how-to-ssr/
yarn
yarn start
```
You should now have the Express app running on **localhost:3000**

If you view source you will see that the last component that uses React has been server side rendered

## Other resources

- [https://gist.github.com/mattiaerre/e7de3295d9a16b8b69963997e09276d2](https://gist.github.com/mattiaerre/e7de3295d9a16b8b69963997e09276d2)
