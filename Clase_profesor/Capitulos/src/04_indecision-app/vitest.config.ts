import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
    viteConfig,
    defineConfig({
        test: {
            environment: 'jsdom', // Esto asegura que jsdom sea usado por defecto
            globals: true, // Si estás utilizando características globales de Vue Test Utils
        },
    }),
);
