declare module "fluxible/addons" {
    export var createStore: Function

    export class BaseStore {
        emitChange()
        getContext()
        addChangeListener(callback)
        removeChangeListener(callback)
        shouldDehydrate()
    }
}
