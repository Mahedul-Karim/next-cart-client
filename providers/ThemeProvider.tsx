"use client";

import Toast from "@/components/ui/Toast";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { loadUserFromStorage } from "@/store/slicer/user";
import { store } from "@/store/store";
import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import { Provider } from "react-redux";

const MuiProviders = dynamic(() => import("./MuiProviders"), { ssr: false });

function AuthProvider() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadUserFromStorage());
  }, [dispatch]);

  return null;
}

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <MuiProviders>
        <AuthProvider />
        {children}
      </MuiProviders>
      <Toast />
    </Provider>
  );
};

export default ThemeProvider;
