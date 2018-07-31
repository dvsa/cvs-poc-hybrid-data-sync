# CVS - PoC Hybrid Data Sync
This PoC has been created to validate some scenarios around offline working.  It uses AWS AppSync as the backend graphql API and Apollo as the client.

## Getting Started
To get the projec working locally you'll need to install git secrets as this is used as a prepush check to mitigate the release of secrets into the public.  For more information check the [Git Secrets Github Repo](https://github.com/awslabs/git-secrets).

### Config
You also need to create a configuration file called `app-config.ts` in the `src` folder.

The contents of this file are as follows:

```javascript
export const config = {
    aws: {
        graphQLUrl: "REQUIRED",
        graphQLApiKey: "REQUIRED"
    }
  };
```

