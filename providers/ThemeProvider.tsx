"use client";

import Toast from "@/components/ui/Toast";
import { store } from "@/store/store";
import dynamic from "next/dynamic";
import React from "react";
import { Provider } from "react-redux";

const MuiProviders = dynamic(() => import("./MuiProviders"), { ssr: false });

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <MuiProviders>{children}</MuiProviders>
      <Toast />
    </Provider>
  );
};

export default ThemeProvider;
