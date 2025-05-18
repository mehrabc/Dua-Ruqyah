'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export const RouteTransitionBar = () => {
    const pathname = usePathname();
    const [showBar, setShowBar] = useState(false);

    useEffect(() => {
        setShowBar(true);
        const timeout = setTimeout(() => setShowBar(false), 800);

        return () => clearTimeout(timeout);
    }, [pathname]);

    return (
        <div className="fixed top-0 left-0 w-full h-1 pointer-events-none z-[9999] overflow-hidden">
            {showBar && (
                <div
                    key={pathname}
                    className="h-full bg-darkGreen route-bar-animation"
                />
            )}
        </div>
    );
};
