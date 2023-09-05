import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.muscletrack',
  appName: 'MuscleTrack',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
