import { resolve } from 'path';
export const webpack = {
    alias: {
        // eslint-disable-next-line no-undef
        '@': resolve(__dirname, 'src'),
    },
};