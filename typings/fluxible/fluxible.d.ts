declare module __fluxible {
    interface IFluxibleContext {
        getStore<S>(store: new () => S): S
    }
}

declare module "fluxible" {
    export = __fluxible;
}
