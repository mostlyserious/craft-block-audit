import vitepack from '@mostlyserious/vitepack';

const args = {
    https: false,
    base: '/dist/',
    outDir: 'src/resources/dist'
};

export default vitepack(args, config => {
    config.build.rollupOptions = {
        input: 'src/resources/src/js/main.js'
    };

    return config;
});
