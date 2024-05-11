'use client';

import { trpc } from '@/utils/trpc';
import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState('');

  trpc.hello.helloWs.useSubscription(undefined, {
    onData: (data) => {
      setCount(data);
    },
  });

  const { data } = trpc.hello.hello.useQuery({ text: 'world' }, { enabled: count.length > 0 });

  console.log(data);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-5xl text-blue-500">
      {count}
    </main>
  );
}
