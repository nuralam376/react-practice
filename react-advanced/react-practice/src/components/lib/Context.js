class Context {
    constructor(value = null) {
        this.value = value;
    }

    Provider = ({ value, children }) => {
        this.value = value;
        return children;
    };

    Consumer = ({ children }) => children(this.value);
}

function createContext() {
    const context = new Context();
    return {
        Provider: context.Provider,
        Consumer: context.Consumer,
    };
}

export default createContext;
