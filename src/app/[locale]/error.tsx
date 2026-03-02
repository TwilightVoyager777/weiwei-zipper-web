'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('[Page Error]', error);
  }, [error]);

  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">页面出错了</h1>
      <p className="text-gray-600 mb-8 max-w-md mx-auto">
        出现了一个意外问题。你可以重试，或直接通过联系页与我们沟通。
      </p>
      <button
        onClick={reset}
        className="bg-blue-800 text-white px-8 py-3 rounded font-semibold hover:bg-blue-900 transition-colors"
      >
        重新加载
      </button>
    </div>
  );
}
