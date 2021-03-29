import 'react-native-gesture-handler';

import React , {StrictMode} from 'react';
import { StatusBar } from 'expo-status-bar';
import { QueryClient, QueryClientProvider } from "react-query";
import { Wrapper as AppWrapper } from "@/wrapper";
import { makeMockingServer } from "@/services/server";

makeMockingServer();
const queryClient = new QueryClient();

export default function App() {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <StatusBar/>
        <AppWrapper/>
      </QueryClientProvider>
    </StrictMode>
  );
}