import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {fileURLToPath,URL} from 'node:url';
export default defineConfig({base:'./',plugins:[react()],resolve:{alias:{'@':fileURLToPath(new URL('.',import.meta.url))}},build:{sourcemap:false,rolldownOptions:{output:{manualChunks(id){
 if(id.includes('/node_modules/')){
  if(id.includes('/react-dom/')||id.includes('/react/'))return 'react-runtime';
  if(id.includes('/lucide-react/'))return 'icons';
  if(id.includes('/@base-ui/')||id.includes('/radix-ui/'))return 'interface';
  if(id.includes('/recharts/'))return 'charts';
  return 'vendor';
 }
 if(id.includes('/lib/academy/study/units.json'))return 'lessons';
 if(id.includes('/lib/academy/study/'))return 'learning-content';
 if(id.includes('/lib/academy/'))return 'academy-service';
 if(id.includes('/components/'))return 'components';
 if(id.includes('/app/'))return 'academy-ui';
 }}}}});
