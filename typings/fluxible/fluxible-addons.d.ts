declare module __fluxible_addons {
    export var createStore: Function

    export class BaseStore {
        emitChange()
        getContext()
        addChangeListener(callback)
        removeChangeListener(callback)
        shouldDehydrate()
    }
}

declare module "fluxible/addons" {
    export = __fluxible_addons
}
