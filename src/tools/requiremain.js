/**
 * Created by lee on 2017/3/4.
 */
require.config({
    baseUrl: "src",
    paths: {
        "jquery": ["jquery-3.1.0"],
        "popup": ["lib/popup"],
        "moduleA": ["app/moduleA"],
        "moduleB": ["appmoduleB"]
    },
    shim: {
        'popup': {
            deps: ['jquery']
        }
    }
});