import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {viteSingleFile} from 'vite-plugin-singlefile';
export default defineConfig({plugins:[react(),viteSingleFile()],base:'/jeddah-room-booking/',build:{rollupOptions:{external:['react','react-dom/client','@supabase/supabase-js']}}});
