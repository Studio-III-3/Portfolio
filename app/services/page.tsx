import React from 'react';
import Services from '@/components/main/Services';

export default function ServicesPage() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Services />
      </div>
    </main>
  );
}