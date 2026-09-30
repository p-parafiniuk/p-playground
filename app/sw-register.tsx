'use client';
import { useEffect } from 'react';

export function SWRegister() {
  useEffect(() => {
    navigator.serviceWorker?.register('/serviceworker.js');
  }, []);
  return null;
}