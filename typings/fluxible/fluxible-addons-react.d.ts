/// <reference path="../react/react.d.ts"/>

declare module "fluxible-addons-react" {
    export function connectToStores<P>(
        Component: new () => __React.Component<P, any>,
        stores: Array<(new () => __fluxible_addons.BaseStore)>,
        getStateFromStores: (context: __fluxible.IFluxibleContext, props: P) => P,
        customContextTypes?): __React.ComponentClass<P>

    export var provideContext: Function;
}
