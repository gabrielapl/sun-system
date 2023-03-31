import {ThemeProvider} from 'styled-components';
import theme from './src/styles/theme';
import { Routes } from './src/routes';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <ThemeProvider theme={theme} >
      <StatusBar />
      <Routes />
    </ThemeProvider>
  );
}

