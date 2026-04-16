import { defineConfig } from 'vite'
import path from 'path'
import { fileURLToPath, URL } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],

  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks for large libraries
          'vendor-react': ['react', 'react-dom'],
          'vendor-router': ['react-router', 'react-router-dom'],
          'vendor-ui': ['@mui/material', '@mui/icons-material'],
          'vendor-radix': [
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-tooltip',
            '@radix-ui/react-popover',
            '@radix-ui/react-accordion',
            '@radix-ui/react-tabs',
            '@radix-ui/react-select',
            '@radix-ui/react-checkbox',
            '@radix-ui/react-avatar',
            '@radix-ui/react-label',
            '@radix-ui/react-progress',
            '@radix-ui/react-slider',
            '@radix-ui/react-switch',
            '@radix-ui/react-toggle',
            '@radix-ui/react-scroll-area',
            '@radix-ui/react-separator',
            '@radix-ui/react-collapsible',
            '@radix-ui/react-alert-dialog',
            '@radix-ui/react-hover-card',
            '@radix-ui/react-menubar',
            '@radix-ui/react-navigation-menu',
            '@radix-ui/react-radio-group',
            '@radix-ui/react-toggle-group',
            '@radix-ui/react-context-menu',
            '@radix-ui/react-aspect-ratio'
          ],
          'vendor-motion': ['framer-motion', 'motion'],
          'vendor-charts': ['recharts'],
          'vendor-utils': [
            'axios',
            '@tanstack/react-query',
            'zustand',
            'react-hook-form',
            'date-fns',
            'clsx',
            'class-variance-authority',
            'tailwind-merge',
            'lucide-react',
            'sonner',
            'canvas-confetti'
          ]
        }
      }
    },
    // Increase chunk size warning limit to 1000 kB
    chunkSizeWarningLimit: 1000
  }
})
