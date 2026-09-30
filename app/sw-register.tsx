'use client';
import { useEffect } from 'react';

export function SWRegister() {
    useEffect(() => {
        navigator.serviceWorker
            ?.register('/serviceworker.js')
            .then((r) => console.log('SW zarejestrowany, scope:', r.scope))
            .catch((e) => console.error('SW błąd:', e));
    }, []);

    return null;
}