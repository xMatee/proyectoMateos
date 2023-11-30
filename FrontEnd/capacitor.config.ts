import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.Gestionate.app',
  appName: 'FrontEnd',
  webDir: 'dist/front-end',
  server: {
    androidScheme: 'http'
  }
};

export default config;