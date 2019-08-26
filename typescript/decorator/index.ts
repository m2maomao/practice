function doSomething (name:any) {
    console.log('Hello, ' + name)
}

function loggingDecorator(wrapped:any) {
    return function() {
        console.log('Starting');
        const result = wrapped.apply(this, arguments);
        console.log('Finishied');
        return result;
    }
}

const wrapped = loggingDecorator(doSomething);

doSomething('Michael')